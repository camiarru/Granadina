import React from "react";
import '../App.css';


const Navbar = ({categoria1, categoria2, categoria3, categoria4, categoria5}) => {

    return(

        <div className="container-fluid bg-dark">
          <nav className="container navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div>
                <img src="Imagenes/Logo-Granadina.png" alt="Granadina" className="img-fluid"/>
            </div>
            <div className="collapse navbar-collapse navbar-espacio" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link item-navbar" href="">{categoria1}</a>
                <a className="nav-link item-navbar" href="">{categoria2}</a>
                <a className="nav-link item-navbar" href="">{categoria3}</a>
                <a className="nav-link item-navbar" href="">{categoria4}</a>
                <a className="nav-link item-navbar" href="">{categoria5}</a>
              </div>
            </div>
            <div className="d-flex justify-content-end">
            <img src="Imagenes/bolsoblanco.png" alt="Carro de compras" className="img-carrito img-fluid "/>
            </div>  
          </nav>
        </div>


    )

}

export default Navbar;