// //  value assign
// let a=10;
// let b=20;
// a=b;
// console.log("a",a);

// let arr1=[1,2,3,4,5];
// let arr2=[5,6,7,8];
// arr1=arr2;
// console.log("arr1",arr1);
// function fn(){
//     console.log("fn is a function");
// }
// // let anotherfn=fn;
// // anotherfn();
// // let anotherrvalue=fn();
// function chotafn(){
//     console.log("i am achota fn");
// }
// {
//     console.log("i am get a function");
// console.log("param",param);
// param();
// }
// getafunction(chotafn);


function  getfirstname(firstname){
    console.log("firstname",firstname);
    return function getLastname(lastname){
        console.log("lastName",lastname);
        
            return function printfullName(){
                console.log("my name is ",firstname,lastname);
            }
        
    }
}

let getLastname=getfirstname("jasbir");
console.log("get  firstname stack hat gayan hai");
let printfullName=getLastname("singh");
console.log("get lastname  stack hat gaya hai")
printfullName();



// function outer(){
//     console.log("i am outer returning inner");
    
//     return function inner(){
//         console.log("i am  inner fn  and i will run when you will call me");

//     }

// }
// let rfn=outer(); //  first caliing   of a function 
// console.log("after this  line i will  call inner ");
// console.log(rfn)// in this 



// i am outer returning inner
// after this  line i will  call inner 
// i am  inner fn  and i will run when you will call me
// function fn(){
//     console.log("i am a statement");
// }fn();
// //  function  expressions
// let fnAddressHolder=function(){
//     console.log("i ama  function expression")
// }
// fnAddressHolder();
// let arrfn=()=>{
//     console.log("I am an arrow  function")
// }
// arrfn();

(function IIFEE(){console.log("i am IFEE");})()
