const{Router} = require('express');
const router = Router();
const {homeController, usPage, subscribeEmail} = require('../controllers/homeController');

router.get('/', homeController);
router.get('/us', usPage);
router.post('/subscribe', subscribeEmail);

module.exports = router;