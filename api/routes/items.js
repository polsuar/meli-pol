const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getItems);
router.get('/:id', itemController.getItemDetail);

module.exports = router;

