
const knex = require('../db/connection');

const homeProducts = (req, res) => {
    knex.select('*')
    .from('products')
    .then((results) => {
        for (row of results) {
            console.log(`${row['product']} - ${row['stock']}`);            
        }
        res.render('products', { tabla1: 'PRODUCTS', results});
    })
    .catch((err) => {
        console.log(`${err}`);
    })
}

const updateProduct = (req, res) => {
    console.log(req.body)
    const {product, stock, id} = req.body
    knex('products').where({id: id})
    .update({
        product: req.body.product,
        stock: req.body.stock
    })
    .catch((err) => {
        console.log(`${err}`);
    })
    res.redirect('products');
}

const deleteProduct = (req, res) => {
    knex('products').where({id: req.body.id})
    .del()
    .catch((err) => {
        console.log(`${err}`);
    })
    res.redirect('products');
}

module.exports = {
    homeProducts,
    updateProduct,
    deleteProduct
};