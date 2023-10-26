// 1----Five numbers are entered from the keyboard into an array. The number to be searched is entered through the keyboard by the user. Write a program to find if the number to be searched is present in the array and if it is present, display the number of times it appears in the array. // for loop till 5 // inside loop, prompt to enter number // push the number to array // if arr.lenght ===5 // enter number to find inside the array // for loop // arr[i] == enteredNum
// const arrayPush=[];
// for(let i=1;i<=5;i++){
//   let enteredNum=parseFloat(prompt("Enter the number",i))
//   console.log("number",enteredNum)
//   arrayPush.push(enteredNum)
//   if(arrayPush.length===5)
//   for(let i=1;i<=5;i++){
// arrayPush[i]==enteredNum
// enteredNum++
//   } 
  
//   if(enteredNum){
//     console.log("enter number is present")
//   } else{
//     console.log("enter number is not present")
//   }
//   }
// if(numberCheck.length===5){
  
// }

// console.log(arrayPush,"h")

// 3------ Write a program to copy the contents of one array into another in the reverse order. (with prototype) arr1 = [1,2,3,4] newArr = [4,3,2,1]

const arr1 = [1, 2, 3, 4];
const rev = arr1.reverse();
console.log("reverse", rev);
// 4------ Reverse array without using prototypes [4,8,9,2]
// to [2,9,8,4]

const arrRev = [4, 8, 9, 2];
const emptyArr = [];
for (let i = arrRev.length - 1; i >= 0; i--) {
  emptyArr.push(arrRev[i]);
  // console.log("reverse" , arrRev)
}
console.log("4---Original array", arrRev);

console.log("4---Reverse array", emptyArr);

// 5------  Write a simple JavaScript program to join all elements of the following array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"]; Expected Output : "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black"
myColor = ["Red", "Green", "White", "Black"];
// const splitString=myColor.split(" ")
const joinWithoutComa = myColor.join(",");
const joinWithComa = myColor.join("");
const joinWithPlus = myColor.join("+");

console.log(`join all the color  
1.join Without Coma---> ${joinWithoutComa} 
2.join With Coma ---> ${joinWithComa}
3.join With Plus ---> ${joinWithPlus}`);
// 6----  Write a JavaScript program to sort the items of an array. Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]; Sample Output : -4,-3,1,2,3,5,6,7,8 let maxVal = 0; arr1[i] > maxVal maxVal = arr[i]
function checkFunction() {
  let maxValue = 0;

  var sortArr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
  const sortMethod = sortArr.sort();
  //  console.log("sort Method", sortMethod); // only check
  for (let i = 0; i < sortArr.length; i++) {
    //  console.log(` ${i} sort Array ${sortArr[i]}`);// only check
    if (sortArr[i] > maxValue) {
      maxValue = sortArr[i];
      // console.log(`maximum value is ${maxValue}`)// only check
    }
  }
  console.log("sort Method", sortArr);
  console.log(`maximum value is ${maxValue}`);
}
checkFunction();
// 7---  Write a JavaScript program to find the most frequent item in an array. Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5 times )

var checkValueA = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const filterMethod = checkValueA.filter((ele, ind) => ele == "a");
console.log(` a ${filterMethod.length} times and ${filterMethod}`);

// 8---- Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input the output should be 'tHE qUICK bROWN fOX'.

function swapCase(inputString) {
  let swappedString = "";
  for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString[i];
    if (currentChar >= "A" && currentChar <= "Z") {
      // Convert uppercase to lowercase
      swappedString += currentChar.toLowerCase();
    } else if (currentChar >= "a" && currentChar <= "z") {
      // Convert lowercase to uppercase
      swappedString += currentChar.toUpperCase();
    } else {
      // If the character is not a letter, add it as is
      swappedString += currentChar;
    }
  }
  return swappedString;
}
var inputString = "The Quick Brown Fox";
let inputSplit=inputString.split(" ")
let reverseInput=inputSplit.reverse()
let joinInput=reverseInput.join(" ")

swappedString = swapCase(joinInput);
console.log("Original String: " + inputString);
console.log("Swapped Case: " + swappedString);


// 2-----Five numbers are entered from the keyboard into an array. Write a program to find out how many of them are positive, how many are negative, how many are even and how many odd.

// positive,
// negative,
// even,
// odd
let number=[];
let evenNumber=[];
let oddNumber=[];
let positiveNumber=[];
let negativeNumber=[];
function isEven(num){
    return num%2==0;
}
function isOdd(num){
    return num%2!==0;
}
for(let i=1;i<=5;i++){
    const num=Number(prompt(`Enter the number ${i}`));
    console.log(`number ${i} and enter value is ${num}`);
    number.push(num);
    // if(isNaN(num)){
    //     alert ("enter correct number")
    //     i--;
    if(isNaN(num)){
        console.log("enter correct number")
        
    }else{
    if(num>0){
positiveNumber.push(num)
    }else if(num<0){
        negativeNumber.push(num)
    }
     if(isEven(num)){
evenNumber.push(num)
    }
    else if(isOdd(num)){
oddNumber.push(num)
console.log("odd",oddNumber)
    }
}
    // if(isNaN(num)){
    //     console.log(`Please enter valid number`)
    //     // i--;
    // }
    // else{
    //     console.log(`something went wrong`)
    // }
}
console.log("number", number)
console.log("positive Number", positiveNumber ,positiveNumber.length)
console.log("negative Number", negativeNumber ,negativeNumber.length)
console.log("even number", evenNumber ,evenNumber.length)
console.log("odd number", oddNumber ,oddNumber.length)

