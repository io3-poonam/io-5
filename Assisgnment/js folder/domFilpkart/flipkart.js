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

liTag4.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>`;
const span=document.createElement("span")
span.setAttribute("id","count")
liTag4.append(span)


ulTag.append(liTag4)
// second part

const secondDiv=document.getElementsByClassName("second-section-mb ")
const addToCart = document.getElementById("addToCart");
const count = document.getElementById("count");

countVal = 0;
addToCart.addEventListener("click", function () {
  countVal = countVal + 1;
//   console.log("add to cart is clicked", countVal);

  if (countVal < 100) {
    count.innerText = countVal;
  } else {
    count.innerText = "99+";
  }
});

