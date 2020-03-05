var express = require('express');
var router = express.Router();
var trades_controller = require('../controllers/trades');

// Routes related to stocks

router.get('/', trades_controller.trades_get);
router.get('/users/:id', trades_controller.trades_get_id);
router.post('/', trades_controller.trades_post);
router.get('/stocks/:symbol', trades_controller.trades_stocks_get);
router.get('/users/:id/stocks/:symbol', trades_controller.trades_stocks_getByID)
module.exports = router;