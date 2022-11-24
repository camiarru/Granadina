import React from "react";
import '../App.css';


const CartWidget = () => {

    return(

        <button type="button" class="btn position-relative">
            <img src="Imagenes/bolsoblanco.png" alt="Carro de compras" className="img-carrito"/>
            <span class="position-absolute top-0 start-65 badge rounded-pill bg-danger">1</span>
        </button>
    )

}

export default CartWidget;

{/* <div className="d-flex justify-content-end align-items-center color">
<img src="Imagenes/bolsoblanco.png" alt="Carro de compras" className="img-carrito img-fluid "/>
</div> */}