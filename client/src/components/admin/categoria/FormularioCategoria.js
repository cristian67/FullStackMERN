import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {postCrearCategoria} from '../services/postData';
import NavegationAdmin from '../navegation/NavegationAdmin';
import Swal from 'sweetalert2';

//Token headers
const config = {headers: { 
     'Content-Type': 'application/json',
     'token': localStorage.token 
 }}

class FormularioCategoria extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
            categoria:''
        };

        // crear los refs
        this.nombreDescripcionRef = React.createRef();
    }

    
    //===============================
    //  Crear Categoria
    //===============================
     crearCategoria = (e) => {
        e.preventDefault();
     
        //Construir FormData
        const fd = new FormData();
        fd.append('descripcion', this.nombreDescripcionRef.current.value);
        fd.append('image', this.state.selectedFile);

     
        if(this.state.selectedFile && this.state.selectedFile.name)    
          {  
           postCrearCategoria(fd,config);
            
        } else {
            Swal('No seleccionaste ninguna imagen')
                console.log("No hay imagen cargada");
          }
          
     }

     //===============================
     //  Subir archivo de imagen
     //===============================
     fileSelectedHandler = event => {
         this.setState({
            selectedFile: event.target.files[0]
         });
     }

 
     render() { 
          return ( 
           <React.Fragment>
            <NavegationAdmin />
               <p></p>
               <div className="container">
               <div className="row">
               <div className="card-panel">
                   <h4 className="center-align">Crear Categoria</h4>
               </div>

               <div className="card-panel">
                       <form onSubmit={this.crearCategoria}>
                            <div className="input-field col s12">
                               <input ref={this.nombreDescripcionRef} id="nombre" type="text" className="validate" />
                               <label htmlFor="nombre">Nombre de Categoria</label>
                            </div>  
                            <br></br>
                      
                            <div className="col s12">
                                <input onChange = {this.fileSelectedHandler} required="" aria-required="true" type="file" id="avatar" name="avatar"/>
                            </div>

                            <br></br>
                            <br></br>
                            <p></p>
                            <br></br>

                           <div className="center-align">
                               <button type="submit" className="btn light-blue darken-5">Crear</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
          </React.Fragment>
           );
     }
}
 
export default FormularioCategoria;