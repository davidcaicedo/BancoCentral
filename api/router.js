const ClienteControlador = require('../app/controladores/clienteControlador.js');//IMmportamos la clase controlador
const CuentaControlador = require('../app/controladores/cuentaControlador.js');//IMmportamos la clase controlador
const TransaccionControlador = require('../app/controladores/transaccionControlador.js');//IMmportamos la clase controlador

//Indicamos que es un modulo que se va a usar desde afuera y recibe como parametro la instancia de app para implementar sus funciones
module.exports = (app) => {

    // Clientes
    //Recurso clientes encargado de consultar un cliente segun el id en base de datos
    app.get('/clientes/:id', function(req, res) { 
        ClienteControlador.consultaCliente(req, res);
    });

    //Recurso Clientes encargado de consultar todos los clientes de la base de datos
    app.get('/clientes', function(req, res){
        ClienteControlador.consultaClientes(req, res);
    });

    // Cuentas
    //Recurso cuentas encargado de consultar una cuenta segun el id en base de datos
    app.get('/cuentas/:id', function(req, res) { 
        CuentaControlador.consultaCuenta(req, res);
    });

    //Recurso cuentas encargado de consultar todas las cuentas de la base de datos
    app.get('/cuentas', function(req, res){
        CuentaControlador.consultaCuentas(req, res);
    });

    // Transacciones
    //Recurso encargado de consultar una transaccion segun el id en base de datos
    app.get('/transacciones/:id', function(req, res) { 
        TransaccionControlador.consultaTransaccion(req, res);
    });

    //Recurso encargado de consultar todos los registros de la base de datos
    app.get('/transacciones', function(req, res){
        TransaccionControlador.consultaTransacciones(req, res);
    });

    

    /*
    //Rcurso Personas que me devuele por le metodo POST la estructura de una persona segun los datos que llegan
    app.post('/personas', (req, res) => {
        let nombre = req.body.nombre;
        let edad   = req.body.edad;
        let miPersona = {
            'elNombre' : nombre,
            'laEdad'   : edad
        };
        res.send(miPersona);
    });*/

    // Personas
    //Recurso raiz que me devuelve un json con la estructura de una persona
    app.get('/', function (req, res) {
        let persona = {
            'nombre': 'Orlando',
            'edad'  : 30
        };
        res.send(persona);
    });

    //Rcurso Personas que me devuele por le metodo POST la estructura de una persona segun los datos que llegan
    app.post('/personas', (req, res) => {
        let nombre = req.body.nombre;
        let edad   = req.body.edad;
        let miPersona = {
            'elNombre' : nombre,
            'laEdad'   : edad
        };
        res.send(miPersona);
    });

}