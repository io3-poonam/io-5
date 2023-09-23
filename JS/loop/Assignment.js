// 1. write a program to print table from 20 to 30 using nested for loop
for(let i=20; i<=30; i++){
    for(let j=1; j<=10;j++){
        console.log(`table  ${i} * ${j} = ${i*j}`)
    }
}

// 2. Write a program to find the average of three number , a=50,b=60,c=70
let a=50;
let b=60;
let c=70;
let d=a+b+c/3;
d=50+60+70/3;
console.log("average of three number",d )
// 3. Write a program to find even number and odd number between 1 to 50
// for(let i=0; i<=50;i++){
    // for(let j=2;j<=50; j++){
        // console.log(`even number ${i} + ${j} `)
    // }
// }

// 4. Write a program to find the largest number between two numbers number1 = 80, number2 = 90
let number1=80;
let number2=90;
if(number1<number2){
console.log("the largest number 90")
}
else{
    console.log("the smallest number 80")
}


// 5. Write a program to print that student is present in class or absent by using switch case statement
// ex -> Ramesh = Absent, Suresh = Present, Mahesh = Present
let a1="Absent";
let p1=" Present";
let p2="Present";
switch(a1,p1,p2){
    
    case"Present":
    console.log("Suresh",p1);
    case"Present":
    console.log("Mahesh",p2);
    break;
    case"Absent":
    console.log("Ramesh",a1);
    break;
};
// switch(Suresh,Mahesh){
//     case"Present":
//     console.log("present name")
// }

