var express = require('express');
var router = express.Router();
var trades_controller = require('../controllers/trades');

// Route to delete all trades


router.delete('/',trades_controller.trades_delete);
module.exports = router;
