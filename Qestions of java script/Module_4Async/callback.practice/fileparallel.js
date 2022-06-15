const  fs = require("fs");

let f1path="../f1.txt";
let f2path="../f2.txt";
let f3path="../f3.txt";
console.log("before");
//  code to read  3 files  parallely

// fs.readFile(f1path,frconf);
// fs.readFile(f2path,fr2conf);
// fs.readFile(f3path,fr3conf);
fs.readFile("f1.txt",frconf);
fs.readFile("f2.txt",fr2conf);
fs.readFile("f3.txt",fr3conf);


function frconf(err,data){
    if(err){
        console.log("err",err);
    }
    else{
        console.log("data"+data);
    }
}
function fr2conf(err,data){
    if(err){
        console.log("err",err);
    }
    else{
        console.log("data"+data);
    }
}
function fr3conf(err,data){
    if(err){
        console.log("err",err);
    }
    else{
        console.log("data"+data);
    }
}


console.log("after");
for(let i=1;i<=10;i++){
    console.log("number is ",i);
}


// const fs=require("fs");
// console.log("before");
// // let ans=fs.readFileSync("f1.txt","utf-8");
// // console.log("ans",ans);
// // console.log("After");
// // //  file  is 4 gb-> then bottle neck 



// // let a=10;
// // console.log("before",a);
// fs.readFile("f1.txt",frconf);

// // console.log("mujhe wait nhi karna");
// // console.log("after");

// function frconf(err,data){
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("data"+data);
//     }
// } 
// console.log("after");
// for(let i=0;i<=10;i++){
//     console.log("number is",i);
// }


