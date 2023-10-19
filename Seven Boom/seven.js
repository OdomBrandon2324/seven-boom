// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

const sevenBoom = (arr) => {
    const strArr = arr.join("");
 
   // Check if the string contains the digit 7
   if (strArr.includes("7")) {
     return "Boom!";
   } else {
     return "There is no 7 in the array.";
   }
 }
 console.log(sevenBoom([2, 55, 60, 97, 86, 9]));
 
 
 
 
 
 
 // for(let i = 0; i < arr.length; i++){
 
 //     if(arr[i] > 10){
 //         const digitArray = Array.from(String(arr[i]), Number);
 //         for(let j = 0; j < digitArray.length; j++){
 //           if(digitArray[j] === 9){
 //             console.log("Boom!")
 //             return;
 //           }
 //           return;
 //         }
 //     } else if(arr[i] === 9 ){
 //         console.log("Boom!");
 //         return;
 //       } 
 //       else {
 //         console.log("There is no 9 in the array.");
 //         return;
 //       }
 //     }
 
 