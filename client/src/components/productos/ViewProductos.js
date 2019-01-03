import React, {Component} from 'react';

class ViewProductos extends Component {



render(){
    const {nombre, precioUni, img} = this.props.producto;
    
    return(
        <React.Fragment>
             <p></p>
            <div class="col s12 m8 offset-m2 l12 hide-on-med-and-down">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s12">
                    <img src={`/upload/producto/${img}`} alt={nombre} class="circle responsive-img"/>
                    </div>
                    <div class="col s10">
                    <span class="black-text">
                            <h2>{nombre} </h2>
                            <hr></hr>
                            <h5>Precio : ${precioUni} </h5>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div class="col s12 m12 hide-on-large-only hide-only">
              <div class="card">
                <div class="card-image">
                  <img src={`/upload/producto/${img}`} alt={nombre}/>
                  <span class="card-title"> 
                        <h3>{nombre}</h3>
                        <hr></hr>
                        <h6>Precio : ${precioUni} </h6>
                  </span>
                </div>
              </div>
            </div>

        </React.Fragment>    
    );
  }
}
export default ViewProductos;
