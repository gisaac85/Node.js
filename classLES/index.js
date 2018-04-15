'use strict';
const http = require('http');
const PORT = 3000;
//console.log(http);
const server = http.createServer();
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

/*
const {
    fetchCats,
    sum
} = require('./fetchCats');
console.log(fetchCats(), sum);
*/