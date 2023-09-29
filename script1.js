// Variables in JS

/*
1) let
2) var 
3) const
*/

// Let 
let myName = 'Abdul Samad'
myName = 'Muhammad Ayan'
let myNum = 22
myNum = 69
let total = myName+" "+myNum
console.log(total)
console.log('My name is',myName)
console.log('My Number is',myNum)


// Var 
var favsports = "Cricket"
favsports = "Football"
console.log(favsports)

// Const
const father = "Champaklal"
// father = "popatlal"
const speedOflight = 9.8
const piValue = 3.14
const son = "Jethalal"
const fatherAge = 70
const sonAge = 45
console.log(father)
console.log(speedOflight)

// Data Types In js

/*
1)Primitive
*) strings
*) number
*) boolean
*) undefined
*) null

2) Non Primitive
*) Array
*) objects

*/

let loading1 = true
console.log("loading is:",loading1)

let loading2 = false
console.log("loading is:",loading2)

let myNum1 = 3>4
console.log(myNum1)

let myvalueis;
console.log(myvalueis)


let rollno = null
let username = "kevin peterson"
let realage = null
allrecords = rollno+"\n"+ username+"\n" +realage
console.log(allrecords)


// let car1 = "Audi"
// let car2 = "Corolla"
// let car3 = "Astin martin"
// console.log(car1)
// console.log(car2)
// console.log(car3)

let mycars = ["Audi", "Corolla", "Astin martin"]
console.log(mycars.indexOf("Corolla"))

let myObject = {
    personalname: "Abdul Samad",
    peronaage: 22,
    favoriteact1: "Tom Cruise",
    favoriteact3:"Johnny Deep",
    maritalstat: undefined,
    bankbalance: null
}

console.log(myObject)


let secreatnum = 3>= 4;
console.log(secreatnum)

let c = 20%3;
console.log(c)


let khatarnaknum = 35;
khatarnaknum += 3
 
let dosranum = 25
dosranum %= 4
console.log(dosranum)

let baranum = BigInt("2147164812402749124127126491846")
console.log(baranum)

let nayanumber = 33.342131321111111111111111111111111111111720716748
console.log(nayanumber)