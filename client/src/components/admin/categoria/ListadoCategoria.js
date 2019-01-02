import React, { Component } from 'react';
import Categoria from './Categoria';

class ListadoCategoria extends Component {
     mostrarCategoria = () => {
          const categorias = this.props.categorias;

          if(categorias.length === 0) return null;

          return (
               <React.Fragment>
                    {Object.keys(categorias).map(categoria => (
                         <Categoria
                              key={categoria}
                              info={this.props.categorias[categoria]}
                              borrarCategoria={this.props.borrarCategoria}                              
                         />
                    ))}
               </React.Fragment>
          )
     }


     render() { 
          return (
               <table className="table">
                    <thead>
                         <tr> 
                              <th scope="col">Nombre</th>
                              <th scope="col">Imagen</th>
                              <th scope="col">Acciones</th>
                         </tr> 
                    </thead>
                    <tbody>
                           {this.mostrarCategoria() }
                    </tbody>
               </table>
           )
     }
}
 
export default ListadoCategoria;