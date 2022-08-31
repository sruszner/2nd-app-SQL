const express = require('express');
const cors = require('cors');
const compression = require('compression');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use(compression());

app.get((req, res) =>{
    res.send('<h1>Welcome to the mongoose APP</h1>');
})

module.exports = app;