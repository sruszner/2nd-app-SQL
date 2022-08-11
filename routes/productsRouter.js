const{Router} = require('express');
const router = Router();
const {homeProducts, updateProduct, deleteProduct} = require('../controllers/productsControllers');

router.get('/', homeProducts);
router.post('/updateProduct', updateProduct);
router.post('/deleteProduct', deleteProduct);

module.exports = router;