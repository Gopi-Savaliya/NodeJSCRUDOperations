const fs = require('fs');
const path = require('path');
let dirPath = path.join(__dirname,'Files');

// Create File in Files folder
// fs.writeFileSync(dirPath + "/HelloWorld.txt", "Hello everyone!!!");

// Read file
// fs.readFile(dirPath + "/HelloWorld.txt", 'utf8', (err, item) => {
//     console.log(item);
// });

// Append file
// fs.appendFile(dirPath + "/HelloWorld.txt", 'This is the ultimate moment!',(err)=>{
//     if(!err){
//         console.log("File appended successfully");
//     }
// });

// File Rename
// fs.rename(dirPath + "/HelloWorld.txt", dirPath + "/Hello.txt", (err)=>{
//     if(!err){
//         console.log("File renamed successfully");
//     }
// });

// Delete File
fs.unlinkSync(dirPath + "/Hello.txt");
