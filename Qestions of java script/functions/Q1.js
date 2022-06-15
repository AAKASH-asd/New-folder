function printarrfn(){
let arr=[];
for(let i=0;i<3;i++){
    function printI(){
        console.log("i",i);
       
    }
    // adding refrence to the array;
    // arr.push(printI())  ;//->function call and returning a value
    arr.push(printI)
}
return arr;
}
let arrfn=printarrfn();
arrfn[0]();
arrfn[1]();
arrfn[2]();
// console.log(arrfn[0]);
// console.log(arrfn[1]);
// console.log(arrfn[2]);
