const fs = require('fs');
const content = "Hello this is JS";
fs.writeFile('sample.txt',content,'utf-8',(err)=>
{
    if(err){
        console.log("Error in writing the file :", err);
        return;
    }
    console.log("File written Successfully");
});

