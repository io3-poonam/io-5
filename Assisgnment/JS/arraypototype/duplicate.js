const arr5 = [68,"my", 80, 15, 69, "my", 10, "self", "my", 12, 153, "my", 78];

const phone=arr5.filter((ele,ind)=>
    ele=="my"
    
)
console.log( phone);
const duplicate=arr5.filter((element,index)=>arr5.indexOf(element)==index)
console.log("duplicate with filter", duplicate)
const spreedOptertor=[...new Set(arr5)]
console.log("spreedOptertor", spreedOptertor);
const filterEven=arr5.filter((ele,ind)=>ele%2==0)
console.log("filter Even", filterEven)
const filterOdd=arr5.filter((ele,ind)=>ele%3==0)
console.log("filter odd", filterOdd)