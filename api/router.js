module.exports = (app) => {

    // Funciones que responden a los metodos http
        app.get('/', function(req, res){
            let persona = {
                'nombre' : 'David',
                'edad'   : '29'
            };
            res.send( persona );
        });
    
        app.post('/personas', (req, res) =>{
            let nombre = req.body.nombre;
            let edad = req.body.edad;
            let miPersona = {
                'elNombre' : nombre,
                'laEdad'   : nombre,
            };
    
            res.send( miPersona );
    
        });
    };
    
    