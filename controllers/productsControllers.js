const {conexion} = require('../index');

const homeProducts = (req, res) =>{
    let sql = "SELECT * FROM PRODUCTS";
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        res.render('products', { tabla1: 'PRODUCTS', results })
    })
    //res.render('products', { tabla1: 'PRODUCTS' })
}

const updateProduct = (req, res) =>{
    console.log(req.body);
    console.log("Actualizado");
    let sql = "UPDATE PRODUCTS SET product='" + req.body.produ
    ct + "', price='" + req.body.price + "' WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos actualizados correctamente");
        res.render('products', { tabla1: 'PRODUCTS' })
    }) 
    //console.log(req.body);
    //console.log("Actualizado");
    //res.render('products', { tabla1: 'ACTUALIZADO' })
}

const deleteProduct = (req, res) =>{
    console.log(req.body);
    console.log("Eliminado");
    let sql = "DELETE FROM PRODUCTS WHERE id=" + req.body.id;
    let query = conexion.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Datos eliminados");
        res.render('products', { tabla1: 'PRODUCTS' });
    });
    //console.log(req.body);
    //console.log("Eliminado");
    //res.render('products', { tabla1: 'ELIMINADO' });
}

module.exports = {
    homeProducts, 
    updateProduct, 
    deleteProduct
};