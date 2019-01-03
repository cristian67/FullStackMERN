import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

/*Shared*/
import '../css/cargando.css';


/*Componentes publicos*/
import Productos from './productos/Productos';
import Categorias from './productos/Categorias';
import CategoriaProductos from './productos/CategoriaProductos';
import Home from './Home';
import Contacto from './contacto/contacto';


/*Componentes privados: Login*/
import TestLogin from './admin/login/TestLogin'; 

/*Componentes privados: Producto*/
import AdminProducto from  './admin/producto/AdminProducto';
import FormularioProducto from './admin/producto/FormularioProducto';
import EditarProducto from './admin/producto/EditarProducto';

/*Componentes privados: Categoria*/
import AdminCategoria from './admin/categoria/AdminCategoria';
import FormularioCategoria from './admin/categoria/FormularioCategoria';
import EditarCategoria from  './admin/categoria/EditarCategoria';




//Token headers
const config = {headers: { 
     'Content-Type': 'application/json',
     'token': localStorage.token 
 }}

class Router extends Component {
     
     constructor(){
          super();
          this.state = {
               categorias: [],
               productos:[],
               cargando: false,
               error:''
           }

     }
     
      componentDidMount() {
           this.obtenerCategoria();
           this.obtenerProducto();
      }


     //============================
     //  Obtener todos los productos
     //============================
     obtenerProducto = async () => {
          await axios.get(`/api/producto`)
               .then(res => {                    
                    this.setState({
                         productos: res.data.productos,
                         cargando: true
                    })

                    setTimeout(() => {
                         this.setState({
                         cargando: false
                         });
                    }, 3000); 
               });
               
     }
     

     //================================
     //  Obtener todas las categoria
     //================================
     obtenerCategoria = () => {
          axios.get(`/api/categoria`)
               .then(res => {
                    this.setState({
                         categorias: res.data.categoria
                    })

                    setTimeout(() => {
                         this.setState({
                         cargando: false
                         });
                    }, 2000); 
               })
     }


     //================================
     // Borrar Producto
     //================================
     borrarProducto = async (id) => {
          
          const url = `/api/producto/${id}`;
          await axios.delete(url, config)
                     .then(res => {console.log(res);})
                     .catch(err=>{console.log("No tienes permiso")})

     }

     //================================
     // Borrar Producto
     //================================
     borrarCategoria = async (id) => {
          
          const url = `/api/categoria/${id}`;
          await axios.delete(url, config)
                     .then(res => {console.log(res);})
                     .catch(err=>{console.log("No tienes permiso")})

     }

