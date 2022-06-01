let fs = require("fs");
let path=require("path");
let modules=["javascript","Browser","react","Backend","git"];
// [ath build]
let webdevFolderPath=path.join(process.cwd(),"webdev")
// does this path exists
if(fs.existsSync(webdevFolderPath)) {
// /   i dont need to creaate it
console.log("web developer is already exists");

}else {
    fs.mkdirSync(webdevFolderPath);
}
//  create all the modules inside your  web diorectory
for(let i=0;i<modules.length;i++){
    let modulepath=path.join(webdevFolderPath,modules[i]);
    if(fs.existsSync(modulepath)){
        console.log(modules[i],"module already exists");
    }else{
        fs.mkdirSync(modulepath);
    }
}