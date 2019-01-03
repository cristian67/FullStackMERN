import React, { Component } from 'react';
import axios from 'axios';

import { Parallax} from 'react-parallax';


/*Importar Componentes */
import Navegacion from '../navegation/Navegacion';
import Footer from '../footer/Footer';
import Swal from 'sweetalert2';



/*estilos*/
import '../../css/animate.css';
import './contacto.css';



class Contacto extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            asunto: '',
            msj: ''
        }

        this.emailRef   = React.createRef();
        this.mensajeRef = React.createRef();
        this.asuntoRef  = React.createRef();
    }

  


    enviarMail = (e) => {

    e.preventDefault();

    this.setState({
        email: this.emailRef.current.value,
        asunto: this.asuntoRef.current.value,
        msj: this.mensajeRef.current.value
    })

    if(!this.state.email){
        Swal('No completaste tu email correctamente');
        return;
    }

    if(!this.state.msj){
        Swal('No completaste el mensaje');
        return;
    }
    
    Swal({
        title: 'Estas seguro con tú mensaje?',
        text: "recibiremos tus consultas, pronto estaremos en contacto...",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero enviarlo!'
      }).then((result) => {
        if (result.value) {
            axios.get(`/api/mail/${this.state.email}/${this.state.asunto}/${this.state.msj}`)
                    .then(res=>{console.log(res.data)})
                    .catch(err => {  Swal('A ocurrido un error, lo sentimos. Intenta ubicarnos en wsp'); console.log(err)})
            Swal(
                'Mensaje',
                'El mensaje se ha enviado.',
                'success'
            )
        }
      })

    }


    //=======================================
    //  DETECTAR TECLADO, PARA NO ENVIAR NULL
    //=======================================
    emailSelectedHandler = event => {
        this.setState({
               email: event.target.value
            });
        }
    
    mensajeSelectedHandler = event => {
        this.setState({
                msj: event.target.value
            });
        }
    

    render(){
        return(
        <React.Fragment>
       
            <Navegacion />
             {/*CONTACTO*/}
             <Parallax
                    blur={1}
                    bgImage={('/img/contact.jpg')}
                    bgImageAlt="the cat"
                    strength={300}
                >
                <div className="container">
                    <div className="row">

                        <div className="col s12 center-align white-text ">
                            <div className="card-panel #212121 grey darken-4 panel-contact">             
                                <form onSubmit={this.enviarMail}>
                                            <div className="row">
                                                <div className="col s12 m6 l6">
                                                    <div className="input-field"> 
                                                        <input ref={this.emailRef} type="email" className="validate" onChange={this.emailSelectedHandler} />
                                                        <label htmlFor="email">Tú email</label>
                                                    </div>
                                            
                                                
                                                    <div className="input-field "> 
                                                        <input ref={this.asuntoRef} type="text" className="validate" />
                                                        <label htmlFor="asunto">Asunto</label>
                                                    </div>
                                            
                                            
                                                    <div className="input-field">
                                                        <textarea ref={this.mensajeRef} id="textarea" className="materialize-textarea" onChange={this.mensajeSelectedHandler} ></textarea>
                                                        <label htmlFor="textarea">Escribe tu mensaje</label>
                                                    </div>
                                               
                                            
                                                    <div className="center-align">
                                                        <button type="submit" className="btn light-blue darken-5">Enviar</button>
                                                    </div>
                                                </div> 

                                                <div className="col s12 m6 l6 hide-on-med-and-down">
                                                    <h4>Puedes realizar consultas mediante Whatsapp</h4>
                                                    <h6>Número de contacto Whatsapp:</h6>
                                                    <br></br>
                                                    <div className="wsp card-panel #00c853 green accent-4"><i class="fab fa-whatsapp"></i> +569 542 42 42</div>
                                                </div>

                                                <div className="col s12 m6 l6 hide-on-large-only hide-on-small-only">
                                                    <h5>Puedes realizar consultas mediante Whatsapp</h5>
                                                    <h6>Número de contacto Whatsapp:</h6>
                                                    <br></br>
                                                    <div className="wsp card-panel #00c853 green accent-4"><i class="fab fa-whatsapp"></i> +569 542 42 42</div>
                                                </div>

                                                <div className="col s12 m6 l6 hide-on-med-and-up">
                                                    <h5>Puedes realizar consultas mediante Whatsapp</h5>
                                                    <h6>Número de contacto Whatsapp:</h6>
                                                    <br></br>
                                                    <div className="wsp card-panel #00c853 green accent-4"><i class="fab fa-whatsapp"></i>+569 542 42 42</div>
                                                </div>
                                        </div>   
                                </form>
                                    
                            </div>
                        <div style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
                </Parallax>

                <Footer />

        </React.Fragment>


        );
    }
}

export default Contacto;
 

                

