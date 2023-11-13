
// 16----  Write a JavaScript function to remove a specific element from an array. Test data : console.log(remove_array_element([2, 5, 9, 6], 5)); [2, 9, 6]
const remove_array_element=([2, 5, 9, 6], 5);
 
// 17----  Write a JavaScript function to find an array containing a specific element. Test data :  console.log(contains(arr, 5)); [True]
const arr = [2, 5, 9, 6];
let contains=arr.includes(5)
console.log("return true and false" ,contains)
// 21--- population of a town is 100000. The population of town is increasing by 10% every year. find the population of town after 15years
let population=100000;
let year=15;
for(let i=1;i<year;i++){
 let increasingPopulation=Math.trunc(population*10/100);
population=Number(population)+Number(increasingPopulation);
console.log(`year ${i} population ${population}`)
}