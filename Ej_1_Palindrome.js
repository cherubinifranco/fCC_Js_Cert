function palindrome(str) {
    let x = str.match(/[a-z0-9]/gi);
    let y = x.map(x=> x).reverse().join("").toLowerCase();
    x = x.join("").toLowerCase();
    return(x === y)
}
  
palindrome("A man, a plan, a canal. Panama");