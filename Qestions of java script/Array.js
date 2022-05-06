//  let a=["aakash","amit","parveen","mohit"];
//  console.log(a[0]);
//  console.log(a[1]);
//  console.log(a[2]);
//  for(let i= 0;i<a.length;i++){
//      console.log(a[i]);
//  }




//traversing the array
let a=["aakash","Janit","Narendar","Amit shah"] 
// for(int v :a){
// console.log(v)}
a.forEach(v => {
    console.log(v)
    
});
//  indexof ->

let idx=a.indexOf("aakash")
console.log(idx)
let b=a.includes("Amit shah")
console.log(b)
console.log(a)
// splice 
let  splicedarray=a.splice(0,2)
console.log(splicedarray)
splicedarray=a.splice(0,1)
console.log(splicedarray)
splicedarray=a.splice(0,)
console.log(splicedarray)
console.log(a)
