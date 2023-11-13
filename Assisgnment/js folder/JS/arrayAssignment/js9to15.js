// 9------  Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
      let duplicateValue=["a",54,"word",54,"a",98,true,false,45,100,96,true,"sunday","weekend","word",15]
      const duplicateRemove=duplicateValue.filter((ele,ind)=>duplicateValue.indexOf(ele)==ind)
      console.log("duplicateRemove",duplicateRemove)
      const dupRemoveSpread=[...new Set(duplicateValue)]
        console.log("dupRemoveSpread",dupRemoveSpread)
    
// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level. Sample Data :
//  console.log(flatten([1, [2], [3, [[4]]],[5,6]])); [1, 2, 3, 4, 5, 6] 
//  console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); [1, 2, 3, [[4]], 5, 6]

// 11----  There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array. Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13]; Expected Output : [4, 5, 8, 10, 12, 13]
//  let array1 = [1,0,2,3,4]; let array2 = [3,5,6,7,8,13];
 const Array1=[1,0,2,3,4]; 
 const Array2 = [3,5,6,7,8,13];
const AddTwoValue=(arr1,arr2)=>{
    const result=[]
let maxValue=Math.max(Array1.length,Array2.length)
for(let i=0;i<maxValue;i++){
    const value1=arr1[i]||0
    const value2=arr2[i]||0
    // console.log("value1",value1)// check
    // console.log("value2",value2)// check

result.push(value1+value2)
// console.log(result)//check
}
return result;
}
const outPut=AddTwoValue(Array1,Array2)
console.log(outPut)


 // 14---- Write a JavaScript program to compute the union of two arrays. Sample Data : console.log(union([1, 2, 3], [100, 2, 1, 10])); [1, 2, 3, 10, 100]
// console.log(union([1, 2, 3], [100, 2, 1, 10])); [1, 2, 3, 10, 100]
const union=(arr1,arr2)=>{
    let spreadOpt=[...new Set([...A,...B])]//remove duplicate
spreadOpt.sort((a,b)=>a-b)
return spreadOpt;
}
const A=[1, 2, 3];
const B=[100, 2, 1, 10]
const accValue=union(A,B)
console.log("union value",accValue);
// let concatAB=A.concat(B)
// let sortMethod=concatAB.sort()
// let s=[...A,...B]

//15---- Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
function removeFalsyArray(arr){
return arr.filter (function(element){
    return element!=null &&
    element!==0 &&
    element!=="" &&
    element!==false&&
    element!==undefined &&
    !isNaN(element)
})
}
const filter=[NaN, 0, 15, false, -22, '',undefined, 47, null]
const filterRemoveValue =removeFalsyArray(filter)
console.log("filterRemoveValue",filterRemoveValue)