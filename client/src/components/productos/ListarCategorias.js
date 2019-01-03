import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListarCategorias extends Component {



render(){
  const {_id, descripcion, img} = this.props.info;  
    return(
        <React.Fragment>
          

            <div class="col s12 m6 lg6">
              <div class="card">
                <div class="card-image">
                  <img src={`/upload/categoria/${img}`} alt={descripcion}/>
                  <span class="card-title"> <h3>{descripcion}</h3></span>
                </div>
                <div class="card-action">
                <Link className="btn waves-effect" to={`categoria/${_id}/productos`} type="button">Ver Más  <i class="material-icons right">send</i></Link>
                </div>
              </div>
            </div>
            
        </React.Fragment>    
    );
  }
}
export default ListarCategorias;