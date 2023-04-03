// given an array of numbers, search for the following target and return -1 if not found 
// else the index

function binary(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    console.log("left1",leftIndex);
    console.log("right1", rightIndex)
 // check if the array exists first and not search past the no. of array elements
 //if th while loop passes , it will continue looping through it.
 //left shoul always be less than right, means the array does not go beyond the array elements.
    while(leftIndex<= rightIndex){
        console.log("left2", leftIndex);
        console.log("right2", rightIndex);
        let middle =Math.floor((leftIndex +rightIndex)/2);
       if (arr [middle] ===target){   //checks if the middle is equal to the right
          return middle;
       }
       else if(arr[middle]>target){  // if middle is more, target is on the left side, discard right side
                    // the middle becomes our last(-minus 1 for the middle to be last)
         rightIndex= middle -1
         
       }else{
        leftIndex = middle +1
       }

    }
   return -1;


}
let num = [1,3,6,8,9,56,89];
let target =9;
console.log(binary(num,target))
