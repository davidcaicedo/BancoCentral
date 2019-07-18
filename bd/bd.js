const mysql = require('mysql');
// Creamos la clase de conexion para este caso es MYSQL
class DB{
    constructor(){
        if( !DB.instancia ){
            DB.instancia = this;

            // Agregamos los parámetros de conexión
            this.connection = mysql.createConnection({
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : ''
            });

            // conectamos y manejamos la conexion con throw
            this.connection.connect((err) => {
                if (err) throw err    
                console.log( 'Fallo la cone' );
            });
            console.log( 'Entró a conectar' );
        }

        // Si existe la instancia, que la retorne
        console.log( 'Encontró una instancia de conexión.' );
        return DB.instancia;
    }
}

// Instanciamos la base de datos
const instancia = new DB();
// Freeze por seguridad, para que no se puedan modificar las variables
Object.freeze( instancia );

module.exports = instancia;