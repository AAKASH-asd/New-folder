// folder and file ke saath deal karne me kaam aati hai
let fs=require("fs");
// console.log("before")
// fs.writeFileSync("readme.txt","My name is anthony gonsalves")
// let content=fs.readFileSync("readme.txt","utf-8");
// console.log(content)
// // creation of file
// fs.writeFileSync("readme.txt","")
// fs.writeFileSync("readme.txt","I havedone some thing more")
// console.log("after")
// // append
// fs.appendFileSync("readme.txt","i have added some other usefull content");
// // delete 
//  fs.unlinkSync("readme.txt");
//  console.log(content);
 fs.mkdirSync("newfolder");
//  delete
fs.rmdirSync("toberemove");
// file and folder->get
let content=fs.readdirSync
("C:\\Users\\HP\\Desktop\\New folder\\Qestions of java script")
console.log(content);