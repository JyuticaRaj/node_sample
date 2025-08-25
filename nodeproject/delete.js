const http = require('http');
const port = 3018;
const names = [];

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url.startsWith('/insert')) {
        const name = url.split('=')[1];
        if (names.includes(name)) {
            res.end('Name already exists');
        } else {
            names.push(name);
            res.end('Inserted ' + name);
        }
    } else if (url.startsWith('/getAllNames')) {
        res.end(names.join(', '));
    } else if (url.startsWith('/deleteName')) {
        const name = url.split('=')[1];
        const index = names.indexOf(name);
        if (index === -1) {
            res.end('Name does not exist');
        } else {
            names.splice(index, 1);
            res.end('Deleted ' + name);
        }
    } else {
        res.end('Invalid request');
    }
});

server.listen(port, () => {
    console.log('Server running on port ' + port);
});