     render() {
          /*cargando pagina animacion*/
          const cargando = this.state.cargando;
          const token    = this.state.token;
          const err      = this.state.error;
          let resultado;
          let resultado_categoria;
          let resultado_producto;
          if(cargando){
               resultado_categoria = <div className="sk-circle animated fadeIn delay-0.5s">
                                        <div className="sk-circle1 sk-child"></div>
                                        <div className="sk-circle2 sk-child"></div>
                                        <div className="sk-circle3 sk-child"></div>
                                        <div className="sk-circle4 sk-child"></div>
                                        <div className="sk-circle5 sk-child"></div>
                                        <div className="sk-circle6 sk-child"></div>
                                        <div className="sk-circle7 sk-child"></div>
                                        <div className="sk-circle8 sk-child"></div>
                                        <div className="sk-circle9 sk-child"></div>
                                        <div className="sk-circle10 sk-child"></div>
                                        <div className="sk-circle11 sk-child"></div>
                                        <div className="sk-circle12 sk-child"></div>
                                      </div>
               resultado_producto =  <div className="sk-circle animated fadeIn delay-0.5s">
                                        <div className="sk-circle1 sk-child"></div>
                                        <div className="sk-circle2 sk-child"></div>
                                        <div className="sk-circle3 sk-child"></div>
                                        <div className="sk-circle4 sk-child"></div>
                                        <div className="sk-circle5 sk-child"></div>
                                        <div className="sk-circle6 sk-child"></div>
                                        <div className="sk-circle7 sk-child"></div>
                                        <div className="sk-circle8 sk-child"></div>
                                        <div className="sk-circle9 sk-child"></div>
                                        <div className="sk-circle10 sk-child"></div>
                                        <div className="sk-circle11 sk-child"></div>
                                        <div className="sk-circle12 sk-child"></div>
                                     </div> 
               resultado =         <div className="sk-circle animated fadeIn delay-0.5s">
                                      <div className="sk-circle1 sk-child"></div>
                                      <div className="sk-circle2 sk-child"></div>
                                      <div className="sk-circle3 sk-child"></div>
                                      <div className="sk-circle4 sk-child"></div>
                                      <div className="sk-circle5 sk-child"></div>
                                      <div className="sk-circle6 sk-child"></div>
                                      <div className="sk-circle7 sk-child"></div>
                                      <div className="sk-circle8 sk-child"></div>
                                      <div className="sk-circle9 sk-child"></div>
                                      <div className="sk-circle10 sk-child"></div>
                                      <div className="sk-circle11 sk-child"></div>
                                      <div className="sk-circle12 sk-child"></div>
                                   </div>                      
          } else {

               resultado =  <div className="animated fadeIn delay-0.5s"><Home /> </div>
               resultado_categoria =  <Categorias categorias = {this.state.categorias} />   
               resultado_producto =  <Productos productos = {this.state.productos} />
          } 


        
          return (
               <BrowserRouter>

                              <Switch>

                                       {/* HOME - Categorias */}
                                      <Route exact path="/" render={ () => {
                                            return(
                                                  <React.Fragment>
                                                       {resultado}
                                                  </React.Fragment>     
                                            );
                                       }} />
                                   
 
                                        {/* Por Categoria */}
                                      <Route exact  path="/categoria" render={ (props) => {
                                           return(
                                             <React.Fragment>
                                                  <div className="animated fadeIn delay-0.3s">
                                                       {resultado_categoria} 
                                                  </div>
                                              </React.Fragment>
                                          
                                           )
                                       }} />


                                        {/* Por Categoria ID Producto */}
                                      <Route exact  path="/categoria/:idCategoria/productos" render={ (props) => {
                                           let idCategoria = props.location.pathname.replace('/categoria/','');  
                                           return(
                                              <React.Fragment>
                                                  <div className="animated fadeIn delay-0.3s">
                                                   <CategoriaProductos 
                                                       idCategoria = {idCategoria}
                                                   />
                                                   </div>
                                              </React.Fragment>
                                           )
                                       }} />
                                        
                                       {/*Todos los productos */}
                                        <Route exact  path="/producto" render={ (props) => {
                                           return(
                                             <React.Fragment>
                                                  <div className="animated fadeIn delay-0.3s">
                                                       {resultado_producto}
                                                  </div>
                                             </React.Fragment>
                                           )
                                       }} />

                                        {/* CONTACTO */}
                                        <Route exact  path="/contacto" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <Contacto />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />


                                        
                                         {/* Login */}
                                         <Route exact  path="/login" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <TestLogin />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />
               
                                           

                                         {/*                PRODUCTOS 
                                             Producto ADMIN acceso al home de productos 
                                             
                                        */}
                                         <Route exact  path="/admin/producto" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <AdminProducto 
                                                                 productos = {this.state.productos}
                                                                 borrarProducto = {this.borrarProducto}
                                                            />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />


                                         {/* Producto ADMIN Crear */}
                                        <Route exact path="/admin/producto/crear" render={ () => {
                                            return(
                                                <FormularioProducto 
                                                    categorias = {this.state.categorias}
                                                />
                                            )
                                        }} />


                                        {/* Producto ADMIN Actualizar */}
                                        <Route exact path="/admin/producto/editar/:productoId" render={ (props) => {
                                             
                                             let idProducto = props.location.pathname.replace('/admin/producto/editar/', '');
                                          
                                             const productos = this.state.productos;
                                             
                                             let filtro
                                             filtro = productos.filter(    producto => (
                                                            producto._id == idProducto
                                             ))
                                                                
                                             return(
                                                  <EditarProducto 
                                                       producto = {filtro[0]}
                                                       categorias = {this.state.categorias}
                                                  />
                                             );
                                        }}
                                        />


                                        {/*                CATEGORIAS 
                                             Producto ADMIN acceso al home de productos 
                                             
                                        */}
                                        <Route exact  path="/admin/categoria" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <AdminCategoria  
                                                                 categorias = {this.state.categorias}
                                                                 borrarCategoria = {this.borrarCategoria}
                                                            />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />

                                        {/* Producto ADMIN Crear */}
                                        <Route exact path="/admin/categoria/crear" render={ () => {
                                            return(
                                                <FormularioCategoria
                                                />
                                            )
                                        }} />

                                        {/* Producto ADMIN Actualizar */}
                                        <Route exact path="/admin/categoria/editar/:categoriaId" render={ (props) => {
                                             
                                             let idCategoria = props.location.pathname.replace('/admin/categoria/editar/', '');
                                          
                                             const categorias = this.state.categorias;
                                             
                                             let filtro
                                             filtro = categorias.filter(    categoria => (
                                                             categoria._id == idCategoria
                                             ))
                                                                
                                                            

                                             return(
                                                  <EditarCategoria 
                                                       categoria = {filtro[0]}
                                                       categorias = {this.state.categorias}
                                                  />
                                             );
                                        }}
                                        />


                              </Switch>

               </BrowserRouter>
           );
     }
}

export default Router;
