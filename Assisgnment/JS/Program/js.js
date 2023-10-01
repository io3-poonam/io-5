// If lengths of three sides of a triangle are input through the keyboard, write a program to find the area of the triangle.
function triangle(){
  const a=prompt("Enter the first side");
  const b=prompt("Enter the second side");
  const c=prompt("Enter the third side");
  let s=(Number(a)+Number(b)+Number(c))/2;
let areaOfTriangle=Math.sqrt(s*(s-a)*(s-b)*(s-c));
  console.log(`triangle ${a}+${b}+${c}=${s} and area of Triangle ${areaOfTriangle.toFixed(2)}`);

}
// triangle();
// 2.If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)
function fiveDigitNumber(){
  const number=prompt("Enter five-digit number ");
  let a=Math.trunc(number/10000)%10;
  let b=Math.trunc(number/1000)%10;
  let c=Math.trunc(number/100)%10;
  let d=Math.trunc(number/10)%10;
  let e=Math.trunc(number)%10;
let sum=a+b+c+d+e;

  // sum=a+b+c+d+e;
  console.log(`five-digit number ${number} ${a}+${b}+${c}+${d}+${e} = ${sum} `)
}
// fiveDigitNumber();
// if a five-digit number is input through the keyboard, program to reverse the number. (Hint: Use the modulus operator ‘%’)
function reverseNumber(){
const rev=prompt("Enter the five digit Number");
let f=Math.trunc(rev/10000)%10;
let g=Math.trunc(rev/1000)%10;
let h=Math.trunc(rev/100)%10;
let i=Math.trunc(rev/10)%10;
let j=Math.trunc(rev)%10;

console.log(`reverse Number ${rev}= ${j}${i}${h}${g}${f}`)
}
// reverseNumber();
// If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number. (Hint: Use the modulus operator ‘%’)
function fourDigit(){
  const num=prompt("Enter the four Digit number ");
  let k=Math.trunc(num/1000)%10;
  let l=Math.trunc(num/100)%10;
  let m=Math.trunc(num/10)%10;
  let n=Math.trunc(num)%10;
let sumOfFirstLastDigit=Number(k)+Number(n);
  console.log(`four Digit Number ${num} = sum of the first and last digit ${sumOfFirstLastDigit}`)
}
// fourDigit();
// Any integer is input through the keyboard. Write a program to find out whether it is an odd number or even number.
function findOddEven(){
const oddEven=prompt("Enter the any number");
if(isNaN(oddEven)){
  console.log(`Write the correct number ${oddEven} is not correct number`)
}
 else if(oddEven%2==0){
  console.log(`${oddEven} is Even number`);
}
else{
  console.log(`${oddEven} is odd number`);
}
}
// findOddEven();
// check if number if positive or negative
function PosNeg(){
  const PosNegNumber=prompt("Enter the number");
  if(isNaN(PosNegNumber)){
    return console.log(`${PosNegNumber} is not positive and negative number`);
  }
  if(PosNegNumber>=0){
    console.log(`${PosNegNumber} is positive  number`);
  }
  else{
    console.log(`${PosNegNumber} is negative number`);
  }
  }
  // PosNeg();
          
  // Any year is input through the keyboard. 'Write a program to determine whether the year is a leap year or not. (Hint: Use the % (modulus) operator)
  function leapYear(){
const year=prompt("enter the any year")
if(isNaN(year)){
  return console.log(`${year} is not correct year`)
}
if(year%4==0){
  console.log(`${year} is leap year`)
}
else{
  console.log(`${year} is not leap year`)
}
  }
  leapYear();
