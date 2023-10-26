const weeks=[
    'Friday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Wednesday',
    'Wednesday',
    'Friday',
    'Friday',
  
  ]
    function removeDuplicates(weeks) { 
        return weeks.filter((item, 
    index) => weeks.indexOf(item) === index); }
    console.log(removeDuplicates(weeks));


  function removeDup(weeks){
    return[...new Set(weeks)]
  }
  console.log("remove items",removeDup(weeks) );

  const arr5 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7, 1, 2, 3];

  for(let i=1;i<=arr5.length;i++){
    console.log(`reverse method ${i}`)
  }