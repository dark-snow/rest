const express = require('express');
const Rest = require('../modules/rest.module.js');



const app = express();


app.use(new Rest());



app.listen(9999);
console.log('app is running port 9999');