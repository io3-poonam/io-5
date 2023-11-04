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
const p=[];
const n=[];
const e=[];
const o=[];
const numb=[];
function isEven(num){
    return num %2==0
}
function isOdd(num){
    return num %2!==0
}
for(let i=1;i<=5;i++){
    const num=prompt("enter the number");
    console.log("num",num)
    numb.push(num);
    if(isNaN(num)){
console.log("enter the correct number")
    }else{
        if(num>0){
            p.push(num)
            // console.log("positiveNumber",num)
        }else if(num<0){
            n.push(num)
            // console.log("negitive",num)
        }if(isEven(num)){
            e.push(num)
        }else if(isOdd(num)){
            o.push(num)
        }
    }
}
console.log("p",p.length)
console.log("num",numb)
console.log("n",n.length)
console.log("o",o.length)
console.log("e",e.length)



// 4------ Reverse array without using prototypes [4,8,9,2] 
// to [2,9,8,4]

const arrRev=[4,8,9,2];
const emptyArr=[];
// for(let i=arrRev.length-1;i>=0;i--){
//     emptyArr.push(arrRev[i])
//     // console.log("reverse" , arrRev)
// }
const splitArr=split.arrRev("")
const rev=reverse.splitArr()
console.log("Original array" ,rev, arrRev)

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
