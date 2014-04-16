/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.ic = function(req, res){
  console.log("Respond to: "+req.query.callback);
  res.status(200);
  res.type('json');
  res.jsonp({data: 'Connection ACK', foo: '200'});
};