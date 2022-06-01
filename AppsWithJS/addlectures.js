// //  file deal with crud operation  and  handling with folder 
// // folder and files
 let fs=require("fs");
const path = require("path");
//  let content=fs.readFileSync("readme.txt","utf8");
// console.log(content);
// // file->read,write,create,delete,apppend,copy
// // crud
//  console.log("before");

// const { fstat } = require("fs");

// // *****************************directory*******************
// console.log("after");
// // create
// fs.mkdirSync("newfolder")
// // delete
// fs.rmdirSync("toberemove");
// // // files and folder ->get
// let content=fs.readdirSync("C:\\Users\\HP\\Desktop\\New folder\\Qestions of java script");
// console.log(content);
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
let foldername ="C:";
let nextfolderName="Movies";
let childfolder="bollywood";
let actualFile="rang De BAsanti";
// path join
let address=path.join(foldername,nextfolderName,childfolder,actualFile);
console.log(address);


