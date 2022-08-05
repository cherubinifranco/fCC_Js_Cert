function checkCashRegister(price, cash, cid) {



  let ammounts = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ]

  let totalCID = cid.reverse().reduce((p,c)=>p+c[1], 0);
  let changeToGive = cash - price;
  let aTRY = cash - price;
  let x = [];



  for (let i in ammounts){
    let y = Math.floor(aTRY/ammounts[i][1]);
    if(y > 0){
      let money = y*ammounts[i][1];
      if(money <= cid[i][1]){
        aTRY -= money;
        x.push([ammounts[i][0], money])
      }else{
        aTRY -= cid[i][1];
        x.push([ammounts[i][0], cid[i][1]]);
      }
      aTRY = aTRY.toFixed(2);
    }
  }



  if(aTRY > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if(totalCID == changeToGive){
    return {status: "CLOSED", change: cid.reverse()};
  }else {
    return {status: "OPEN", change: x}
  }
}

console.log(

  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  )