let population=100000;
let year=15;
for(let i=1;i<=year;i++){
    let value=population*10/100;
     population=Number(population)+Number(value)
    console.log("15 year population", population)
}
