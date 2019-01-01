import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Producto extends Component {

     confirmarEliminacion = () => {

          const {_id} = this.props.info;

          this.props.borrarProducto(_id);
          
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