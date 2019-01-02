import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


class Producto extends Component {

     confirmarEliminacion = () => {

          const {_id} = this.props.info;

          Swal({
               title: 'Estas seguro?',
               text: "El registro se borrará ... ",
               type: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
             }).then((result) => {
               if (result.value) {
                 this.props.borrarProducto(_id);
                 Swal(
                   'Eliminado!',
                   'El registro se ha borrado',
                   'exito'
                 )
               }
             })

          
     }

     render() { 
     
      const {nombre,precioUni,img,_id} = this.props.info;
      
          return (
               <tr>
                    <td>{nombre}</td>
                    <td>${precioUni}</td>
                    <td><img src={`/upload/producto/${img}`} alt={nombre} height="90" width="120"></img></td>
                    <td>
                         <Link to={`/admin/producto/editar/${_id}`} className="btn waves-effect waves-light #283593 blue"> Editar </Link>
                         <button onClick={this.confirmarEliminacion} type="button" className="btn waves-effect waves-light #b71c1c red"> Borrar </button>
                    </td>
               </tr>
           );
     }
}
 
export default Producto;