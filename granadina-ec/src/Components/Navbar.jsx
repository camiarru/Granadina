import React from "react";
import '../App.css';
import CartWidget from "./CartWidget";


const Navbar = ({categoria1, categoria2, categoria3, categoria4, categoria5}) => {

  return(

      <div className="container-fluid bg-dark">
        <div className="container bg-dark header">
            <div className="row">
                <div className="col-md-8">
                <nav className="container navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div>
                <img src="Imagenes/Logo-Granadina.png" alt="Granadina"/>
            </div>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link item-navbar" href="">{categoria1}</a>
                <a className="nav-link item-navbar" href="">{categoria2}</a>
                <a className="nav-link item-navbar" href="">{categoria3}</a>
                <a className="nav-link item-navbar" href="">{categoria4}</a>
                <a className="nav-link item-navbar" href="">{categoria5}</a>
              </div>
            </div>
          </nav>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
      </div>
  )

}

export default Navbar;

