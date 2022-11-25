import React from "react";
import '../App.css';


const ItemListContainer = ({greeting}) => {

    return(
        <div className="container-fluid bg-danger">
            <p className="d-flex justify-content-center"><a className="texto-greeting" href="https://www.instagram.com/granadina.dress/?hl=es">{greeting}</a></p>

        </div>


    )

}

export default ItemListContainer;
