// let score = 33 
// let score = "33"     //  output : type = number
// let score = "33abc"  //  output : type = NaN
// let score = null     // output : type = 0
// let score = "33abc"  // output : type = NaN
// let score = true     // output : type = 1
// console.log(typeof score)
// console.log(typeof(score));

// let valueInNumber= Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);   // here the data conversion gets messy, because when we change the string into a number it will change. But if there is some case that the string contains number as well as the symbols (for e.g. "33abc") then it will show the datatype as number. when checking the value of that same variable it will print NaN (Not a Number)


/*     
 "33" => 33   stirng converts to number
 "33abc" => NaN   string converts to NaN  due to mixing of types
  true => 1; false => 0

*/

// let isloggedIn = true
// let isloggedIn = ""
// let isloggedIn = "Ash"

// let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);


// 1 => true; 0=> false
// "" (empty string) => false
// "Ash" => true

let somenumber= 43.89
let StringNumber= String(somenumber)
console.log(StringNumber);
console.log(typeof (StringNumber));

