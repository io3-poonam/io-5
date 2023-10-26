// An Insurance company follows following rules to calculate premium.
// (1) If a person’s health is excellent and the person is between 25 and 35 years of age and lives in a city and is a male then the premium is Rs. 4 per thousand and his policy amount cannot exceed Rs. 2 lakhs. (2) If a person satisfies all the above conditions except that the sex is female then the premium is Rs. 3 per thousand and her policy amount cannot exceed Rs. 1 lakh. (3) If a person’s health is poor and the person is between 25 and 35 years of age and lives in a village and is a male 90 Let Us C then the premium is Rs. 6 per thousand and his policy cannot exceed Rs. 10,000. (4) In all other cases the person is not insured.

//1------------ Write a program to output whether the person should be insured or not, his/her premium rate and maximum amount for which he/she can be insured.
function insured() {
  let Gen = prompt("Enter the gender he/she").toLowerCase();
  let area = prompt("Enter the area c/v").toLowerCase();
  let health = prompt("Enter the Health in e/p").toLowerCase();
  let Age = Number(prompt("Enter the Age "));
  let A = Number(prompt("Enter the amount"));
  let prH = 4 * 1000;
  // Age=Age(Age>=25 || Age<=35)
  // let premiumRate=
  // if(isNaN())
  if (
    Gen == "he" &&
    area == "c" &&
    health == "e" &&
    (Age >= 25 || Age <= 35) &&
    A <= 200000
  ) {
    console.log(
      `he can be insured premium rate 4 per  1000 policy ${A} insured`
    );
  } else if (
    Gen == "she" &&
    area == "c" &&
    health == "e" &&
    (Age >= 25 || Age <= 35) &&
    A <= 100000
  ) {
    console.log(
      `she can be insured premium rate 3 per  1000 policy ${A} insured`
    );
  } else if (
    Gen == "he" &&
    area == "v" &&
    health == "p" &&
    (Age >= 25 || Age <= 35) &&
    A <= 10000
  ) {
    console.log(
      `he can be insured premium rate 6 per  1000 policy ${A} insured`
    );
  } else {
    console.log("he/she can't insured");
  }
}
// insured();
//---2 (e) A certain grade of steel is graded according to the following conditions: (i) Hardness must be greater than 50 (ii) Carbon content must be less than 0.7 (iii) Tensile strength must be greater than 5600
// The grades are as follows: Grade is 10 if all three conditions are met Grade is 9 if conditions (i) and (ii) are met Grade is 8 if conditions (ii) and (iii) are met Grade is 7 if conditions (i) and (iii) are met Grade is 6 if only one condition is met Grade is 5 if none of the conditions are met
// Write a program, which will require the user to give values of hardness, carbon content and tensile strength of the steel under consideration and output the grade of the steel.
function steel() {
  let h = Number(prompt("Enter the Hardness Steel number upto 49"));
  let c = Number(prompt("Enter the Carbon  number less than 0.8"));
  let st = Number(
    prompt("Enter the Tensile Steel strength number must be 5600")
  );
  if (isNaN(h, c, st)) {
    return console.error("Enter the valid number");
  }
  if (h >= 50 && c <= 0.7 && st >= 5600) {
    return console.log(
      ` ${h} Hardness Steel, ${c} Carbon, ${st} Tensile Steel all three conditions are match given the Grade is 10`
    );
  } else if (h >= 50 && c <= 0.7) {
    return console.log(
      ` ${h} Hardness Steel, ${c} Carbon,  the Grade steel is 9  conditions (i) and (ii) are met `
    );
  } else if (c <= 0.7 && st >= 5600) {
    console.log(
      ` ${h} Hardness Steel, ${c} Carbon, ${st} Tensile Steel the Grade steel is 8  conditions (ii) and (iii) are met `
    );
  } else if (h >= 50 && st >= 5600) {
    return console.log(
      ` ${h} Hardness Steel, ${c} Carbon, ${st} Tensile Steel the Grade steel is 7  conditions (i) and (iii) are met `
    );
  } else if (h >= 50 || c <= 0.8 || st >= 5600) {
    return console.log(
      ` ${h} Hardness Steel, ${c} Carbon, ${st} Tensile Steel the Grade steel is  6 only one condition is met `
    );
  } else {
    console.log("the Grade steel is 5 none of the conditions are met");
  }
}
// steel();

