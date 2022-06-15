 const fs=require("fs");
console.log("before");
// let ans=fs.readFileSync("f1.txt","utf-8");
// console.log("ans",ans);
// console.log("After");
// //  file  is 4 gb-> then bottle neck 



// let a=10;
// console.log("before",a);
fs.readFile("f1.txt",frconf);

// console.log("mujhe wait nhi karna");
// console.log("after");

function frconf(err,data){
    if(err){
        console.log("err",err);
    }else{
        console.log("data"+data);
    }
} 
console.log("after");
for(let i=0;i<=10;i++){
    console.log("number is",i);
}


