import React,{Component} from 'react';
import NavegationAdmin from '../navegation/NavegationAdmin';
import { editarCategoria, editarImagenCategoria } from '../services/postData';
import Swal from 'sweetalert2';


//Token headers
const config = {headers: { 
    'Content-Type': 'application/json',
    'token': localStorage.token 
}}

class EditarCategoria extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
            Categoria:''
        };

        // crear los refs
        this.nombreRef    = React.createRef();
     
    }


    //===============================
    //  Editar parametros
    //===============================
    EditarCategoria = (e) => {
        e.preventDefault();

        //crear objecto
        const categoria = {
            descripcion: this.nombreRef.current.value,
            disponible: true
        }

        //peticion
        const id = this.props.categoria._id;
        editarCategoria(categoria, config, id);
        
   }

   
    //===============================
    //  Actualizar State file
    //===============================
    fileSelectedHandler = event => {
        
    this.setState({
           selectedFile: event.target.files[0]
        });
    }


    //===============================
    //  Subir archivo de imagen
    //===============================
    uploadFile = () => {

    const id = this.props.categoria._id;

    if(this.state.selectedFile && this.state.selectedFile.name && id) 
    {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile);
        
        //CAMBIAR IMAGEN
        editarImagenCategoria(fd, config, id);

        } else {
            Swal('No seleccionaste ninguna imagen');
            console.log("No seleccionaste ninguna imagen");  
        }
    }


    render() {
        
        if(!this.props.categoria) {return null;}
        const {descripcion, img} = this.props.categoria;

        return (
            <React.Fragment>
            <NavegationAdmin />
               <p></p>
               <div className="container">
               <div className="row">
               <div className="card-panel #90caf9 blue lighten-3">
                   <h4 className="center-align">Editar Categoria</h4>
               </div>

               <div className="card-panel #212121 grey darken-4">
                       <form onSubmit={this.EditarCategoria}>
                            <div className="input-field col s12">
                               <span htmlFor="nombre">Nombre de la categoria: </span>
                               <input ref={this.nombreRef} id="nombre" type="text" className="validate" defaultValue={descripcion} />
                            </div>  

                           <div className="center-align">
                               <button type="submit" className="btn light-blue darken-5 btn-large">Actualizar</button>
                           </div>
                       </form>
                   </div>

                   <div className="row">
                   <div className="card-panel #4dd0e1 cyan lighten-2">
                        <h4 className="center-align">Cambiar la imagen de categoria </h4>
                   </div>

                   <div className="card-panel #212121 grey darken-4 center-align">
                        <img src={`/upload/categoria/${img}`} alt={descripcion} height="150" width="250"></img>
                        <hr></hr>
                            <div className="col s12">
                                <input onChange={this.fileSelectedHandler} required="" aria-required="true" type="file" id="avatar" name="avatar"/>
                            </div>
                        <br></br>
                        <hr></hr>
                        <div className="center-align">
                               <button type="submit" onClick={this.uploadFile} className="btn waves-effect waves-light #b71c1c red">Cambiar Imagen</button>
                        </div> 
                        </div>
                    </div>  
               </div>
           </div>
          </React.Fragment>
        );
    }
}

export default EditarCategoria;