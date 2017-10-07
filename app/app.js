var express = require('express');
var app = express();

app.use('/', express.static('public'))

var server = app.listen(8080, function () {
   var port = server.address().port

   console.log("Example app listening on port %s", port)
})
