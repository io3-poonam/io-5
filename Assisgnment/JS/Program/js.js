// If lengths of three sides of a triangle are input through the keyboard, write a program to find the area of the triangle.
function triangle() {
  const a = prompt("Enter the first side");
  const b = prompt("Enter the second side");
  const c = prompt("Enter the third side");
  let s = (Number(a) + Number(b) + Number(c)) / 2;
  let areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(
    `triangle ${a}+${b}+${c}=${s} and area of Triangle ${areaOfTriangle.toFixed(
      2
    )}`
  );
}
// triangle();
// 2.If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)
function fiveDigitNumber() {
  const number = prompt("Enter five-digit number ");
  let a = Math.trunc(number / 10000) % 10;
  let b = Math.trunc(number / 1000) % 10;
  let c = Math.trunc(number / 100) % 10;
  let d = Math.trunc(number / 10) % 10;
  let e = Math.trunc(number) % 10;
  let sum = a + b + c + d + e;

  // sum=a+b+c+d+e;
  console.log(`five-digit number ${number} ${a}+${b}+${c}+${d}+${e} = ${sum} `);
}
// fiveDigitNumber();
// if a five-digit number is input through the keyboard, program to reverse the number. (Hint: Use the modulus operator ‘%’)
function reverseNumber() {
  const rev = prompt("Enter the five digit Number");
  let f = Math.trunc(rev / 10000) % 10;
  let g = Math.trunc(rev / 1000) % 10;
  let h = Math.trunc(rev / 100) % 10;
  let i = Math.trunc(rev / 10) % 10;
  let j = Math.trunc(rev) % 10;
  let revs = j * 10000 + i * 1000 + h * 100 + g * 10 + f * 1;
  console.log(`reverse Number ${rev}= ${revs}`);
}
// reverseNumber();
// If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number. (Hint: Use the modulus operator ‘%’)
function fourDigit() {
  const num = prompt("Enter the four Digit number ");
  let k = Math.trunc(num / 1000) % 10;
  let l = Math.trunc(num / 100) % 10;
  let m = Math.trunc(num / 10) % 10;
  let n = Math.trunc(num) % 10;
  let sumOfFirstLastDigit = Number(k) + Number(n);
  console.log(
    `four Digit Number ${num} = sum of the first and last digit ${sumOfFirstLastDigit}`
  );
}
// fourDigit();
// Any integer is input through the keyboard. Write a program to find out whether it is an odd number or even number.
function findOddEven() {
  const oddEven = prompt("Enter the any number");
  if (isNaN(oddEven)) {
    console.log(`Write the correct number ${oddEven} is not correct number`);
  } else if (oddEven % 2 == 0) {
    console.log(`${oddEven} is Even number`);
  } else {
    console.log(`${oddEven} is odd number`);
  }
}
// findOddEven();
// check if number if positive or negative
function PosNeg() {
  const PosNegNumber = prompt("Enter the number");
  if (isNaN(PosNegNumber)) {
    return console.log(`${PosNegNumber} is not positive and negative number`);
  }
  if (PosNegNumber >= 0) {
    console.log(`${PosNegNumber} is positive  number`);
  } else {
    console.log(`${PosNegNumber} is negative number`);
  }
}
// PosNeg();

