const express = require('express');
const server = express();
const path = require('path');
const createErr = require('http-errors');
//const cntrlArt = require('./contr/articles');

// routers
const mainRouter = require('./routes/main');
const redirectRouter = require('./routes/redirect');


//view
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs'); 

//main 
server.use(express.json());
server.use('/', mainRouter);

//route group
server.use('/redirect', redirectRouter);
//page 404
server.use((req, res, next) => {
    next(createErr(404));
});


//err page 
server.use((err, req, res, next) => {
   const code = err.status || 500;

    res.status(code);
    res.end(`Error: ${code}`);
});

server.listen(3000);