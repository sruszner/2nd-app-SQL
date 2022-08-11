
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3000;

const routerHome = require('./routes/homeRouter');
const routerProducts = require('./routes/productsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'assets')));

const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE
})

conexion.connect(function (error) {
    if (error) throw error;
    console.log("Conexion a la DB exitosa");
})

app.use('/', routerHome);
app.use('/home', routerHome);
app.use('/products', routerProducts);

app.listen(PORT, ()=>{
    console.log(`Server running on Port = ${PORT}`);
})

