const fs = require('fs').promises;
const http = require('http');
const port = 5008;

if (strUrl.includes('deleteFile')) {
        // Example: /deleteFile?filename=samp.txt
    
        let fileName = strUrl.split("=")[1];
        fs.unlink(fileName)
            .then(() => {
                console.log("File deleted successfully");
                res.end("File deleted successfully");
            })
            .catch(error => {
                res.end("Error deleting file: " + error.message);
            });

    } else {
        res.end("Invalid request");
    }