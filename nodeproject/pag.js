const { count } = require('console');
const http = require('http');       
const port = 4018;  

let users=[{"id":1,"name":"Gianni","rollno":1},
{"id":2,"name":"Ardisj","rollno":2},
{"id":3,"name":"Oby","rollno":3},
{"id":4,"name":"Izaak","rollno":4},
{"id":5,"name":"Masha","rollno":5},
{"id":6,"name":"Peadar","rollno":6},
{"id":7,"name":"Jolene","rollno":7},
{"id":8,"name":"Tymothy","rollno":8},
{"id":9,"name":"Tamiko","rollno":9},
{"id":10,"name":"Peyter","rollno":10},
{"id":11,"name":"Kort","rollno":11},
{"id":12,"name":"Darrell","rollno":12},
{"id":13,"name":"Ketty","rollno":13},
{"id":14,"name":"Dorena","rollno":14},
{"id":15,"name":"Rochell","rollno":15},
{"id":16,"name":"Trina","rollno":16},
{"id":17,"name":"Sully","rollno":17},
{"id":18,"name":"Desi","rollno":18},
{"id":19,"name":"Mallory","rollno":19},
{"id":20,"name":"Husein","rollno":20},
{"id":21,"name":"Foss","rollno":21},
{"id":22,"name":"Imelda","rollno":22},
{"id":23,"name":"Ruggiero","rollno":23},
{"id":24,"name":"Nicki","rollno":24},
{"id":25,"name":"Douglass","rollno":25},
{"id":26,"name":"Verena","rollno":26},
{"id":27,"name":"Callean","rollno":27},
{"id":28,"name":"Derrick","rollno":28},
{"id":29,"name":"Sarena","rollno":29},
{"id":30,"name":"Tom","rollno":30},
{"id":31,"name":"Sadella","rollno":31},
{"id":32,"name":"Anthony","rollno":32},
{"id":33,"name":"Mina","rollno":33},
{"id":34,"name":"Shelia","rollno":34},
{"id":35,"name":"Jaime","rollno":35},
{"id":36,"name":"Claresta","rollno":36},
{"id":37,"name":"Tammy","rollno":37},
{"id":38,"name":"Dewey","rollno":38},
{"id":39,"name":"Waverly","rollno":39},
{"id":40,"name":"Juieta","rollno":40},
{"id":41,"name":"Haslett","rollno":41},
{"id":42,"name":"Keri","rollno":42},
{"id":43,"name":"Fernando","rollno":43},
{"id":44,"name":"Arley","rollno":44},
{"id":45,"name":"Sutherland","rollno":45},
{"id":46,"name":"Anne-corinne","rollno":46},
{"id":47,"name":"Timi","rollno":47},
{"id":48,"name":"Carolynn","rollno":48},
{"id":49,"name":"Ransell","rollno":49},
{"id":50,"name":"Mervin","rollno":50}];

const server = http.createServer(function (req, res) {
   const strUrl = req.url; 
  
    // getPaginatedUsers?pageNumber=1&count=10
    if (strUrl.includes("getPaginatedUser")) {
        let query = strUrl.split("?")[1];
        let pageNumber = parseInt(query.split("&")[0].split("=")[1]);
        let count = parseInt(query.split("&")[1].split("=")[1]);

        let first = (pageNumber - 1) * count;
        let last = first + count;
        const pageData = users.slice(first, last);

        console.log(pageData);
        
        res.end(JSON.stringify(pageData));
    }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
