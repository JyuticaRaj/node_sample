// const os = require('os');


// Basic system information
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);
// console.log(`Hostname: ${os.hostname()}`);

// // Memory information
// const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
// console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// // User information
// const userInfo = os.userInfo();
// console.log(`Current User: ${userInfo.username}`);
// console.log(`Home Directory: ${os.homedir()}`);

 const fs = require('fs');
//  fs.readFile('nodetxt.txt','utf8',function(error,data)
// {
// if(error){
//     console.log("There is a Error:", error)
// }
// else{
//     console.log("There is a sucessfuly:", data)
// }
// })
 
fs.writeFile("nodetxt.txt",'hello',function(error)
{
  if(error){
    console.log("There is a Error:", error)   
        }
})

 fs.appendFile("nodetxt.txt",'\nnode haii',function(error)
{
  if(error){
    console.log("There is a Error:", error)   
        }
})