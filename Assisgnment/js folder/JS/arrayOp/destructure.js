// // array destructure
// // rest operator
// const [a, , , nums, , , ...abc] = [
//     "duck",
//     "ant",
//     "bison",
//     "camel",
//     "elephant",
//     "Cat",
//     [1, 2, 3, 4, 5],
//   ];
//   const [arr] = abc; // [[1, 2, 3, 4, 5]]
//   const [num1, num2, num3, num4, num5] = arr; //[1, 2, 3, 4, 5]
//   console.log("arr----", num4);

//   const array = [
//     [
//       "Sunday",
//       "Monday",
//       [
//         -4,
//         -3,
//         2,
//         3,
//         ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"],
//       ],
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Poonam",
//     ],
//     "duck",
//     "ant",
//     "Cat",
//     [
//       ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]],
//       1,
//       "Ritik",
//       5,
//     ],
//   ];

//   const [, , , , childArr] = array || [];
// //   const [, mon, vinArr] = monArr || [];
// //   const [, , , , vinaArr2] = vinArr || [];
// //   const [, , , , , vinay] = vinaArr2 || [];

//   const [childArr1] = childArr || [];
//   const [, , childArr2] = childArr1 || [];
//   const [kh, , , , , sapna = "hello"] = childArr2 || [];
//   console.log("childArr", kh, sapna);

// //   console.log("sapna-->", array[4][0][2][5] || "hello");
// //   console.log("sunny-->", array[0][2][4][1]);
// //   console.log("shekhar-->", array[0][2][4][4][2]);
// //   console.log("Ritik-->", array[4][2]);
// //   console.log("Poonam-->", array[0][6]);
// //   console.log("khushbu-->", array[4][0][2][4][2], vinay);
// Destructure following pokemons "Pikachu", "Bulbasour", "mew", "Charizard" "mewTwo" "Treecko", "Torchik", "sharpido", "Squirtel", "Ditto" "Mr.Mime" "Blaziken"

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
const[FirstArray,,,Treecko,,Torchik,Blaziken]=array2||[];
//Torchik1 print
const [Torchik1,MrMime]=Torchik||[]
const [,,Torchik2,sharpido]=Torchik1||[]
// const[]
const [,,sharpido1,,,Squirtel,Ditto]=sharpido||[]
const [Ditto1]=Ditto||[]
//Pikachu print

const [,,Pikachu,,mewTwo]=FirstArray||[];
//Bulbasour print
const [,,,Bulbasour]=FirstArray||[];
const [Bulbasour1,,,,,mew]=Bulbasour||[];
//mew print
// const[mew]=FirstArray||[];
// const[,,,,,mew1]=Bulbasour1||[];
const[,,mew2,,,Charizard]=mew||[];
const[,,,Charizard1]=Charizard||[]
// const[,,mew2]=mew||[];

console.log("Pikachu", Pikachu," mewTwo", mewTwo)
console.log("Bulbasour",Bulbasour1)
console.log("mew",mew2)
console.log("Charizard",Charizard1)
console.log("Treecko",Treecko)
console.log("Torchik",Torchik2)
console.log("sharpido1",sharpido1)
console.log("Squirtel",Squirtel)
console.log("Ditto",Ditto1)
console.log("Mr.Mime",MrMime)
console.log("Blaziken",Blaziken)

