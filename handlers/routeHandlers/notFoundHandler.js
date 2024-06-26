/*== 404 not found page ==*/

// module scuffholding
const handler = {

};
handler.notFoundHandler = (requestProperties,callback ) => {
    console.log("requestProperties ", requestProperties);
    callback(404, {
        message: "requested url was not found"
    })
}

module.exports = handler;

