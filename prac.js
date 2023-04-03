let text = "Gubo,Purity,Akech,Ann,Vallary,Purity,Joan,Purity,Muyale"
console.log(text.length)
console.log(text.slice(3,7))
console.log(text.substring(5,10))
console.log(text.replace("Purity","Mercy"))
console.log(text.replace(/Purity/g,"Mercy"))
console.log(text.toUpperCase())
console.log(text.toLowerCase())
let text2 =("Ian,Kelvin,Brian")
let text3= text.concat('',text2)
console.log(text3)
console.log(text.charAt(12))
console.log(text.charAt(20))
console.log(text[5])
console.log(text.split(','))
console.log(text.indexOf("Vallary"))   //first occurence of Ann
console.log(text.lastIndexOf("Vallary"))
console.log(text.match("lar"))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 3];
console.log(fruits.length)
console.log(fruit)

const names =["Serah","Akinyi","Clarine","Grace","Alice"]
let nam =names[names.length -3];
console.log(nam);
 
const numbers =[1,2,3,4,5]
numbers.push (8,9)             // addnumber at the end of an array
console.log(numbers);
console.log(numbers.pop()); // removes and returns last element
console.log(numbers.shift());  // removes and returns first element
console.log(numbers.unshift(6,7,9)); // adds new elements to the start of an array and returns the new length
console.log(numbers.sort());  // arranges them in ascending order
console.log(numbers.includes(3)) ; // checks if the element is in there
console.log(numbers.slice(2,6)) ;    // returns from a given indexes
console.log(numbers.reverse());
console.log(numbers.join(","))
console.log(numbers.toString());

const jina =["Serah","Akinyi","Clarine","Grace","Alice", "aggy","Grace","Kev","Grace"];
const indAkinyi = jina.indexOf("Grace") ; // first occurence of Grace in an Array
console.log(indAkinyi);
const indiAkinyi = jina.lastIndexOf("Grace"); //last occurence of Grace in an Array
console.log(indiAkinyi)

let num = [3, 5, 4, 8, 9]
const nums = num.map(
(item)=>{
    return item * 2
}
)
console.log(nums)


