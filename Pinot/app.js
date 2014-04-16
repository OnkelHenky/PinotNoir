
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , socketLogic = require('./socketlogic.js')
  , path = require('path');

var app = express()
  , server = http.createServer(app);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  // reference to the static resources, located in the 'public' folder.
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/*Routs*/
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/ic/web/service', user.ic);
app.get('/altIndex',routes.altIndex);

server.listen(app.get('port'), function(){
  console.log("Express server http://127.0.0.1 listening on port " + app.get('port'));
});

/* Starting the WebSocket magic */
socketLogic.startTheMagic(server);