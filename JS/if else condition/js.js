function yearLeap(){
    const year=prompt("enter any year in number");
    if(isNaN(year)){
        return console.log(`enter the correct year ${year} is not valid year`)
    }
    if(year%4 ==0){
    console.log(`this is ${year} leap year`)
}
else {
    console.log(`this is ${year} not leap year`)
}
}
yearLeap();