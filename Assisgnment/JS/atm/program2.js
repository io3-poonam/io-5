/**
Ramesh's basic salary is input through the keyboard. 
His dearness allowance is 40% of basic salary, 
and house rent allowance is 20% of basic salary.
 Write a program to calculate his gross salary

//  => Formula for Gross salary : Salary +  DA + RA
*/
function salary(){
    let BS=Number(prompt('Enter the salary amount'));
    let DA=BS*40/100;
    let RA=BS*20/100;
let GS=BS+DA+RA;
console.log(`Gross Salary ${BS}+${DA}+${RA} = ${GS}`);

}
// salary();
// -2- /-----------------------------------------------------
/**
The distance between two cities (in km) entered through key board.
write a program to calculate distance in meters, feet and centimeter
*/

// Formula to calculate feet from km === km * 3280.84
// formula to calculate inch from km == 1ft * 12inch * km
// formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)
 function distance(){
let km=Number(prompt("Enter the Distance between two cities "))
let ft=3280.84;
let kmToFeet=km*ft;
let m=1000;
let kmToM=km*m;
let cm=100;
let kmToCm=km*m*cm;
console.log(`kilometer ${km} in meter ${m}= ${kmToM} m `)
console.log(`kilometer  ${km}  in feet ${ft} = ${kmToFeet} ft `)
console.log(`kilometer  ${km}  in cm ${cm} = ${kmToCm} cm `);

 }
//  distance();
// -3- /-----------------------------------------------------
/*
Enter the marks of 5 subject of student and find the aggregate(average) and percentage of all.
 Mark should not be greater than 100. 
*/
// Formula aggregate = totalMarks / number of subjects
// Formula Percentage = (obtained marks / Total marks) * 100

let eng=78;
let pun=88;
let math=50;
let sci=75;
let phy=90;
let obtainMarks=Number(eng)+Number(pun)+Number(math)+Number(sci)+Number(phy);
let totalMarks=500;
// let noOfSub=5;
let aggregate=totalMarks/5
let percentage=(obtainMarks/totalMarks)*100
console.log(" aggregate", aggregate,"obtainMarks", obtainMarks, "precentage", percentage);
// -4- /-----------------------------------------------------
/*
temperature of a city in fahrenheit degrees is input through the keyboard.
 write a program to convert the temperature into centigrade and centigrade to Fahrenheit
*/
// Celsius to Fahrenheit: (9/5 × °C) + 32
// Fahrenheit to Celsius: 5/9(°F - 32)
// Kelvin to Celsius: K - 273

function temperature(){
    let F=Number(prompt('Enter the Fahrenheit temperature in Degree'))
    let C=Number(prompt('Enter the Celsius temperature in Degree'))
    let K=Number(prompt('Enter the Kelvin temperature in Degree'))

    let CToF= (9/5 * C) + 32
    FToC= 5/9(F - 32)
    KtoC= K - 273
    
    console.log("Celsius to Fahrenheit", CToF, "Fahrenheit to Celsius ", FToC," Kelvin to Celsius", KtoC  )
    }
    temperature()
/*
// ---5..--------------------------------------------------

Enter length breadth of rectangle and find the area, perimeter.
// Formula of Rectangle Area == length * width
// Formula of perimeter of Rectangle == 2(length + width)*/
function Rectangle(){
let l=Number(prompt('Enter the length'))
let b=Number(prompt('Enter the breadth'))
let RectangleArea=l*b;
perimeterOfRectangle=2*(l+b);
console.log("Rectangle Area", RectangleArea, "perimeter of Rectangle ", perimeterOfRectangle )
}
Rectangle()
// ----6----
// Enter the radius of Circle and find the circumstance and area of circle
function Circle(){
    let radius=Number(prompt('Enter the radius'))
    let circleArea=Math.PI*(radius*radius);
    circlePerimeter=Math.PI*(2*radius);
    console.log("circle Area", circleArea, "circle of Perimeter ", circlePerimeter )
    }
    Circle()

// Formula of circle Area == pie * r * r
// Formula of circle perimeter == 2 * pie * radius