let items = [2,5, "swwet", false, 45];
 //Array Methods
   // add item at the end of the array
items.push(62);
console.log(items);
   // add item at the start of the array
items.unshift(6.5);
console.log(items);
   //remove item at the end of an array
items.pop();
console.log(items);
   //remove item at the start of an array
items.shift();
console.log(items);

   //Array Sorting
let num  =[1,9,34,12,25,30];
 //in ascending 
let sorted = num.sort((a,b)=>a-b);
console.log(sorted);
  // in descending
let sorte = num.sort((a,b)=>-a-b);
console.log(sorte);

  // given an array of x elements, return an array with each element in x multiplied by 2
          // create an array of x
          //go through every element in array x
          // multiply every x element by 2
  const result = num.map(
    (item)=>{
        return item*2
    }
  )
  console.log(result);
  //for each
let newArray = []
const result2 = num.forEach((item,index)=>{newArray.push(item*2)});
console.log(newArray);
console.log({result2});
      // concat --joining Arrays
let a = [1,3,4]
let b = [4,5,6]
let joined1 = a.concat(b);
console.log({joined1});
  // spread operators  // used to destructure an array and join arrays too
    //add/join
  let c = [1,40, ...a, ...b]
// console.log({c});
   //destructuring
   let [z,x, ...e] = c;
   console.log({z});
   console.log({x});
   console.log({e});


   //DATA STRUCTURES AND ALGORITHIMS
          // helps write specific code
          /// DATA STRUCTURES
      //Arrays/Lists
      //Trees -- arrange from main node to subnodes
      //Stacks -- LIFO/ last in first out
      // queues --FIFO  / First in first out
      //Set  // to ensure there are no duplicates
      //Hash Maps  // connect items together
      //Hash Tables// same to hashmaps
            