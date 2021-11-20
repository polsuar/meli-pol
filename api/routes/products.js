const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getproducts);
router.get('/:id', productController.getSingleProduct);

module.exports = router;

