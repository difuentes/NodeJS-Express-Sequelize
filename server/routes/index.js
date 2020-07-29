//importar express
const express = require('express');
//importar router
const router = express.Router();

module.exports = function(){


    router.get('/',(req,res) =>{
        res.render('index');
    })
    
    router.use('/nosotros/',(req,res) =>{
        res.render('nosotros',{
            pagina :'Sobre Nosotros'
        });
    })
    
    return router;

}