import React, { Component } from 'react';



class SingleProducto extends Component {

    render(){

        return(
            <div className="col s5">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src={`/upload/categoria/${img}`} alt={_id}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{descripcion}<i className="material-icons right">more_vert</i></span>
                  <Link className="btn waves-effect waves-light" to={`categoria/${_id}/productos`} type="button">Ver Más  <i class="material-icons right">send</i></Link>
                  </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{descripcion}<i className="material-icons right">close</i></span>
                </div>
            </div> 
          </div>
        )
    }
}

export default SingleProducto;