import React from "react";
import '../App.css';


const Categorias = ({categoria1, categoria2, categoria3, categoria4, categoria5}) => {

    return(

        <div className="container-fluid categorias">
          <div class="grid-categorias">
            <div class="cat1"><img src="Imagenes/remeras.jpeg" alt={categoria1} className="img-fluid"/></div>
            <div class="cat2"><img src="Imagenes/pantaloness.jpeg" alt={categoria2} className="img-fluid"/></div>
            <div class="cat3"><img src="Imagenes/vestidos.jpeg" alt={categoria3} className="img-fluid"/></div>
            <div class="cat4"><img src="Imagenes/sweaters.jpg" alt={categoria4} className="img-fluid"/></div>
            <div class="cat5"><img src="Imagenes/camperas.jpg" alt={categoria5} className="img-fluid "/></div>
          </div>
        </div>


    )

}

export default Categorias;