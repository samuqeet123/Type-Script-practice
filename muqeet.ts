
// here it replaces , by given argument like here i used and
// console.log(array.join(" and "))

// here it filters in return new array
//console.log(array.filter((a) => a.length > 5))

// console.log(array.forEach((element, index) => console.log(`here is element :${element} here is index ${index}`)))
// array.forEach((element, index) => console.log(`here is element :${element} here is index ${index}`))

/* array.includes
array.indexOf
array.map
array.push
array.pop
array.shift
array.unshift
array.slice
array.splice
array.toString
array.reduce*/


// && ! and ||, "and, not & or concept"
/*if (false || true){
    console.log("Ramazan Mubarak")
} else if (true || true) {
    console.log("eid mubarak")
}
else {
    console.log("Shawal Mubarak")
}

// Program for making Nadra Cards by using booleans

let is_over_18 = true
let have_bform = false
let is_present = true

if ((is_over_18 && have_bform) || !is_present){
    console.log("Here is you identity card")
} else {console.log("you are not eligible")}


console.log(array.forEach((element, index) => console.log(`here is element :${element} here is index ${index}`)))


// shift and pop removes 1st and last value of element and returns it.
// push add mew element in last of the array and returns new length.*/
//  
let user = "Abdul Muqeet"

function a(user:string){
    console.log( `user name is ${user} + with ${user}`)
}
a("ahmed")

function bio(name:string, num:number){
    return `My name is ${num} and my contact # is ${name}`
}
console.log(bio("junaid", 123))

function identi(name:string = "Arif", num:number = 12345){
    return `My name is ${name} and my contact # is ${num}`
}
console.log(identi("ahmed", 2344))

// by default parameter
function denti(name:string = "Arif", num:number = 12345){
    return `My name is ${name} and my contact # is ${num}`
}
console.log(denti("ahmed"))
// optional parameter
function enti(name:string, num?:number){
    return `My name is ${name} and my contact # is ${num}`
}
console.log(enti("ahmed"))

console.log("asdf")
