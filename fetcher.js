/*Install and use the request library to make the HTTP request 
(We know this library is deprecated but it is still ok to use for our purposes.)
Use Node's fs (file system) module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning above)*/
const request = require('request');
const fs = require('fs');
//step 1 get the files from command line
//value 1 url
//value 2 file path
const argv = process.argv.slice(2);

request(argv[0],function(error, response, body) {
  fs.writeFile(argv[1], body ,error => {
    if(error){
      console.log("There is an error")
    }
  })
    console.log(`Download and saved ${response.headers['content-length']} bytes to ${argv[1]}`);
  });











// const path = '/Users/shakiratkomolafe/lighthouse-js-fundamentals/w2/d3/page-fetcher/';
// request('http://www.example.edu', (error, response, body) => {
//   fs.write

//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('body:', body);
//   fs.writeFile(path, body, err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
//   });
// });