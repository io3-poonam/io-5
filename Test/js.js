// 1. Write a reverse table like
//    2 x 10 = 20
//    2 x 9 = 18
//    2 x 8 = 16
 let number =2;
for(let i=11-1;i>=number;i--){
    console.log(`1-----reverse table ${number} * ${i} = ${number*i}  `)
}

// 2. Reverse alphabets
//    ZYXWVUTSRQPONMLKJIHGFEDCBA
//    **note: use ASCII (character code) to get character of alphabet from**
// let word=ZYXWVUTSRQPONMLKJIHGFEDCBA
// for(let i=0;i<=charAt())
// console.log(`Ascii code `,charAtFrom(91) )
let alphabet='ZYXWVUTSRQPONMLKJIHGFEDCBA';
let alphabets=alphabet.split("")
let reverseAl=alphabets.reverse()
let joinAlp=alphabets.join("")
console.log("2------alp",joinAlp)

// 3. Write a program to calculate sum of 5 subject entered using keyboard
function subject() {
  const English=Number(prompt("Enter the English Subject marks")) ;
  const Punjabi=Number(prompt("Enter the Punjabi Subject marks")) ; 
  const Hindi=Number(prompt("Enter the Hindi Subject marks")) ; 
  const Math=Number(prompt("Enter the Math Subject marks")) ; 
  const Sci=Number(prompt("Enter the Sci Subject marks")) ; 
  const sumTotalSubject=English+Punjabi+Hindi+Math+Sci
  if(isNaN(English,Punjabi,Hindi,Math,Sci)){
   return console.log("Enter the correct number")
  }
  console.log("3----------sumTotalSubject",sumTotalSubject)
}
// subject();

// 4. If lengths of three sides of a triangle are input through the
//    keyboard, write a program to find the area of the triangle.
function triangle(){
let firstSide=Number(prompt("enter the first side of Triangle"))
let SecondSide=Number(prompt("enter the Second side of Triangle"))
let ThirdSide=Number(prompt("enter the Third side of Triangle"))
let areaOfTheTriangle=Math.sqrt(firstSide+SecondSide+ThirdSide)
console.log("-------4",areaOfTheTriangle.toFixed(0))
}
// triangle();

// 5. if a five-digit number is input through the keyboard,
//    program to reverse the number.
//    **(Hint: Use the modulus operator '%')**
function reverseMethod(){
const number=Number(prompt("enter the Five digit number"))
let a=Math.trunc(number/10000)%10;
let b=Math.trunc(number/1000)%10;
let c=Math.trunc(number/100)%10;
let d=Math.trunc(number/10)%10;
let e=Math.trunc(number/1)%10;
let reverse=a*1+b*10+c*100+d*1000+e*10000;
if(isNaN(number)){
   return console.log("enter correct number")
}
// if(number.length ===5){
//     console.log("enter number equal to 5")
// }
console.log("original number",number)

console.log("----5 reverse number",reverse)
}
reverseMethod()
// 6. Consider a currency system in which there are notes of seven denominations, namely,
//    Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100. Is a sum of Rs. N is entered through the
//    keyboard, write a program to compute the smallest number of notes that will combine to
//    give Rs. N.
    // program 6 solved
function denominations(){
let notes=Number(prompt("Enter the any notes"))
let oneRs=Math.trunc(notes/1)%10;
let TwoRs=Math.trunc(notes/2)%10;
let fiveRs=Math.trunc(notes/5)%10;
let tenRs=Math.trunc(notes/10)%10;
let fiftyRs=Math.trunc(notes/50)%10;
let hundredRs=Math.trunc(notes/100)%10;

console.log(`notes----6 ${notes},oneRs ${oneRs},TwoRs ${TwoRs},fiveRs ${fiveRs},tenRs ${tenRs},fiftyRs ${fiftyRs},hundredRs ${hundredRs}`)

}
denominations()



// 7. Complete the solution so that it reverses the string passed into it.
//  'world' => 'dlrow'
    // program 7 solved
const world="world";
const splitStr=world.split("")
const revStr=splitStr.reverse()
const join=revStr.join("")
console.log("world----7.1>", join);

//  "Honey bees make honey" ==> "'yenoh ekam seeb yenoH'"
const Str2= "Honey bees make honey";
const splitStr2=Str2.split("")
const revStr2=splitStr2.reverse()
const join2=revStr2.join("")
console.log("Honey bees make honey7.2--------->", join2);

//  "The greatest victory is that which requires no battle" ==> "battle no requires which that is victory greatest The"
const str3="The greatest victory is that which requires no battle";
const splitStr3=str3.split(" ");
const revStr3=splitStr3.reverse()
const join3=revStr3.join(" ")
console.log("The greatest victory is that which requires no battle-7.3---------->", join3);

