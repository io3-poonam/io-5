let hours = 0;
let minits = 0;
let second = 0;
const sec = document.getElementById("second");
const mini = document.getElementById("minits");
const hour = document.getElementById("hours");
let start;
// const GetStart=setInterval(()=>{

// })
const getStart = () => {
   start = setInterval(() => {
    // if(second<59)
    second = second + 1;
    sec.innerText = second;
    if (second == 59 ) {second = 0;
    minits = minits + 1;
    mini.innerText = minits}
    if(second==59 || minits==59)
    {second = 0;
        minits=0;
        hours = hours + 1;
        hour.innerText = hours; }


  }, 100);
};
const getStop=()=>{
    clearInterval(start)
}
const getReset=()=>{
  getStop();
    second=0;
    minits=0;
    hours=0;
    sec.innerText=second;
    mini.innerText=minits;
    hour.innerText=hours;

}
