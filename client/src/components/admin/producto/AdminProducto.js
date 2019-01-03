import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import NavegationAdmin from '../navegation/NavegationAdmin';
import ListadoProducto from '../producto/ListadoProducto'; 

class AdminProducto extends Component {
  
  
  
    render(){
      

        return(
            <React.Fragment>
                <NavegationAdmin />
                <br></br>
                <div className="col s12 md8 lg8 center-align">
                    <h2 className="text-center">Productos</h2>
                    <Link to={`/admin/producto/crear`} className="btn waves-effect waves-light btn-large"> Crear </Link>
 
                    <ListadoProducto 
                         productos ={this.props.productos}
                         borrarProducto={this.props.borrarProducto}
                    />
               </div>

            </React.Fragment>
        )
    }
}

export default AdminProducto;
