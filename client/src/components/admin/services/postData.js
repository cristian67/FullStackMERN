import axios from 'axios';
import Swal from 'sweetalert2';



//===============================
//  Login
//===============================
export async function postData(datosLogin){
const url = '/api/login';
return await axios.post(url, datosLogin)
             .then(  res => {return Promise.resolve(res.data)})
             .catch( err => {console.log('No tienes permisos');
             })   
}         


//===============================
//  Crear Producto
//===============================
export async function postCrearProducto(fd, config){

  const url = '/api/crear/producto';
  
  await axios.post(url, fd, config)
  .then(  res => {
      console.log(res);
      Swal(
        'Producto creado!',
        'Se ha agregado el registro!',
        'success'
      ) 
  })
  .catch(err => { Swal('No seleccionaste ninguna imagen '); console.log(err)})   
 }         


//===============================
//  Editar Producto
//===============================
export async function editarProducto(datosProducto, config, id){

  const url = `/api/producto/${id}`;
  
  await axios.put(url, datosProducto, config)
  .then(  res => {
    Swal({
        title: 'Estas seguro?',
        text: "Se va a actualizar el registro",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, actualizar!'
      }).then((result) => {
        if (result.value) {
          Swal(
            'Actualizado',
            'El producto ha sido actualizado.',
            'success'
          )
        }
      })
      console.log(res);
  })
  .catch( err => { Swal('ERROR DE PERMISOS'); console.log(err)})   
 }    


//===============================
//  Editar Imagen Producto
//===============================
export async function editarImagenProducto(fd, config, id){

  const url = `/api/upload/file/producto/${id}`;
  
  await axios.put(url, fd, config)
  .then(  res => {
    Swal({
        title: 'Estas seguro?',
        text: "Se va a actualizar la imagen del registro",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, actualizar!'
      }).then((result) => {
        if (result.value) {
          Swal(
            'Actualizado',
            'El producto ha actualizado su imagen.',
            'success'
          )
        }
      })
      console.log(res);
  })
  .catch( err => { Swal('No seleccionaste ninguna imagen'); console.log(err)}) 
 }    


//===============================
//  Crear Categoria
//===============================
export async function postCrearCategoria(fd, config){

    const url = '/api/crear/categoria';
    
    await axios.post(url, fd, config)
    .then(  res => {
        Swal(
          'Categoria creada!',
          'Se ha agregado el registro!',
          'success'
        )
      console.log(res);

    })
    .catch(err => { Swal('Aqui viene el error ql'); console.log(err)})   
   
}    

//===============================
//  Editar Categoria
//===============================
export async function editarCategoria(datosCategoria, config, id){

    const url = `/api/categoria/${id}`;
    
    await axios.put(url, datosCategoria, config)
    .then(  res => {
      Swal({
          title: 'Estas seguro?',
          text: "Se va a actualizar el registro",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, actualizar!'
        }).then((result) => {
          if (result.value) {
            Swal(
              'Actualizado',
              'La categoria ha sido actualizada.',
              'success'
            )
          }
        })
        console.log(res);
    })
    .catch( err => { Swal('ERROR DE PERMISOS'); console.log(err)})   
   }    


//===============================
//  Editar Imagen Categoria
//===============================
export async function editarImagenCategoria(fd, config, id){

    const url = `/api/upload/file/categoria/${id}`;
    
    await axios.put(url, fd, config)
    .then(  res => {
      Swal({
          title: 'Estas seguro?',
          text: "Se va a actualizar la imagen del registro",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, actualizar!'
        }).then((result) => {
          if (result.value) {
            Swal(
              'Actualizado',
              'El producto ha actualizado su imagen.',
              'success'
            )
          }
        })
        console.log(res);
    })
    .catch( err => { Swal('No seleccionaste ninguna imagen'); console.log(err)}) 
   }    
  


