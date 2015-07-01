
/**
 * Module dependencies.
 */

var express = require('express')

  , routes = require('./routes')
  , user = require('./routes/user')
  , socketLogic = require('./socketlogic.js')
  , path = require('path');


var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var proxy = require('express-http-proxy');
var http = require("http");

var app = express();
var server = require('http').Server(app);
var io = require("socket.io").listen(server);

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
//app.use(favicon());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(methodOverride());
  // reference to the static resources, located in the 'public' folder.
  app.use(express.static(path.join(__dirname, 'public')));



  app.use(errorHandler());

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

/*Routs*/
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/ic/web/service', user.ic);
app.get('/altIndex',routes.altIndex);

app.use('/reloadStuff/*',function(req,res){

    var _loadParam = req.params[0];


    res.writeHead(200);
    res.end();


});

app.use('/switch/*', function(req, res) {
    console.log('Request from Moses13', req.params[0]);
    var _switchOption = req.params[0];
    var _websteckdoserequest = void 0;

    switch (_switchOption){
        case "10":
            _websteckdoserequest =  "http://192.168.0.102/cgi-bin/schalten?steckdose_nr=1&steckdose_soll=0";
            break;
        case "11":
            _websteckdoserequest =  "http://192.168.0.102/cgi-bin/schalten?steckdose_nr=1&steckdose_soll=1";
            break;
        case "20":
            _websteckdoserequest =  "http://192.168.0.102/cgi-bin/schalten?steckdose_nr=2&steckdose_soll=0";
            break;
        case "21":
            _websteckdoserequest =  "http://192.168.0.102/cgi-bin/schalten?steckdose_nr=2&steckdose_soll=1";
            break;
        case "30":
            _websteckdoserequest =  "http://192.168.0.102/cgi-bin/schalten?steckdose_nr=3&steckdose_soll=0";
            break;
        case "31":
            _websteckdoserequest =  "http://192.168.0.102/cgi-bin/schalten?steckdose_nr=3&steckdose_soll=1";
            break;
        case "00":
             break;
        default:
            //break;
    }

    console.log(_websteckdoserequest);
    http.get(_websteckdoserequest, function(res) {
        console.log("Got response: " + res.statusCode);
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });


    res.writeHead(200);
    res.end();
});


server.listen(app.get('port'), function(){
  console.log("Express server http://127.0.0.1 listening on port " + app.get('port'));
});

/* Starting the WebSocket magic */
socketLogic.startTheMagic(io);

