const main=document.querySelector(".main-div")
console.log("main",main);
const divTag=document.createElement("div")
divTag.setAttribute("id","navbar")
divTag.classList.add("navbar")
main.append(divTag)
const ulTag=document.createElement("ul")
ulTag.setAttribute("class","flex-ul")
// ulTag.classList.add("navbar")
divTag.append(ulTag)
// image
const image=document.createElement("img")
image.setAttribute("src","./image/flipkart-plus_8d85f4.png")
image.setAttribute("class","flipKart-pic")
ulTag.append(image)
// li tag

const liTag=document.createElement("li")
const input=document.createElement("input")
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Search");
liTag.append(input)
ulTag.append(liTag)

const liTag1=document.createElement("li")
const btn=document.createElement("button")
btn.innerText="Login";
liTag1.append(btn)

ulTag.append(liTag1)

const liTag2=document.createElement("li")
liTag2.innerText="Become a Seller";
ulTag.append(liTag2)

const liTag3=document.createElement("li")
liTag3.innerText="More";
ulTag.append(liTag3)

const liTag4=document.createElement("li")
// const i=document.createElement("i")
// i.setAttribute(" class","fa-solid fa-cart-shopping")
// liTag4.innerHTML=<i class="fa-solid fa-cart-shopping"></i>
liTag4.innerText="Cart";
ulTag.append(liTag4)

// olTag.setAttribute("id", "avengers");
// olTag.classList.add("avengers-class");
// 
// main.append(olTag);