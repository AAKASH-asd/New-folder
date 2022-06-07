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