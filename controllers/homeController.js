
const homeController = (req, res) =>{
    res.render('index');
}

const updateHome = (req, res) =>{
    console.log(req.body);
    const { newProduct, stock } = req.body;
    console.log(newProduct);
    console.log(stock);
    let data = {
        product: newProduct,
        stock: stock
    }
    let sql = "INSERT INTO PRODUCTS SET ?";
    let query = conexion.query(sql, data, (err, results) => {
        if (err) throw err;
    });

    res.redirect('/');
}

module.exports = {
    homeController,
    updateHome
};