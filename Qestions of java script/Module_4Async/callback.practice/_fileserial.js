const  fs = require("fs");
console.log("before");
let f1path=".../f1.txt";
let f2path=".../f2.txt";
let f3path=".../f.txt";
let f4path=".../f4.txt";
let outputcontent="";
fs.readFile("f1.txt",frconf);

function frconf(err,data){
    if(err){
        console.log("err",err);
    }
    else{
        console.log("data"+data);
        fs.readFile("f2.txt",fr2conf);
   outputcontent+=data;
    }
}

function fr2conf(err,data){
        if(err){
            console.log("err",err);
        }
        else{
            console.log("data"+data);
            fs.readFile("f3.txt",fr3conf);
            outputcontent+=data;
        }
    }
    

function fr3conf(err,data){
    if(err){
        console.log("err",err);
    }
    else{
        console.log("data"+data);
        outputcontent+=data;
        fs.writeFile("f4.txt",outputcontent,writecb);
    }
}
function writecb(err,data){
    if(err){
        console.log("err",err);
    }
    else{
        console.log("f4 created");
    }
}
   

console.log("after");

// f1,f2,f3>f4.txt















// function fr2conf(err,data){
//     if(err){
//         console.log("err",err);
//     }
//     else{
//         console.log("data"+data);
//     }
// }
// function fr3conf(err,data){
//     if(err){
//         console.log("err",err);
//     }
//     else{
//         console.log("data"+data);
//     }
// }