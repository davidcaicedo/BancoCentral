module.exports = (app) => {

// Funciones que responden a los metodos http
app.get('/', function(req, res){
    let persona = {
        'nombre':'David',
        'edad':'29'
    };
    res.send(persona);
});
};

