'use strict';
const request = require('request');
request('https://www.google.com', (error, Response, body) => {
    console.log(body);
})