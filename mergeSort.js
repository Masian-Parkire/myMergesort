function divideArray(arr){
    if (arr.length<=1){                 // to ensure it does not divide an array with
        return arr;                   //  a single element
    }
    let middle = Math.floor(arr.length/2);   //to make sure the division returns a whole number //rounds down
    let left =arr.slice(0, middle);          //start slicing from zero to middle
    let right =arr.slice( middle);            // start from middle and slice
    console.log({left})
    console.log({right})
    return sortedArray(divideArray(left),divideArray(right))   //after all the computation
}
function sortedArray(left, right){
let emptyArray = []                   //to hold our new array that will be created
while (left.length && right.length){   //this two conditions should be executed
    if (right [0] < left[0]){          //
        emptyArray.push(right.shift());  // if condition is true,remove from right and put in empty array
    }
    else{
        emptyArray.push(left.shift())     // if not remove from right side and put in empty array
    }
}
console.log({emptyArray});
return [...emptyArray,...left,...right];
}
let arr = [3,10,2,26,15,11,4];       // the numbers we needed to compute
console.log(divideArray(arr));       




//read on arrays and strings but arrays more








