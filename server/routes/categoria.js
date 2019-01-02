const express = require('express');
const app = express();

const Categoria = require('../models/categoria');

let { verificaToken, verificaAdmin_Role } = require('../../server/middleware/autenticacion');



//===============================
//Mostrar las categorias (Todas)
//==============================
app.get('/categoria', (req, res) => {

    Categoria.find({})
        .sort('descripcion')
        .exec((err, categoriaDB) => {
            //Error Servicio de base de datos
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            //Respuesta correcta
            res.json({
                ok: true,
                categoria: categoriaDB
            });
        });

});

//==========================
//Buscar categoria por id
//==========================
app.get('/categoria/:id', (req, res) => {

    let id = req.params.id
    Categoria.findById(id, (err, categoriaDB) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe categoria'
                }
            });
        }
        //Respuesta correcta
        res.json({
            ok: true,
            categoria: categoriaDB
        });

    })

});



//==========================
//Crear una categoria
//==========================
app.post('/crear/categoria', verificaToken, (req, res) => {

    let body = req.body;

     //ERROR
     if (Object.keys(req.files).length == 0) {
        return res.status(400).json({
            ok: false,
            err: {
                messsage: "No se a encontrado archivo"
            }
        })
    }

     //VALIDAR EXTENSIONES
     let archivo = req.files.image;

     //Obtener el nombre del Archivo
     let nombreCortado = archivo.name.split('.');
     //obtener ultima posicion
     let extensionArchivo = nombreCortado[nombreCortado.length - 1];
  
     let extencionesValindas = ['png', 'jpg', 'gif', 'jpeg', 'JPG', 'PNG'];
      
     if (extencionesValindas.indexOf(extensionArchivo) < 0) {
         return res.status(400).json({
             ok: false,
             err: {
                 messsage: "Extensiones permitidas:" + extencionesValindas.join(', '),
                 ext: extensionArchivo
             }
         });
     }


    //CAMBIAR NOMBRE ARCHIVO
    let nombreArchivo = `${nombreCortado[0]}-${new Date().getSeconds()}-${new Date().getMilliseconds()}.${extensionArchivo}`;
    

    //SUBIR ARCHIVO Y GUARDAR
    archivo.mv(`client/public/upload/categoria/${nombreArchivo}`, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        let categoria = new Categoria({
            descripcion: body.descripcion,
            usuario: req.usuario._id,
            img:nombreArchivo
        });


        //Guardad
        categoria.save((err, categoriaDB) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe categoria'
                }
            });
        }
        //Respuesta correcta
        res.json({
            ok: true,
            categoria: categoriaDB,
            img: nombreArchivo

        });
    });
    });
});


//==========================
//Actualizar categoria
//==========================
app.put('/categoria/:id', verificaToken, (req, res) => {
    //obtener id
    let id = req.params.id;
    let body = req.body;

    //Objeto que se va a actualizar
    let desCategoria = {
        descripcion: body.descripcion
    };


    //Actualizar por id
    Categoria.findByIdAndUpdate(id, desCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        //respuesta
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });

});


//==========================
//Eliminar categoria
//==========================
app.delete('/categoria/:id', verificaToken, verificaAdmin_Role, (req, res) => {

    let id = req.params.id;

    Categoria.findByIdAndRemove(id, (err, categoriaDelete) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDelete) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'el id no existe'
                }
            });
        }
        //Respuesta borrado
        res.json({
            ok: true,
            message: 'categoria borrada'
        });

    })
});


module.exports = app;