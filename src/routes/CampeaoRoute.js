const express = require('express');
const router = express.Router();
const CampeaoController = require('../controller/CampeaoController');

router.get('/list/' , CampeaoController.list);

module.exports = router;