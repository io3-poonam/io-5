// // function number(){
// //     let numberArr=Number(prompt(["enter the number 5"]))
// //     // let numberArr=5;
// //     let arrPresentNumber=[];
// //     for(let i=1;i<numberArr.length;i++){
// // console.log(`number ${numberArr[i]} ${i} ${numberArr}`)
// // console.log(`number  ${i}`)
// //     }
// // // console.log(`number ${numberArr} `)

// // }number();


// // 2-----Five numbers are entered from the keyboard into an array. Write a program to find out how many of them are positive, how many are negative, how many are even and how many odd.
// //         positive,
// //         negative,
// //         even,
// // Create an array to store the numbers
// // array of numbers
// // const nums = [
// //     4, 23, 7, 39, 19, 0, 9, 14, 89, 7, 1545, 5498, -35, 522, -0415, 78, 56, -34,
// //   ];
//   // const numbers = [];
//   // const evens = [];
//   // const odds = [];
//   // const neg = [];
  
// //   for (let i = 0; i < 5; i++) {
// //   const nums=parseFloat(prompt("enter the number ",i+1))
// //     console.log(`-->${i} --->`, nums);
// //     numbers.push(nums);
// //     if (nums[i] < 0) {
// //       neg.push(nums[i]);
// //     } else if (nums[i] % 2 == 0) {
// //       evens.push(nums[i]);
// //     } else {
// //       odds.push(nums[i]);
// //     }
// //   }
  
// //   console.log("Evens", evens);
// //   console.log("odds", odds);
// //   console.log("neg", neg);
// const numbers = [];

// for (let i = 0; i < 5; i++) {
//     const num = parseFloat(prompt(`Enter number any number digit${i + 1}:`));
//     numbers.push(num);
//     console.log("num",i,num)
//     // const numbers = [];

// // // Function to check if a number is positive
// function isPositive(num) {
//   return num > 0;
// }

// // Function to check if a number is negative
// function isNegative(num) {
//   return num < 0;
// }

// // Function to check if a number is even
// function isEven(num) {
//   return num % 2 === 0;
// }

// // Input five numbers into the array
// for (let i = 0; i < 5; i++) {
//   const num = Number(prompt(`Enter number ${i + 1}:`));
//   numbers.push(num);
//   console.log("num",num)
// }

// // Initialize counters
// let positiveCount = 0;
// let negativeCount = 0;
// let evenCount = 0;
// let oddCount = 0;

// // Count the positive, negative, even, and odd numbers
// for (const num of numbers) {
//   if (isPositive(num)) {
//       positiveCount++;
//   console.log("num isPositive",num)

//   } else if (isNegative(num)) {
//       negativeCount++;
//   console.log("num isNegative",num)

//   }

//   if (isEven(num)) {
//       evenCount++;
//     console.log("num isEven",num)

//   } else {
      
//       oddCount++;
//       console.log("num  oddCount",num)
//   }
// }

// // Display the results
// console.log(`Positive numbers: ${positiveCount}`);
// console.log(`Negative numbers: ${negativeCount}`);
// console.log(`Even numbers: ${evenCount}`);
// console.log(`Odd numbers: ${oddCount}`);
// }
// Initialize arrays to store positive, negative, even, and odd numbers
// let positiveNumbers = [];
// let negativeNumbers = [];
// let evenNumbers = [];
// let oddNumbers = [];

// // Function to check if a number is even
// function isEven(num) {
//   return num % 2 === 0;
// }

// // Function to check if a number is odd
// function isOdd(num) {
//   return num % 2 !== 0;
// }

// // Read five numbers from the user
// for (let i = 1; i <= 5; i++) {
//   let num = parseFloat(prompt(`Enter number ${i}:`));

//   if (isNaN(num)) {
//     alert('Invalid input. Please enter a valid number.');
//     i--; // Decrement i to re-enter the invalid number
//   } else {
//     if (num > 0) {
//       positiveNumbers.push(num);
//     } else if (num < 0) {
//       negativeNumbers.push(num);
//     }

//     if (isEven(num)) {
//       evenNumbers.push(num);
//     } else if (isOdd(num)) {
//       oddNumbers.push(num);
//     }
//   }
// }

// // Display the results
// console.log(`Positive numbers: ${positiveNumbers.length}`);
// console.log(`Negative numbers: ${negativeNumbers.length}`);
// console.log(`Even numbers: ${evenNumbers.length}`);
// console.log(`Odd numbers: ${oddNumbers.length}`);
// 4------ Reverse array without using prototypes [4,8,9,2] 
// to [2,9,8,4]

const arrRev=[4,8,9,2];
const emptyArr=[];
for(let i=arrRev.length-1;i>=0;i--){
    emptyArr.push(arrRev[i])
    // console.log("reverse" , arrRev)
}
console.log("Original array" , arrRev)

console.log("Reverse array" , emptyArr )

// Original array
// const originalArray = [4, 8, 9, 2];

// Function to reverse an array without using prototypes
// function reverseArray(array) {
//     const reversedArray = [];

//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }

//     return reversedArray;
// }

// // Call the function to reverse the original array
// const reversedArray = reverseArray(originalArray);

// // Display the reversed array
// console.log("Original Array:", originalArray);
// console.log("Reversed Array:", reversedArray);