// 8. A certain grade of steel is graded according to the following
//     conditions:
//     (i) Hardness must be greater than 50
//     (ii) Carbon content must be less than 0.7
//     (iii) Tensile strength must be greater than 5600

// The grades are as follows:

// Grade is 10 if all three conditions are met
// Grade is 9 if conditions (i) and (ii) are met
// Grade is 8 if conditions (ii) and (iii) are met
// Grade is 7 if conditions (i) and (iii) are met
// Grade is 6 if only one condition is met
// Grade is 5 if none of the conditions are met

// // Write a program, which will require the user to give values of
// // hardness, carbon content and tensile strength of the steel
// // under consideration and output the grade of the steel.
    // program 8 solved
function SteelGrade(){
let steelHardness=Number(prompt("Enter the steel Hardness"));
let Carbon=Number(prompt("Enter the Carbon"));
let steelTensile=Number(prompt("Enter the steel Tensile"));
if(isNaN(steelHardness,Carbon,steelTensile)){
  return  console.log(" Enter the correct ")
}
if(steelHardness>=50 && Carbon<=0.7 && steelTensile >=5600 ){
    console.log(" Grade is 10 if all three conditions are met")
}
else if(steelHardness>=50 && Carbon<=0.7 ){
    console.log("Grade is 9 if conditions (i) and (ii) are met")
}
else if( Carbon<=0.7 && steelTensile >=5600 ){
    console.log(" Grade is 8 if conditions (ii) and (iii) are met")
}
else if( steelHardness>=50 && steelTensile >=5600 ){
    console.log(" Grade is 7 if conditions (i) and (iii) are met")
}
else if(steelHardness>=50 || Carbon<=0.7 ||steelTensile >=5600 ){
    console.log(" Grade is 6 if only one condition is met")
}
else{
    console.log(" Grade is 5 if none of the conditions are met")
}
}
SteelGrade();
    
// 9. Destructure following pokemons
//     "Pikachu",
//     "Bulbasour",
//     "mew",
//     "Charizard"
//     "mewTwo"
//     "Treecko",
//     "Torchik",
//     "sharpido",
//     "Squirtel",
//     "Ditto"
//     "Mr.Mime"
//     "Blaziken"

const array2 = [
  [
    "Sunday",
    "Monday",
    "Pikachu",
    [
      "Bulbasour",
      -4,
      -3,
      2,
      3,
      [
        "this is string",
        "Sunny",
        "mew",
        false,
        null,
        [1, 2, "Shekhar", "Charizard", 4],
        "vinay1",
      ],
    ],
    "mewTwo",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Poonam",
  ],
  "duck",
  "ant",
  "Treecko",
  "Cat",
  [
    [
      "abc",
      4,
      "Torchik",
      [
        "Khushbu",
        78457,
        "sharpido",
        false,
        null,
        "Squirtel",
        ["Ditto", 1, 2, "Ravana", 4],
        "Sapna",
      ],
    ],
    "Mr.Mime",
    1,
    "Ritik",
    5,
  ],
  "Blaziken",
];
    // program 9 solved
const [Pikachu,,,Treecko,,Torchik,Blaziken]=array2||[];
const[,,Pikachu1,Bulbasour]=Pikachu||[]
const[Bulbasour1,,,,,mew]=Bulbasour ||[]
const[,,mew1,,,Charizard]=mew ||[]
const[,,,Charizard1]=Charizard||[]
const [,,,,mewTwo]=Pikachu||[]
const [Torchik1,MrMime]=Torchik||[]
const[,,Torchik2,sharpido]=Torchik1||[]
const [,,sharpido1,,,Squirtel,Ditto]=sharpido||[]
const [Ditto1]=Ditto||[]
console.log("---9.",Pikachu1,Bulbasour1,mew1,Charizard1,mewTwo,Treecko,Torchik2,sharpido1,Squirtel,Ditto1,MrMime,Blaziken);
// 10. Destructure email, lat, firstname, website, jack, catchPhrase
    const data = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
    lat: "-43.9509",
    lng: "-34.4618",
    },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
    userName: {
    firstName: "Decko",
    lastName: "Crist",
    },
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
    },
    children: ["Ayehsa", "Jack", "May"],
    };
    // program 10 solved
const email=data.email || {};
console.log("email",email);
const lat=data.address.geo.lat || {};
console.log("lat",lat)

const firstName=data.company.userName.firstName || {};
console.log("firstname",firstName)
const website=data.website || {};
console.log("website",website );
const Jack=data.children[1] || [];
console.log("Jack",Jack);
const catchPhrase=data.company.catchPhrase || {};
console.log("catchPhrase",catchPhrase);
