const http = require('http');
const fs = require('fs').promises;

const port = 4008;
const Encoding = "utf8";

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url.includes("getAllUsers")) {
    fs.readFile("users.json", Encoding)
      .then(users => {
        res.end(users);
      })
      .catch(err => {
        res.end("Error reading file");
      });
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
