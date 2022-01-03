//introduce express

const express = require('express');

// introduce lib to be used for paths

const path = require('path');

// link with logger (middleware)

const logger = require('./MiddleWare/logger');


// link with model from members.js

const members = require('./members');

// variable "app" to represent express

const app = express();



// init middle ware (logger)

//app.use(logger);

// Body Parser Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Making the public folder static (web server)

app.use(express.static(path.join(__dirname, 'Public')));

// Members api stuff route

app.use('/api/members', require('./routes/api/members'));




    


// Server setup


const PORT = process.env.port || 5000;


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));