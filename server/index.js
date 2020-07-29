//importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');


//configurar express
const app = express()

//habilitar pug 
app.set('view engine','pug');

//añadir las vistas 
app.set('views',path.join(__dirname,'/views'));

//archivos Estaticos
app.use(express.static('public'));

//validar si estamamos en desarrollo o produccion
const config = configs[app.get('env')];
//crear variables para sitio
app.locals.titulo = config.nombreSitio

//muestra el año actual para footer
app.use((req,res,next)=>{
    //crear una fecha
    const fecha = new Date();
    //guardar fecha en local
    res.locals.fechaActual = fecha.getFullYear();
   
    return next();

})


//cargar rutas
app.use('/',routes());

//puerto 
app.listen(3000);