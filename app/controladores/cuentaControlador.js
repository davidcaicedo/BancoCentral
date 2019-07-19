let Cuenta = require('../modelos/cuenta.js');//IMportamos la clase modelo
//Creamos la clase controladora para manjar la informacion
class CuentaControlador {
    constructor() {   
    }
    //Funcion encargada de manejar la consulta de un Cuenta por id
    consultaCuenta(req, res) {
        let id = req.params.id;
        Cuenta.consultarCuenta(id, (err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }
    // Funcion encargada de manejar al consulta de todos los Cuenta de la base de datos
    consultaCuentas(req, res) {
        Cuenta.consultarCuentas((err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }  
}
const instanciaControlador = new CuentaControlador();
module.exports  = instanciaControlador;