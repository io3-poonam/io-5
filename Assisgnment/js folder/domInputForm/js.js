const main=document.querySelector(".main");

const form=document.createElement("form")
main.append(form);
const Heading=document.createElement("h3")

Heading.innerHTML = "Sign up Form";
Heading.setAttribute ("class","h3");
Heading.style.textAlign="center"
Heading.style.width="35%"

form.append(Heading);

const inputFN=document.createElement("input")
inputFN.setAttribute("type","text")
inputFN.classList.add("class","inputTag")

inputFN.setAttribute("name","name")
inputFN.setAttribute("placeholder","First Name")

form.append(inputFN);
// last name
const inputLN=document.createElement("input")
inputLN.setAttribute("type","text")
inputLN.classList.add("class","inputTag")
inputLN.setAttribute("name","name")
inputLN.setAttribute("placeholder","last Name")

form.append(inputLN);
//gender input
const genMFT=document.createElement("label")
genMFT.innerHTML = "Gender :- ";
form.append(genMFT);
const Gender=document.createElement("input")
Gender.setAttribute("type","radio")
Gender.setAttribute("name","gender")
Gender.setAttribute("id","Male")

form.append(Gender);
// gender label
const gen=document.createElement("label")
gen.setAttribute("for","Male")

gen.innerHTML = "Male";
form.append(gen);
//gender female input
const GenderF=document.createElement("input")
GenderF.setAttribute("name","gender")
GenderF.setAttribute("id","Female")
GenderF.setAttribute("type","radio")
form.append(GenderF);
// gender female label
const genF=document.createElement("label")
genF.setAttribute("for","Female")
genF.innerHTML = "Female";
form.append(genF);//gender other input
const GenderT=document.createElement("input")
GenderT.setAttribute("name","gender")
GenderT.setAttribute("id","Other")
GenderT.setAttribute("type","radio")
form.append(GenderT);
// gender other label
const genT=document.createElement("label")
genT.setAttribute("for","Other")
genT.innerHTML = "Other";
form.append(genT);
//email
const email=document.createElement("input")
email.classList.add("class","inputTag")
email.setAttribute("type","email")
email.setAttribute("name","name")
email.setAttribute("placeholder","email ")

form.append(email);
//Contact
const Contact=document.createElement("input")
Contact.classList.add("class","inputTag")
Contact.setAttribute("type","number")
Contact.setAttribute("name","name")
Contact.setAttribute("placeholder","Contact number")

form.append(Contact);
//Address
const Address=document.createElement("input")
Address.classList.add("class","inputTag")
Address.setAttribute("type","text")
Address.setAttribute("name","name")
Address.setAttribute("placeholder","Address ")

form.append(Address);
// terms and condition input
const checkBox=document.createElement("input")
checkBox.setAttribute("type","checkbox")
form.append(checkBox);
// terms and condition label
const tAndC=document.createElement("label")
tAndC.innerHTML = "I HAVE READ AND ACCEPT TERMS & CONDITIONS.";
form.append(tAndC);
//  <button type="submit" value="Submit">Submit</button>
//   <button type="reset" value="Reset">Reset</button>
const br=document.createElement("br")
form.append(br);
const submit=document.createElement("button")
submit.innerHTML = "Submit";
form.append(submit);
const Reset=document.createElement("button")
Reset.innerHTML = "Reset";
form.append(Reset);