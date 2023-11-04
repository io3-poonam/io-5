const main=document.querySelector(".main")
console.log("main",main);
const olTag=document.createElement("ol")
main.append(olTag)
const liTag=document.createElement("li")
const liTag1=document.createElement("li")
const liTag2=document.createElement("li")
const liTag3=document.createElement("li")
liTag.innerText="Apple";
liTag1.innerText="Banana";
liTag2.innerText="Grapes";
liTag3.innerText="mango";
olTag.append(liTag)
olTag.append(liTag1)
olTag.append(liTag2)
olTag.append(liTag3)

