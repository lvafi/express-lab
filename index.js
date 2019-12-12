const express = require('express');


// invoking express will return a express "app" object
const app = express();

const PORT = 3000;
const DOMAIN = 'localhost';


// recieves at least 2 arguments:
// 1) PATH of the resource
// 2) A callback: the callback has two parameters
//   a) request: Represents a HTTP Request
//   b) response: Represents a HTTP Response

// Route to handle GET "/hello_world"
app.get("/hello_world", (request, response) => {
  response.send("Hello World!");
});





// app.listen is used to start your express server. It tells express to start listening for requests at a given url

// app.listen accepts 3 arguments
// 1) PORT
// 2) DOMAIN
// 3) Callback
app.listen(PORT, DOMAIN, () => {
  console.log(`Express listening on ${DOMAIN}:${PORT}`);
});
