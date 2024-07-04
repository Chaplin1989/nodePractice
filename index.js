//dependencies
// inporting http module for for creating server
const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');

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
app.handleReqRes = handleReqRes;

//start the server
app.createServer();

//Testing file system
//  creating a new file and adding data within it
// data.create('test', 'newFile', {country: 'India', language: 'Bangla'}, (err)=>{
//     console.log("error was: ",err);
// } )

//reading data from a file
// data.read('test', 'newFile', (err, data)=>{
//     console.log(err, data);
// })

//updating data within a file
// data.update('test', 'newFile', { country: 'Spain', language: 'Spanish' }, (err) => {
//     console.log("error was: ",err);
// } )

//deleting a file
data.delete('test', 'newFile', (err)=>{
    console.log("error ",err);
})