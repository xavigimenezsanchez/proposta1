var express = require("express");
var app = express();



app.use('/', require("./static"));



app.listen(process.env.PORT, function() {
    console.log("Enplater server listening on ", process.env.PORT);
});
