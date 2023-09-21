let number=1;
for(number; number<=10; number++){
    console.log("number",number);
}
for(number =10; number>=1; number--){
    console.log("number" , number);
}
let number0=1;
for(number0;number0<10;number0++){
    for(number1=20;number1>number0;number1--)
    {
        console.log("number",number0,number1)
    }
}
let sum=0;
let n=prompt("enter the any number");
n=Number.parseInt(n);
for(let i=0; i<n;i++){
    sum+=(i+2);
    console.log("sum" ,i);
}
console.log("natural number" ,n,"and ",sum);

let multiply=0;
let numb=prompt("enter the number");
for(let num=10; num>=numb;num--){
    multiply-=(num-2);
    console.log("multiply",multiply-num, numb, num)
}
console.log("mult",multiply,numb)