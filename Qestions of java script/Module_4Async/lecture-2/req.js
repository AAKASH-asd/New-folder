
// npm i request-> npm
const request = require('request');
const fs=require("fs");
const jsdom=require("jsdom");



let url="http://www.google.com";
// request url,cb->'(async function )
// 1.request to the given  url
// 2.response->request function-> cb call -> data put

request(url,cb);

// error-> if any error while executing the request 
// response->header + body
// body->html

console.log('before')
function cb (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   
if (error){
    console.log("error",error.message);//print the error message

}else if(response&&response.statusCode==404){
// console.log('no error occured')-> onlyu for request
console.log("page not found");

}
else{
   
    // console.log('body:', body); // print the  HTML for the Google home page
console.log("content recieved");
    // Google homepage.
    //fs.writeFileSync("index.html",body);
extractdata(body);
}

}
//  basic structure
function extractdata(html){
    const JSDOM =jsdom.JSDOM;  //no meaning
//1-> string form me ->html contet provide 
// pass to new JSDOM
let dom = new JSDOM(html);
// 2-> basically a  key  bas aati hai- no meanig
// document  represent the  whole  html page
let document=dom.window.document;

let firstButton=document.querySelectorAll(".lsb");
let content=firstButton[0].value;
console.log("content",content);

// let allAnchors= document.querySelectorAll("#SIvCob a")
// console.log("google searches offered these languages")
// for(let i=0 ;i<allAnchors.length;i++ ){
// let content = allAnchors[i].textContent;
// console.log("content",content);

// }
}


console.log('After');