for(let i=1; i<=10;i++){
    console.log(`10 x ${i} = ${10*i}`)
}
// write a program to calculate pay of 10 employees overtime is paid at the rate of rs 12.00/hour for every hour worked above 40 hours. Assume that employees do not work for fraction of hour
// function overTime(){
// let employees=Number(prompt("number of employee"));
// let overTimes=Number(prompt("worked in hours"));

// for(let employees=1; employees<overTimes; employees++){
//     let rate=40*12;
//     if(overTimes>=rate){
//         console.log(`paid amount in rate 12.00 ${rate}`)
//     }
//     else{
//         console.log(`paid amount in rate under 12.00 ${12 * overTimes}`)
 
//     }
//     console.log(``)
// }
// }
// overTime();

for(let i=0; i<=10; i++){
    // for(let j=0; j<=10; j++)
    if(i%2==0)
    console.log(`even ${i}`)
} 

for(let year=1000; year<=3000; year++)
if(year % 4==0){
    console.log( year , " is leap year")
}
// else{
//     console.log(year, "is not leap year")
// }
function arms(sum,i){
let a,b,c, sum;
for(let i=1;i<=1000;i++){
    let a=Math.trunc(i/1000)%10;
    let b=Math.trunc(i/100)%10;
    let c=Math.trunc(i/10)%10;
sum=sum+i;
    // let d=Math.trunc(i/100)%10;
}
console.log("a",a ," b",b , "c", c, sum);
}
arms(10, 3);