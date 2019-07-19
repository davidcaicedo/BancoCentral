const db = require('../../bd/bd');//Impostamos conexion a la base de datos
const sql = db.connection;//Instanciamos conexion para usar con las consultas

//Creamos un objeto de la tabla para proteger y enmascarar los nombres de la base de datos
const table = {
    name    :"transacciones",    
    fields  : {
        id          :   "id_transaccion",
        cliente     :   "id_cliente",
        cuenta      :   "id_cuenta",
        tipo        :   "tipo_transaccion",
        valor       :   "valor_transaccion"
    }
}
//Creamos la clase para empezar a crear las respectivas funcionalidades.
class Transaccion {
    //PAsamos las variables globales por referencia
    constructor(id,cliente,cuenta,tipo,valor) {
        if (id) {
            this.id     = id;    
        }        
        this.cliente    = cliente;
        this.cuenta     = cuenta;
        this.tipo       = tipo;
        this.valor      = valor;
    }
    //Funcion encargada de Mapear los campos de la base de datos en el orden que estan segun la super clase,
    // con el fin de enmascarar los campos de la base de datos
    static mapFactory(entity){
        let mp = {};
        if(entity){
            mp = new Transaccion(
                entity.id_transaccion,
                entity.id_cliente,
                entity.id_cuenta,
                entity.tipo_transaccion,
                entity.valor_transaccion,
            );
        }        
        return mp;
    }
    //Funcion que consulta un registro segun el id de la base de datos
    static consultarTransaccion(id, callback) {
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
                    let transaccion = Transaccion.mapFactory(result[0]);                                                                                          
                    console.log(transaccion);                          
                    callback(null,transaccion);
                }
            })
        }else{
            throw "Problema conectado con Mysql en consultarTransaccion";
        } 
    }
    //Funcion encargada de consultar todos los registros de la base de datos
    static consultarTransacciones(callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let transacciones = [];
                    for(let entity of result){
                        let transaccion = Transaccion.mapFactory(entity);                        
                        transacciones.push(transaccion);
                    }                                              
                    console.log(transacciones);                          
                    callback(null,transacciones);
                }
            })
        }else{
            throw "Problema conectado con Mysql";
        } 
    }
}

module.exports = Transaccion;