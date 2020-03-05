var trades = require('./trades')

exports.trades_stocks_get = function(req, res){
    let filter_stockTrades = [];
    let symbol = req.params.symbol;
    for(i =0; i < trades.all_trades.length; i++)
    {
        if(symbol == trades.all_trades[i].symbol)
            filter_stockTrades.push(trades.all_trades[i]);
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
    for(i =0; i < trades.all_trades.length; i++)
    {
        if(symbol == trades.all_trades[i].symbol && user_id == trades.all_trades[i].user.id)
            filter_stockTradesID.push(trades.all_trades[i]);
    }
    if(filter_stockTradesID.length != 0){
        res.status(200).send(filter_stockTradesID.sort(function(a, b){return a.id - b.id }));
        return;
    }
    res.sendStatus(404);
}
