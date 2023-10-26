const addSub=(a,b)=>{
console.log("add", a+b)
console.log("sub", a-b)
console.log("multi", a*b)
console.log("divide", a/b)
console.log("module", a%b)}
for(let i=1;i<10;i++){
addSub(i,(Math.random()*1000).toFixed(0))
} 
// addSub(4,8)
// addSub(41,98)
// addSub(400,80)
// addSub(450,18)
// addSub(4000,81)
const shopkeeper=(tools1 ="",tools2="",tools3="",tools4="",tools5="",tools6="",tools7="")=>{
    console.log(`shopkeeper ${tools1} ${tools2} ${tools3} ${tools4}${tools5} ${tools6} ${tools7}`)
 }
 const stationary=(tools1 ="",tools2="",tools3="",tools4="",tools5="",tools6="",tools7="")=>{
    console.log(`stationary ${tools1} ${tools2} ${tools3} ${tools4}${tools5} ${tools6} ${tools7}`)
    shopkeeper("books", "pens", "erasers", "shapeners ", "penciles","copies")
 
 }
 stationary("book", "pen", "eraser", "shapener ", "pencile")