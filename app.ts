
var express = require('express');
var app = express();

app.set("view options", { layout: false });
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index.html');
});

var port = process.env.PORT || 7000;
//app.listen(7000, '127.0.0.1')
app.listen(port, () => {
    console.log('listening on port ' + port);
});