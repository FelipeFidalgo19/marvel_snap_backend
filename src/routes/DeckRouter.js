const express = require('express');
const router = express.Router();
const DeckController = require('../controller/DeckController');

router.get('/list' , DeckController.list);
router.get('/list_cards_deck/:id_deck' , DeckController.list_cards_deck);
router.post('/criatedeck' , DeckController.criateDeck);

module.exports = router;
