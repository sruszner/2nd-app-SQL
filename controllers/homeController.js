const knex = require('../db/connection');

const homeController = (req, res) =>{
    res.render('index');
}

const updateHome = (req, res) => {
    knex('products').insert({
        product: req.body.newProduct, 
        stock: req.body.stock
    })
    .then((results) => {
        res.redirect('/products');
    })
    .catch((err) => {
        console.log(`${err}`);
    })
}


module.exports = {
    homeController,
    updateHome
};