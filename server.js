var express = require("express");

var app = express();

// Initialize the app.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


var server = app.listen(process.env.PORT || 4700, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});