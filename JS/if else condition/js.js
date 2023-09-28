function yearLeap(){
    const year=prompt("enter any year in number");
    if(isNaN(year)){
        return console.log(`enter the correct year ${year} is not valid year`)
    }
    if(year%4 ==0){
    console.log(`this is ${year} leap year`)
}
else {
    console.log(`this is ${year} not leap year`)
}
}
yearLeap();

// 1. Write a function to print your name, hobbies
function print(name, hobbies){
    console.log(`name is ${name} and hobbies is ${hobbies}`)
}
print('poonam', "travelling");

// 2. Write a function to enter your you favorite avengers and concat with string 
// Input: entered {avenger-name} from keyboard
// Output: My favorite avenger is {avenger-name}. I am dying heart fan of {avenger-name}
function avenger(){
    const avenName=prompt("entered {avenger-name}")
    console.log(`My favorite avenger is ${avenName}. I am dying heart fan of ${avenName}`)
}
avenger();
// 3. Write a program to calculate sum of 5 subject entered using keyboard<br>
const eng=prompt("enter the Eng Subject marks")
const phy=prompt("enter the phy Subject marks")
const chem=prompt("enter the chem Subject marks")
const math=prompt("enter the math Subject marks")
const comp=prompt("enter the computer Subject marks")
sum=Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp);
MarksAvg=sum/5;
console.log("sum",sum, "avgSum",MarksAvg);

//4. Enter 10 numbers from keyboard and Write a program to calculate average of those 10 numbers
function average(){
let avg=prompt("enter the  one number");

const avg1=prompt("enter the  two number");
const avg2=prompt("enter the  three number");
const avg3=prompt("enter the  four number");
const avg4=prompt("enter the  five number");
const avg5=prompt("enter the  six number");
const avg6=prompt("enter the  seven number");
const avg7=prompt("enter the  eight number");
const avg8=prompt("enter the  nine number");
const avg9=prompt("enter the  ten number");
let averageSum=Number(avg)+Number(avg1)+Number(avg2)+Number(avg3)+Number(avg4)+Number(avg5)+Number(avg6)+Number(avg7)+Number(avg8)+Number(avg9);

avgTotal=averageSum/10;
// console.log(sum)
console.log(`total sum is ${averageSum} total average is ${avgTotal} `)
}
average();

//5. Write a function to find a number(Entered through keyboard) is EVEN || ODD 
function findEvenOdd(){
const EVENODD=prompt("enter the any number");
if(isNaN(EVENODD)){
return console.log("Enter correct  number",` ${EVENODD } is not a number`);

}

if(EVENODD%2==0){
console.log("Even number",` ${EVENODD } is even number`);
}
else{
console.log("odd number",` ${EVENODD } is odd number`);

}
}
findEvenOdd();
// 6. Write a function to calculate simple interest.
const principal=1000;
const ratePerCent=5 ;
const time=7;
function interest(p,r,t){
    simpleInterest=p*r*t;
    console.log("simple interest", simpleInterest);
}
interest(1000,5,7)