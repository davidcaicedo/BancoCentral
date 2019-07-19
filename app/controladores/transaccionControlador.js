let Transaccion = require('../modelos/transaccion.js');//IMportamos la clase modelo
//Creamos la clase controladora para manjar la informacion
class TransaccionControlador {
    constructor() {   
    }
    //Funcion encargada de manejar la consulta de un registro por id
    consultaTransaccion(req, res) {
        let id = req.params.id;
        Transaccion.consultarTransaccion(id, (err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }
    // Funcion encargada de manejar al consulta de todos los registros de la base de datos
    consultaTransaccion(req, res) {
        Transaccion.consultarTransacciones((err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }  
}
const instanciaControlador = new TransaccionControlador();
module.exports  = instanciaControlador;