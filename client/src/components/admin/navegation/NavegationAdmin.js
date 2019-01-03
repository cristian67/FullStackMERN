import React, {Component} from 'react';
import {NavLink , Link, Redirect} from 'react-router-dom';



class NavegacionAdmin extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
      }

      //Funciones
      this.logout = this.logout.bind(this);

    }  

    componentWillMount(){
        if(localStorage.getItem('dataUser'))
        {
            console.log("Call user Feed");
        }
        else{
            this.setState({
                redirect: true
            })
        }
    }

    logout(){
        localStorage.setItem('dataUser', '');
        localStorage.clear();
        this.setState({
            redirect: true
        })
    }

  

    render(){
        if(this.state.redirect)
        {
            return (<Redirect to={'/login'} />);
        }
        return(        
        <div className="navbar-fixed">
            <nav className="nav-wrapper #fafafa grey lighten-5">
                <div className="container">
                    <Link className="brand-logo" to={`/`}> <img className="logo-lm" src="/img/logo/logo_LM.png"/>  </Link>
                    <Link to={`#`} data-target="menu-responsive" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>


                    <ul className="right hide-on-med-and-down #212121 grey darken-4">
                        <li><NavLink to={`/admin/categoria`} activeClassName='activo' > Categorias </NavLink></li>
                        <li><NavLink to={`/admin/producto`} activeClassName='activo'>  Productos </NavLink></li>
                        <li><a className=" #f44336 red " type="button" onClick={this.logout}>Logout</a></li>
                    </ul>

                </div>

                <ul id="menu-responsive" className="sidenav #e3f2fd blue lighten-5">
                        <li><NavLink to={`/admin/categoria`} activeClassName='activo' > Categorias </NavLink></li>
                        <li><NavLink to={`/admin/producto`} activeClassName='activo'>  Productos </NavLink></li>
                </ul>
            </nav>
        </div>
        );
    }
}
export default NavegacionAdmin;
