
const mysql = require('mysql2');

conexion = mysql.createConnection({
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

const homeProducts = (req, res) => {
    let sql = "SELECT * FROM PRODUCTS";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render('products', { tabla1: 'PRODUCTS', results })
    })
}

const updateProduct = (req, res) => {
    console.log(req.body);
    console.log("Actualizado");
    let sql = "UPDATE PRODUCTS SET product='" + req.body.product + "', stock='" + req.body.stock + "' WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos actualizados correctamente");
        res.redirect('products')
    })
}

const deleteProduct = (req, res) => {
    console.log(req.body);
    console.log("Eliminado");
    let sql = "DELETE FROM PRODUCTS WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos eliminados");
        res.redirect('products');
    });
}

module.exports = {
    homeProducts,
    updateProduct,
    deleteProduct
};