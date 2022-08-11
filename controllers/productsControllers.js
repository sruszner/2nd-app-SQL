const {conexion} = require('../index');

const homeProducts = (req, res) =>{
/*     let sql = "SELECT * FROM PRODUCTS";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render('products', { tabla1: 'PRODUCTS', results })
    }) */
    res.render('products', { tabla1: 'PRODUCTS' })
}

const updateProduct = (req, res) =>{
    let sql = "UPDATE PRODUCTS SET product='" + req.body.product + "', price='" + req.body.price + "' WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos actualizados correctamente");
        res.render('products', { tabla1: 'PRODUCTS' })
    })  
    res.render('products', { tabla1: 'PRODUCTS' })
}

const deleteProduct = (req, res) =>{
/*     let sql = "DELETE FROM FORMULARIO WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos eliminados");
        res.render('products', { tabla1: 'PRODUCTS' });
    }); */
    res.render('products', { tabla1: 'PRODUCTS' });
}

module.exports = {
    homeProducts, 
    updateProduct, 
    deleteProduct
};