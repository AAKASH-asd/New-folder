// console.log("a",a);
// var a;
// a=10
// console.log("a",a);
// function fn(){
//     console.log("I am a function");
// }
// fn();
// * variable and function -------
let a=10;
let b=20;
a=b;
// console.log("a",a);
let arr1=[1,2,3,4,5];
let arr2=[5,6,7,8];  
arr1=arr2;                    // address copy
// console.log("arr1",arr1);



// function fn(param){
//     // what does param contains here ->>param  has an address of arr1
// console.log("param",param);
// }
// fn(arr1);
// function  fn1(){
//     let obj={ name:"Aakash" };
//     return obj;
// }
// let rval=fn1();
// console.log("rval",rval);
// function fn(){
//     console.log("fn is a function");
// }
// // you have put addres of  fn  to annother fn   variable;
// let anotherfn=fn;
// anotherfn();
// function chotafn(){
//     console.log("I am chota fn");
// }
// function getafunction(param)
// {
//     console.log(" I am getfunction");
//  console.log("param",param);
//  param();
// }

// getafunction(chotafn);
// function getFirstname(firstName){
//     console.log("firstName",firstName);
//     return function getLastname(lastName){
//         console.log("lastname",lastName);
//         return function printfullName(){
//             console.log("My name is",firstName,lastName);
//         }
//     }
// }
// a=getFirstname();
// console.log(a);
// let getLastname=getFirstname("Aakash");
// let printfullName=getLastname("Sharma");
// printfullName();
