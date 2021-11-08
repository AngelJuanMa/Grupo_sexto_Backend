'use strict'
var app = require('./app');
var port = 3800;

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3800");
});
		