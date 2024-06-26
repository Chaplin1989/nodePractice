//dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require("../handlers/routeHandlers/notFoundHandler");

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    //request handle
    // parse url, below true mean allowing retrieve query parameters from url
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    // remove / from path name end or start
    const trimmedPath = path.replace(/^\/|\/$/g, '');
    // retrieving method name get,put or delete etc
    const method = req.method.toLowerCase();
    // retrieving url query parameters data 
    const queryStringObject = parsedUrl.query;
    // retrieving api header data
    const headersObject = req.headers;


    // adding all path related info
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }
    //retrieving route name // trimmedpath jei route er songe match korbe sei module ta ekhane chosenHandler e save hoche
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler; 
    // ekhane route related module ta execute hoche
    chosenHandler(requestProperties, (statusCode, payload) => {
        const responsedStatusCode = typeof statusCode === 'number' ? statusCode : 500;
        const responsedPayload = typeof payload === 'object' ? payload : {};

        // have to do stringify of returned payload
        const payloadString = JSON.stringify(responsedPayload);

        // return the final response
        res.writeHead(responsedStatusCode);
        res.end(payloadString);
    })

    // it is used for decoding stream or buffer data which is coming through api request body
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    //retrieving reqest body data, decoding and adding within a variable
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })
    // data send kora ses hoye gele end event fire kore tokhon decoder takeo end korte hoi
    req.on('end', () => {
        realData += decoder.end();
        console.log("realData ", realData);
    })
    // console.log("path ",path);
    // console.log("parsedUrl ",parsedUrl);
    // console.log("trimmedPath ", trimmedPath);
    // console.log("method ", method);
    // console.log("queryStringObject ", queryStringObject);
    // console.log("headersObject ", headersObject);


    // response handle
    res.end("Hello world")
}
module.exports = handler;