// A library charges a fine for every book returned late. For first 5 days the fine is 50 paise, for 6-10 days fine is one rupee and above 10 days fine is 5 rupees. If you return the book after 30 days your membership will be cancelled. Write a program to accept the number of days the member is late to return the book and display the fine or the appropriate message.
function libraryFine() {
  let fineDays = Number(prompt("Enter the days in number"));
  if (isNaN(fineDays)) {
    return console.error("Enter the valid number");
  }
  if (fineDays <= 5) {
    console.log(
      ` the fine is 50 paise and Book Accept under day is ${fineDays}`
    );
  } else if (fineDays < 10) {
    console.log(`the fine is 1 rs and Book Accept under day is ${fineDays}`);
  } else if (fineDays <= 29) {
    console.log(`the fine is 5 rs and Book Accept under day is ${fineDays}`);
  } else if (fineDays >= 30) {
    console.log(
      `your membership will be cancelled and  the book return after 30 days `
    );
  } else {
    console.warn("Something went wrong");
  }
}
// libraryFine();
// If the three sides of a triangle are entered through the keyboard, write a program to check whether the triangle is valid or not. The triangle is valid if the sum of two sides is greater than the largest of the three sides.
function triangle() {
  let s1 = Number(prompt("Enter the first side"));
  let s2 = Number(prompt("Enter the second side"));
  let s3 = Number(prompt("Enter the third side"));
  let sum = s1 + s2 + s3;
  let sum1 = s1 + s2;
  let sum2 = s1 + s3;
  let sum3 = s2 + s3;

  console.log("Sum of triangle", sum);
  if (isNaN(t, st, st)) {
    return console.error("enter the correct number");
  }
  if (s3 > sum1 || s2 > sum2 || s1 > sum3) {
    return console.log(
      `two sides is greater than the largest of the three sides `
    );
  } else if (sum == 180) {
    console.log(`triangle is valid `);
  } else {
    console.log(`triangle is not valid `);
  }
}
// triangle();

// If the three sides of a triangle are entered through the keyboard, write a program to check whether the triangle is isosceles, equilateral, scalene or right angled triangle.

function triangleFind() {
  let t1 = Number(prompt("Enter the first side"));
  let t2 = Number(prompt("Enter the second side"));
  let t3 = Number(prompt("Enter the third side"));
  // let sumRightAngle=t1+t2;
  // let sumRightAngle2=t3+t1;
  // let sumRightAngle1=t2+t3;

  console.log("Sum of triangle", t1, t2, t3);
  if (isNaN(t1, t2, t3)) {
    return console.error("enter the correct number");
  }
  if ((t1 == t2) != t3 || (t3 == t1) != t2) {
    console.log(`two sides are equal so it is isosceles `);
  } else if (t1 != t2 && t2 != t3 && t1 != t3) {
    console.log(`all sides are different so it is scalene `);
  } else if (t1 == t2 && t2 == t3 && t1 == t3) {
    console.log(`three sides are equal so it is equilateral `);
  }
//    else if (t1 == 90 || t2 == 90 || t3 == 90) {
//     let oneSide = t1 + t2;
//     let oneSide1 = t1 + t3;
//     let oneSide3 = t3 + t2;

//     console.log(
//       ` one side 90 degree and two equal 90 so it is right angled triangle `
//     );
//   }
 else {
    console.log(`Something went wrong `);
  }
}
// triangleFind();

// In a company, worker efficiency is determined on the basis of the time required for a worker to complete a particular job. If the time taken by the worker is between 2 – 3 hours, then the worker is said to be highly efficient. If the time required by the worker is between 3 – 4 hours, then the worker is ordered to improve speed. If the time taken is between 4 – 5 hours, the worker is given training to improve his speed, and if the time taken by the worker is more than 5 hours, then the worker has to leave the company. If the time taken by the worker is input through the keyboard, find the efficiency of the worker.
function efficiency(){
    let hours=Number(prompt("Enter the Hours"));
    if(isNaN(hours)){
      return  console.warn("Enter correct number");
    }

if( hours==2 || hours==3){
    console.log(`worker is the highly efficient`);
}
else if(hours==3 || hours==4){
    console.log(`worker is the improve speed`);}

else if(hours==4 || hours==5){
    console.log(`the worker is given training to improve his speed`);}

else if(hours>5){
    console.log(`the worker has to leave the company`);}

else{
console.error("something went wrong")
}}
efficiency();