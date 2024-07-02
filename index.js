//dependencies
// inporting http module for for creating server
const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
// app object - module scuffholding
const app = {};

// configuration
// app.config = {
//     port: 3000
// };

//create server
// creating a createServer function
app.createServer = ()=>{
    // default http method createServer
    const server = http.createServer(app.handleReqRes);
    // addding a port for run the server
    server.listen(environment.port, ()=>{
        console.log(`lisen to port ${environment.port}`);
    })
}

// handle req and res
app.handleReqRes = handleReqRes

//start the server
app.createServer();