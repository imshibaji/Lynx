var express = require('express');
var router = express.Router();
const PC = require('../controllers/product');

router.get('/', PC.list);
router.get('/:id', PC.details);

module.exports = router;