var artnetOptions = {
    host: '10.213.3.163'
};

var artnet = require('artnet')(artnetOptions);
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('I am an api!');
});

app.post('/', function(request, response){
    console.log(request.body.dmx);      // your JSON
    response.send(request.body.dmx);    // echo the result back
    artnet.set(request.body.dmx);
});

var server = app.listen(3456, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

