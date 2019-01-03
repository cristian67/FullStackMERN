import React, { Component } from 'react';
import {Redirect ,  withRouter, Link} from 'react-router-dom';
import NavegationAdmin from '../navegation/NavegationAdmin';
import ListadoCategoria from './ListadoCategoria';

class AdminCategoria extends Component {
  

    render(){
     
        return(
            <React.Fragment>
                <NavegationAdmin />
                <br></br>
                <div className="col s12 md8 lg8 center-align">
                    <h2 className="text-center">Categoria</h2>
                    <Link to={`/admin/categoria/crear`} className="btn waves-effect waves-light btn-large"> Crear </Link>

                    <ListadoCategoria
                         categorias ={this.props.categorias}
                         borrarCategoria={this.props.borrarCategoria}
                    />

               </div>

            </React.Fragment>
        )
    }
}

export default withRouter(AdminCategoria);
