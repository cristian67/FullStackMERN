import React from 'react';
import './Footer.css';

const Footer = () => {
    return(


      <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text"></h5>
            <img src={`/img/logo/logo_lalymania_vf.png`} alt="logo" width="220px" height="180px"/>
            <p className="grey-text text-lighten-4">Gracias por tu visita! <i class="fas fa-smile-wink"></i></p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Encuentrame en mis Redes Sociales: </h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!"><i class="fab fa-instagram"></i> Instragram </a></li>
              <li><a className="grey-text text-lighten-3" href="#!"><i className="fab fa-facebook-f"></i> Facepage </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2019 Copyright
        <div className="grey-text text-lighten-4 right"><i class="fab fa-whatsapp"></i> +569 542 42 42</div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
