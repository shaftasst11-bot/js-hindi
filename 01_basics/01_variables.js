const accountId = 144413
let accountEmail = "ashwin23@gmail.com"
var accountPassword ="12345"
accountCity =" Kolhapur"
let accountState;
// accountId =2  // not allowed 

accountEmail = "ash@as.com"
accountPassword = "134342"
accountCity = "Banglore"

/* never use var 
to avoid the issue of block scope and functional scope */ 

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
