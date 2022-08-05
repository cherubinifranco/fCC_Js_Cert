function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return str.split("")
        .map(x => {
            let index = abc.indexOf(x);
            if(index < 0){return x}
            if(index < 13){
                return abc[index + 13]
            }else{
                return abc[index-13]
            }
        })
        .join("");
}

rot13("SERR CVMMN!");

console.log(rot13("SERR CVMMN!"))