// Write a JavaScript program to compute the union
// of two arrays . Input array will only have unique elements 
// in there respective array.Input arr1= [1, 2, 3]arr2= [100, 2, 1,10] 
//Output: [1,2,3,100,10]
let a,b;
a=[1,2,3];
b=[100,2,1,10];
a.push(b[0]);
a.push(b[3])
console.log(a);