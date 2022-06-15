//  npm in jsdom
const fs =require("fs");
let htmlContent=fs.readFileSync("sample.html","utf-8")

const jsdom=require("jsdom");
const JSDOM =jsdom.JSDOM;  //no meaning
//1-> string form me ->html contet provide 
// pass to new JSDOM
let dom=new JSDOM(htmlContent);
// 2-> basically a  key  bas aati hai- no meanig
let document=dom.window.document;


//3->logic->help to get  your html element  if you  pass a selectors
const allps= document.querySelectorAll("p");
console.log(allps.length);
// content->
let firstpkaContent =  allps[0].textContent;
console.log("first p ka content " ,firstpkaContent);
// const allidswala=document.querySelectorAll('#unique');
// let content= allidswala[0].textContent
// console.log(content);