const{Router} = require('express');
const router = Router();
const {homeProducts, updateProduct, deleteProduct} = require('../controllers/productsControllers');

router.get('/', homeProducts);
router.post('/products', updateProduct);
router.post('/delete', deleteProduct);

module.exports = router;