import React from "react";
import '../App.css';


const Datas = () => {

    return(

        <div className="container">
            <div className="row datas">
                <div className="col d-flex justify-content-evenly align-items-center border-end">
                    <div className="">
                        <img src="Imagenes/envio.png" alt="envios" className="icono-datas"/>
                    </div>
                    <div className="">
                        <h1 className="texto-datas">Envios gratis</h1>
                    </div>
                </div>
                <div className="col d-flex justify-content-evenly align-items-center border-end">
                    <div className="">
                        <img src="Imagenes/compra-segura.png" alt="envios" className="icono-datas-s"/>
                    </div>
                    <div className="">
                        <h1 className="texto-datas">Compra segura</h1>
                    </div>
                </div>
                <div className="col d-flex justify-content-evenly align-items-center">
                    <div className="">
                        <img src="Imagenes/cuotas.png" alt="envios" className="icono-datas"/>
                    </div>
                    <div className="">
                        <h1 className="texto-datas">Cuotas sin interes</h1>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Datas;