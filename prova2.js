exports.loaded = false;
var prova = require("./prova");
module.exports = {
    aWasLoaded: prova.loaded,
    loaded: true
};