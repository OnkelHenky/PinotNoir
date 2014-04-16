
/*
 * GET home page.
 */

var fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.altIndex = function(req, res){
    fs.readFile( __dirname.split('/routes')[0] + '/views/altIndex.html',
      function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading altIndex.html');
        }
        res.writeHead(200);
        res.end(data);
      });
};