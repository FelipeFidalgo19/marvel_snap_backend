const express = require('express');
const router = express.Router();
const CartasController = require('../controller/CartasController');

router.get('/list_all' , CartasController.list_all);
router.get('/find_id_deck_campeao/:id_campeao' , CartasController.find_id_deck_campeao);

router.post('/create_carta' , CartasController.create_carta);

router.put('/add_card_deck/:id_deck/:id_card' , CartasController.add_card_deck);

router.delete('/find_id_card_delete/:id_card' , CartasController.find_id_card_delete);

module.exports = router;