// 1. Write an ATM machine program which gives the list in console
//         Change Pin          : 1
//         Cash Withdrawal     : 2
//         Cash Deposit        : 3
//         Check Balance       : 4
//         Mini statement      : 5
//         <!-- Invalid option      : < 0 || > 5 -->
//         You have changed Pin
//         Please enter a valid Pin
//         You have successfully Withdrawal 55000Rs
// You have successfully deposited 5000Rs, current balance is 60000Rs
//         The available balance is 60000Rs
//         Mini statement is not working. Sorry for inconvenient cost
//
function atmMachine() {
  console.log(`Welcome Poonam in BOI ATM !! How can help you`)
  console.log(`Please select the number. \n
  --->Enter 1 to Change Pin \n
  --->Enter 2 to Check Balance \n
  --->Enter 3 to Cash Withdrawal\n
  --->Enter 4 to Cash Deposit \n
  --->Enter 5 to Mini Statement \n `);
  let pin=1234;
  let number=Number(prompt(`Please select the number 1-5. \n
  --->Enter 1 to Change Pin \n
  --->Enter 2 to Check Balance \n
  --->Enter 3 to Cash Withdrawal\n
  --->Enter 4 to Cash Deposit \n
  --->Enter 5 to Mini Statement \n`));
switch(number){
  case 1:
  console.log( '--->Enter 1 to Change Pin \n')
  let oldPin=Number(prompt('Enter the Old Pin number'))

  if(oldPin.length!=4){
return +console.error(`please enter vaild a pin`)
  }
  if(oldPin==pin){
    console.log(`old pin and pin are match `)
  }

}
}
atmMachine()

//   let number = Number(prompt("Enter the number 1 - 5 "));
//   let preDefinedPin = 1234;
//   let currentAmount = 60000;
//   let cashDeposit=Number(prompt("Enter the Deposit amount"))
//   let totalCashDeposit=cashDeposit+currentAmount
//   switch (number) {
//     case 1:
//       console.log("you have change the pin");
//       let enterPin = prompt("enter the pin");
//     //   let changePin=Number(prompt('Enter the new pin'));
//       if (preDefinedPin == enterPin) {
//         return console.log(
//           `${preDefinedPin} old pin and ${enterPin} enter pin are match generate the new pin`
//         );
//       } 
//     //   else if(changePin) {
//     //     console.log('you have successfully generate new pin')
//     //   }   
//                   else {
//         return console.log(
//           `${preDefinedPin} old Pin and ${enterPin} does not match Please enter a valid Pin`
//         );
//       }

//     case 2:
//       console.log("Cash Withdrawal");
//       let Withdrawal = Number(prompt("Enter the Withdrawal amount"));
//       let WithdrawalAmount = currentAmount - Withdrawal;
//       if (currentAmount >= Withdrawal) {
//         return console.log(
//           `You have successfully Withdrawal ${Withdrawal}  and remaining balance ${WithdrawalAmount}`
//         );
//       } else {
//         return console.log(
//           `You have not Withdrawal the amount  because insufficient balance in your account`
//         );
//       }
//     case 3:
//         console.log ("Cash Deposit");
       
//      return console.log(`You have successfully deposited ${cashDeposit} rs, current balance is ${currentAmount} and total Balance is ${totalCashDeposit} rs`);
      
//     case 4:
//         console.log(  "Check Balance ")
//         let availableBal=totalCashDeposit
// if(availableBal==totalCashDeposit){
//       return `The available balance is ${availableBal}`;}
//       else{
//         console.log("server down")
//       }
//     case 5:
//       return "Mini statement is not working. Sorry for inconvenient cost";

//     case 6:
//       if (number < 0 || number > 5) return "Please enter a valid option";
//   }
