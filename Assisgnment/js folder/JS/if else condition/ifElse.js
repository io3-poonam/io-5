// 1. check if number if positive or negative
function numberByCall(){
    const number=prompt("enter the number postive and negative :");
    if(number>0){
    console.log(`${number} is greater than 0 so ${number} is postive number`)
}
else if(number==0){
    console.log(`${number} is equal`);
}
else{
    console.log(`${number} is less than 0 so${number} is negative number`)
}
}
numberByCall();