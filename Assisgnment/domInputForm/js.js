const main=document.querySelector(".main");
const form=document.createElement("form")
main.append(form);
const inputFN=document.createElement("input")
inputFN.setAttribute("type","text")
inputFN.setAttribute("name","name")
inputFN.setAttribute("placeholder","First Name")

form.append(inputFN);
// last name
const inputLN=document.createElement("input")
inputLN.setAttribute("type","text")
inputLN.setAttribute("name","name")
inputLN.setAttribute("placeholder","last Name")

form.append(inputLN);
//email
const email=document.createElement("input")
email.setAttribute("type","email")
email.setAttribute("name","name")
email.setAttribute("placeholder","email ")

form.append(email);
//Contact
const Contact=document.createElement("input")
Contact.setAttribute("type","number")
Contact.setAttribute("name","name")
Contact.setAttribute("placeholder","Contact number")

form.append(Contact);
//Address
const Address=document.createElement("input")
Address.setAttribute("type","text")
Address.setAttribute("name","name")
Address.setAttribute("placeholder","Address ")

form.append(Address);