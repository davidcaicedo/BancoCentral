const express = require( 'express' );
const bodyParser = require( 'body-parser' );

// Instanciamos express como servidor
const app = express();

// Uso de BodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('./api/router.js')(app);

// Iniciamos el servidor escuchado por el puerto 3500
app.listen(3500, function(){
    console.log( 'El server está corriendo' ); 
});