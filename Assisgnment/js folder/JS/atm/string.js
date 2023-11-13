// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return (IN STRING FORMAT) the amount formatting in dollars and cents.

// 39.99 becomes: $39.99

// 3 become $3.00

// 3.1 become $3.10

// 4500 become 4500Rs.

// Complete the solution so that it reverses the string passed into it.

// ‘world’ => ‘dlrow’
// "Honey bees make honey" ==> "'yenoh ekam seeb yenoH'"
// “The greatest victory is that which requires no battle” ==> “battle no requires which that is victory greatest The”


let rev="world";
rev=rev.split("");
rev=rev.reverse();
rev=rev.join("")
console.log("world", rev) //dlrow
 let lines="Honey bees make honey" //yenoh ekam seeb yenoH
 lines=lines.split("");
 lines=lines.reverse();
 lines=lines.join("");
 console.log("lines =>" , lines);
 let moreLines="The greatest victory is that which requires no battle";//battle no requires which that is victory greatest The
 moreLines=moreLines.split(" ").reverse().join(" ");
//  moreLines=moreLines.reverse();
//  moreLines=moreLines.join("");
 console.log("more Line =>" , moreLines) 