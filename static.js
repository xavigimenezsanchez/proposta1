var express = require("express");
var router = express.Router();
var options = {
    root: __dirname
};

router.use(express.static(__dirname+"/assets"));
router.use(express.static(__dirname+"/templates"));
router.get("/*", function(req,res,next) {
    res.sendFile("index.html",options);
});
router.get("/ca/*", function(req,res,next) {
    res.sendFile("index_ca.html",options);
});
router.get("/en/*", function(req,res,next) {
    res.sendFile("index_en.html",options);
});
router.get("/fr/*", function(req,res,next) {
    res.sendFile("index_fr.html",options);
});
module.exports = router;