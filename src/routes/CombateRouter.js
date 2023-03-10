const express = require('express');
const router = express.Router();
const CombateController = require('../controller/CombateController');

router.get('/list_all' , CombateController.list_all);
router.get('/register_combate' , CombateController.register_combate);

module.exports = router;
