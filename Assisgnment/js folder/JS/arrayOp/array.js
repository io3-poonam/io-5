
// Print all value using index values const array = [ [ "Sunday", "Monday", [ -4, -3, 2, 3, ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"], ], "Tuesday", "Wednesday", "Thursday", "Poonam", ], "duck", "ant", "Cat", [ ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]], 1, "Ritik", 5, ], ];

const array = [
    [
      "Sunday",
      "Monday",
      [
        -4,
        -3,
        2,
        3,
        ["this is string", "Sunny", false, null, 
        [1, 2, "Shekhar", 4], "vinay1"],
      ],
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Poonam",
    ],
    "duck",
    "ant",
    "Cat",
    [
      ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]],
      1,
      "Ritik",
      5,
    ],
  ];
  console.log("Sunday--->",array[0][0])
  console.log("Monday--->",array[0][1])
  console.log("array--->",array[0][2])

  console.log("-4--->",array[0][2][0])
  console.log("-3--->",array[0][2][1])
  console.log("2--->",array[0][2][2])
  console.log("3--->",array[0][2][3])
  console.log("array--->",array[0][2][4])

  console.log("this is string--->",array[0][2][4][0])
  console.log("Sunny--->",array[0][2][4][1])
  console.log("false--->",array[0][2][4][2])
  console.log("null--->",array[0][2][4][3])

  console.log("arrAY--->",array[0][2][4][4])
  
  console.log("1--->",array[0][2][4][4][0])
  console.log("2--->",array[0][2][4][4][1])
  console.log("Shekhar--->",array[0][2][4][4][2])
  console.log("4--->",array[0][2][4][4][3])
  console.log("Vinay1--->",array[0][2][4][5])
  
  console.log("Tuesday--->",array[0][3])
  console.log("Wednesday--->",array[0][4])
  console.log("Thursday--->",array[0][5])
  console.log("Poonam--->",array[0][6])

   console.log("duck--->",array[1])
   console.log("ant--->",array[2])
   console.log("Cat--->",array[3])
   console.log("array--->",array[4][0])

   console.log("abc--->",array[4][0][0])
   console.log("4--->",array[4][0][1])
   console.log("array--->",array[4][0][2])

   console.log("khushboo--->",array[4][0][2][0])
   console.log("78457--->",array[4][0][2][1])
   console.log("false--->",array[4][0][2][2])
   console.log("null--->",array[4][0][2][3])
   console.log("ARRAY--->",array[4][0][2][4])
   console.log("1--->",array[4][0][2][4][0])
   console.log("2--->",array[4][0][2][4][1])
   console.log("ravana--->",array[4][0][2][4][2])
   console.log("4--->",array[4][0][2][4][3])

   console.log("sapna--->",array[4][0][2][5])


   console.log("1--->",array[4][1])
   console.log("Ritik--->",array[4][2])
   console.log("5--->",array[4][3])

  
  // console.log("array",array[4][0][2][4][2])
  // console.log("array",array[0][6])
  // console.log("array",array[4][2])
  // console.log("array",array[4][0][2][0])
  // console.log("array",array[0][6])
  // console.log("array",array[0][6])
