//ESTE ARCHIVO TRADUCE EL BICICLETA.JSON PARA QUE PUEDA SER UTILIZADO EN LENGUAJE JS

let fs = require("fs");
let archivoJson = JSON.parse(fs.readFileSync(__dirname + "/bicicleta.json", "utf-8"));

module.exports = archivoJson;