// Any year is input through the keyboard. 'Write a program to determine whether the year is a leap year or not. (Hint: Use the % (modulus) operator)
function leapYear() {
  const year = prompt("enter the any year");
  if (isNaN(year)) {
    return console.log(`${year} is not correct year`);
  }
  if (year % 4 == 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
// leapYear();
//------> Given the length and breadth of a rectangle, write a program to find whether the area of the rectangle is greater than its perimeter. For example, the area of the rectangle with length = 5 and breadth = 4 is greater than its perimeter.
function rectangle() {
  const l = Number(prompt("enter the rectangle length"));
  const b = Number(prompt("enter the rectangle breadth"));
  let areaOfRectangle = l * b;
  let perimeterOfRectangle = 2 * (l + b);
  console.log(
    `area of rectangle ${areaOfRectangle} and perimeter of rectangle ${perimeterOfRectangle}`
  );

  if (areaOfRectangle >= perimeterOfRectangle) {
    console.log(
      ` area of rectangle  ${areaOfRectangle} is greater than and equal to ${perimeterOfRectangle} perimeter Of Rectangle`
    );
  } else {
    console.log(
      ` area of rectangle  ${areaOfRectangle} is less than ${perimeterOfRectangle} perimeter Of Rectangle`
    );
  }
}
//  rectangle()
//------> Write a program to check whether a triangle is valid or not, when the three angles of the triangle are entered through the keyboard. A triangle is valid if the sum of all the three angles is equal to 180 degrees.
function triangleCheck() {
  const firstSide = prompt("Enter the first side ");
  const SecondSide = prompt("Enter the Second side ");
  const ThirdSide = prompt("Enter the Third side ");
  let sumSide = Number(firstSide) + Number(SecondSide) + Number(ThirdSide);
  console.log(` three angle is ${sumSide}`);

  if (sumSide == 180) {
    console.log(
      ` ${sumSide} triangle is valid because three angles is equal to 180 degrees.`
    );
  } else {
    console.log(
      ` ${sumSide} triangle is not valid because three angles is not equal  to 180 degrees.`
    );
  }
}
// triangleCheck();
//
// ------> In a company an employee is paid as under: If his basic salary is less than Rs. 1500, then HRA = 10% of basic salary and DA = 90% of basic salary. If his salary is either equal to or above Rs. 1500, then HRA = Rs. 500 and DA = 98% of basic salary. If the employee's salary is input through the keyboard write a program to find his gross salary.
function Salary() {
  const BS = Number(prompt("Enter the  basic salary"));

  console.log("Basic salary", BS);
  if (BS < 1500) {
    let HRA = (BS * 10) / 100;
    let DA = (BS * 90) / 100;
    let grossSalary = HRA + DA + BS;

    console.log(
      ` gross salary ${grossSalary}  Basic salary less than  1500   `
    );
  }else if(BS>=1500) {
    let HRA = 500;
    let DA = (BS * 98) / 100;
    let grossSalary = HRA + DA + BS;

    console.log(`gross salary ${grossSalary} Basic Salary more than and equal  1500  `);
  }
  else{
    console.log(`something went wrong`)
  }
}
// Salary();

// ----------> If the ages of Ram, Shyam and Ajay are input through the keyboard, write a program to determine the youngest of the three.
function age() {
  const R = Number(prompt("Enter the Ram age"));
  const S = Number(prompt("Enter the Shyam age"));
  const A = Number(prompt("Enter the Ajay age"));
  // error 10,9,8 value enter time
  if (R < A && R < S) {
    return console.log(`Ram is youngest  Ram: ${R} ,Shyam: ${S}, Ajay: ${A}`);
  } else if (S < A && S < R) {
    return console.log(`Shyam is youngest  Ram: ${R} ,Shyam: ${S}, Ajay: ${A}`);
  } else if (A < R && A < S) {
    console.log(`Ajay is youngest  Ram: ${R} ,Shyam: ${S}, Ajay: ${A}`);
  } else {
    console.log("something wrong");
  }
}
// age();

// The marks obtained by a student in 5 different subjects are input through the keyboard. The student gets a division as per the following rules:

// Percentage above or equal to 60 - First division
// Percentage between 50 and 59 - Second division
// Percentage between 40 and 49 - Third division
// // Percentage less than 40 - Fail

function subject() {
  const Eng = prompt("enter the english marks");
  const Phy = prompt("enter the Physic marks");
  const Chem = prompt("enter the Chemistry marks");
  const Math = prompt("enter the Math marks");
  const Comp = prompt("enter the Computer marks");
  let totalNumber =
    Number(Eng) + Number(Phy) + Number(Chem) + Number(Math) + Number(Comp);
  console.log(
    `Subject , English ${Eng} Physic ${Phy} Chemistry ${Chem} Math ${Math} Computer ${Comp} = sum ${totalNumber}`
  );
  console.log(`Subject Total Marks ${totalNumber.toFixed(2)}`);
  let TotalMarks = 500;
  let percentage = (totalNumber / TotalMarks) * 100;
  console.log(`All over percentage ${percentage}`);
  if (percentage >= 60 && percentage <= 100) {
    console.log(
      ` ${percentage} Percentage above or equal to 60 - First division `
    );
  } else if (percentage >= 50 && percentage <= 59) {
    console.log(
      ` ${percentage} Percentage between 50 and 59 - Second division `
    );
  } else if (percentage >= 40 && percentage <= 49) {
    console.log(` ${percentage} Percentage between 40 and 49 - Third division
 `);
  } else {
    console.log(` ${percentage} 
  Percentage less than 40 - Fail `);
  }
}
// subject();

//    | Gender   | Years of Service   | Qualifications   | Salary   |
//    | -------- | ------------------ | ---------------- | -------- |
//    | Male     | >=10               | Post-Graduate    | 15000    |
//    |          | >=10               | Graduate         | 10000    |
//    |          | <10                | Post-Graduate    | 10000    |
//    |          | <10                | Graduate         | 7000     |
//    | -------- | ------------------ | ---------------- | -------- |
//    | female   | >=10               | Post-Graduate    | 12000    |
//    |          | >=10               | Graduate         | 9000     |
//    |          | <10                | Post-Graduate    | 10000    |
//    |          | <10                | Graduate         | 6000     |
function checkCandidateDetails() {
  let gen = prompt("enter the gender (M/F)");
  let exp = Number(prompt("enter the experience in number"));
  let Quali = prompt("enter the Qualification  (Pg/G)");
  if (gen == "M" && exp >= 10 && Quali == "Pg") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 15000 because ${exp} experience more than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "M" && exp >= 10 && Quali == "G") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 10000 because ${exp} experience more than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "M" && exp < 10 && Quali == "Pg") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 10000 because ${exp} experience less than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "M" && exp < 10 && Quali == "G") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 7000 because ${exp} experience less than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "F" && exp >= 10 && Quali == "Pg") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 12000 because ${exp} experience less than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "F" && exp >= 10 && Quali == "G") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 9000 because ${exp} experience more than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "F" && exp < 10 && Quali == "Pg") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 10000 because ${exp} experience less than 10 year  and qualification is ${Quali} `
    );
  } else if (gen == "F" && exp < 10 && Quali == "G") {
    console.log(
      `congrats ! ${gen} your are hire and Salary is 6000 because ${exp} experience less than 10 year  and qualification is ${Quali} `
    );
  } else {
    console.log(`something is wrong`);
  }
}
// checkCandidateDetails();
//------>Write a program to find the absolute value of a number entered through the keyboard. (non-negative number)
function absoluteValue() {
  let absoluteNumber = prompt("enter the any number");
  if (isNaN(absoluteNumber)) {
    console.log(`${absoluteNumber} Enter the correct number`);
  }
  if (absoluteNumber >= 0) {
    console.log(`${absoluteNumber} this is absolute value`);
  } else {
    console.log(`${absoluteNumber} this is not  absolute value`);
  }
}
// absoluteValue();
//--------> Consider a currency system in which there are notes of seven denominations, namely, Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100. Is a sum of Rs. N is entered through the keyboard, write a program to compute the smallest number of notes that will combine to give Rs. N.
function Amount() {
  let note = prompt("Enter the any 5 digit Amount ");
  // let noteOne=Math.trunc(note/10000)%10;
  // let noteTwo=Math.trunc(note/1000)%10;
  // let noteFive=Math.trunc(note/100)%10;
  // let noteTen=Math.trunc(note/10)%10;
  // let note=Math.trunc(note/10000)%10;
}
// Amount();
//--------> If cost price and selling price of an item are input through the keyboard, write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred.
function ProfitAndLoss() {
  let Sp = prompt("enter the selling price");
  let Cp = prompt("enter the Cost price");
  let profit = Sp - Cp;
  let loss = Cp - Sp;
  if (Sp > Cp) {
    console.log(`${profit} profit incurred`);
  } else {
    console.log(`${loss} loss incurred`);
  }
}
// ProfitAndLoss();

//----- A five-digit number is entered through the keyboard. Write a program to obtain the reversed number and to determine whether the original and reversed numbers are equal or not. (Hint: Use the modulus operator ‘%’)
function EqualValue() {
  const eValue = prompt("Enter the any number");
  let ab = Math.trunc(eValue / 10000) % 10;
  let bc = Math.trunc(eValue / 1000) % 10;
  let cd = Math.trunc(eValue / 100) % 10;
  let de = Math.trunc(eValue / 10) % 10;
  let ef = Math.trunc(eValue / 1) % 10;
  let reverse = ab * 1 + bc * 10 + cd * 100 + de * 1000 + ef * 10000;
  console.log(` original value ${eValue}, reversed value${reverse}`);
  if (eValue == reverse) {
    return console.log(
      ` the original ${eValue} and ${reverse} reversed numbers are equal `
    );
  } else {
    console.log(
      ` the original  ${eValue} and ${reverse} reversed numbers are not equal `
    );
  }
}
// EqualValue();
// ---------> A company insures its drivers in the following cases: - If the driver is married. If the driver is unmarried , male & above 30 years of age. If the driver is unmarried, female & above 25 years of age. In all other cases, the driver is not insured. If the marital status, sex and age of the driver are the inputs, write a program to determine whether the driver should be insured or not.

function Driver() {
  let gender = prompt("Enter the Gender Male/Female");
  let age = Number(prompt("Enter the age Male and Female"));
  let maritalStatus = prompt("Enter the marital Status Married/Unmarried");
  if (gender == "Male" && age >= 30 && maritalStatus == "Married") {
    console.log(
      `The driver should be insured because all condition are filed Gender is ${gender}, ${age}age greater than 30 year and ${maritalStatus} driver `
    );
  } else if (gender == "Male" && age >= 30 && maritalStatus == "Unmarried") {
    console.log(
      `The driver should be insured because all condition are filed Gender is ${gender}, ${age}age greater than 30 year and ${maritalStatus} driver `
    );
  } else if (gender == "Female" && age >= 25 && maritalStatus == "Unmarried") {
    console.log(
      `The driver should be insured because all condition are filed Gender is ${gender}, ${age} age greater than 25 year and ${maritalStatus} driver `
    );
  } else {
    console.log(`The driver should not be insured`);
  }
}
Driver();
