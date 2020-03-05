let all_trades = [];

// GET request for trades
exports.trades_get = function(req, res) {
    res.status(200).send(all_trades.sort(function(a, b){return a.id - b.id }));
};

// GET particular id request for trades
exports.trades_get_id = function(req, res) {
  let user_id = req.params.id;
  let filter_trades = [];
  for(i = 0; i < all_trades.length; i++){
    if(user_id == all_trades[i].user.id){
        filter_trades.push(all_trades[i]);
    }
}
    if(filter_trades.length != 0){
        res.status(200).send(filter_trades.sort(function(a, b){return a.id - b.id }));
        return;
    }
res.sendStatus(404);
};

// POST request for trades
exports.trades_post = function(req, res){
  let temp = req.body;
  for(i = 0; i < all_trades.length; i++){
    if(temp['id'] == all_trades[i]['id']){
      res.sendStatus(400);
      return;
    }
  }
  
  all_trades.push(JSON.parse(JSON.stringify(req.body)));
  res.sendStatus(201);
};

// DELETE request for trades
exports.trades_delete = function(req, res){
    all_trades = [];
    res.sendStatus(200);
}

// GET particular stock symbol data for trades
exports.trades_stocks_get = function(req, res){
    let filter_stockTrades = [];
    let symbol = req.params.symbol;
    for(i =0; i < all_trades.length; i++)
    {
        if(symbol == all_trades[i].symbol)
            filter_stockTrades.push(all_trades[i]);
    }
    if(filter_stockTrades.length != 0){
        res.status(200).send(filter_stockTrades.sort(function(a, b){return a.id - b.id }));
        return;
    }
    res.sendStatus(404);
};

exports.trades_stocks_getByID = function(req, res){
    let filter_stockTradesID = [];
    let user_id = req.params.id;
    let symbol = req.params.symbol;
    for(i =0; i < all_trades.length; i++)
    {
        if(symbol == all_trades[i].symbol && user_id == all_trades[i].user.id)
            filter_stockTradesID.push(all_trades[i]);
    }
    if(filter_stockTradesID.length != 0){
        res.status(200).send(filter_stockTradesID.sort(function(a, b){return a.id - b.id }));
        return;
    }
    res.sendStatus(404);
}

