const db = require('../../bd/bd');//Impostamos conexion a la base de datos
const sql = db.connection;//Instanciamos conexion para usar con las consultas

//Creamos un objeto de la tabla para proteger y enmascarar los nombres de la base de datos
const table = {
    name    :"cuentas",    
    fields  : {
        id          :   "id_cuenta",
        cliente     :   "id_cliente",
        tipo        :   "tipo_cuenta",
        saldo       :   "saldo_cuenta",
        sobregiro   :   "saldo_sobregiro",
    }
}
//Creamos la clase para empezar a crear las respectivas funcionalidades.
class Cuenta {
    //PAsamos las variables globales por referencia
    constructor(id,cliente,tipo,saldo,sobregiro) {
        if (id) {
            this.id     = id;    
        }        
        this.cliente    = cliente;
        this.tipo       = tipo;
        this.saldo      = saldo;
        this.sobregiro  = sobregiro;
    }
    //Funcion encargada de Mapear los campos de la base de datos en el orden que estan segun la super clase, con el fin de enmascarar los campos de la base de datos
    static mapFactory(entity){
        let mp = {};
        if(entity){
            mp = new Cuenta(
                entity.id_cuenta,
                entity.id_cliente,
                entity.tipo_cuenta,
                entity.saldo_cuenta,
                entity.saldo_sobregiro,
            );
        }        
        return mp;
    }
    //Funcion que consulta un registro segun el id de la base de datos
    static consultarCuenta(id, callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+' ';
        query += 'WHERE '+table.fields.id+'='+id+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let cuenta = Cuenta.mapFactory(result[0]);                                                                                          
                    console.log(cuenta);                          
                    callback(null,cuenta);
                }
            })
        }else{
            throw "Problema conectado con Mysql en consultarCuenta";
        } 
    }
    //Funcion encargada de consultar todos los registros de la base de datos
    static consultarCuentas(callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let cuentas = [];
                    for(let entity of result){
                        let cuenta = Cuenta.mapFactory(entity);                        
                        cuentas.push(cuenta);
                    }                                              
                    console.log(cuentas);                          
                    callback(null,cuentas);
                }
            })
        }else{
            throw "Problema conectado con Mysql";
        } 
    }
}

module.exports = Cuenta;