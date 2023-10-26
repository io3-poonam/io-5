// 1. What is the data-type of 
// 	'Italy', 
// 	501, 
// 	false, 
// 	[23, 546, 67,8,90], 
// 	undefined, 
// 	null, 
// 	{}, 
// 	Number(India),
// 	Date(),
// 	?
console.log(
    "falsy value empty string --",
    "",
    typeof "",
    Boolean(""),
    typeof Boolean("")
  );
  console.log(
    "falsy value null --",
    null,
    typeof null,
    Boolean(null),
    typeof Boolean(null)
  );
  console.log(
    "falsy value undefined --",
    undefined,
    typeof undefined,
    Boolean(undefined),
    typeof Boolean(undefined)
  );
let Italy="Italy";
console.log("typeof",Italy, typeof "Italy")//string
let number=501;
console.log("typeof",number, typeof 501)//number
let boolean=false;
console.log("typeof",boolean, typeof false);//boolean
let array=[23, 546, 67,8,90];
console.log("typeof",array, typeof [23, 546, 67,8,90]);//array
let Undefined=5;
console.log("typeof",Undefined, typeof 5);
let object={};
console.log("typeof",object, typeof {});//object

let date=Date();
console.log("date", typeof date );





// 2. Find output
	console.log("output-1", "500" + 100);//500100
	console.log("output-2", 56 + 100); //156
	console.log("output-3", 56 + "100"); //56100
	console.log("output-4", "500" / "100"); //5
	console.log("output-5", 56 + 100 + true); //157
	console.log("output-6", 56 + 100 + Number(true));//157 
	console.log("output-7", 56 + 100 + "true"); //156true
	console.log("output-8", 56 + 100 + Number("true"));//nan 
	console.log("output-9", 56 + 100 + Number("Vinay")); //nan
	console.log("output-9", 50 - "100" + "Vinay"); //50vinay