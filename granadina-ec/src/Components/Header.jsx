import React from "react";
import '../App.css';
import CartWidget from "./CartWidget";
import Navbar from './Navbar';



const Header = ({categoria1, categoria2, categoria3, categoria4, categoria5}) => {

    return(
        <div className="container-fluid bg-dark">
            <div className="container bg-dark header">
                <div className="row">
                    <div className="col-md-8">
                        <Navbar categoria1 = {categoria1} categoria2 = {categoria2} categoria3 = {categoria3} categoria4 = {categoria4} categoria5 = {categoria5}/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end align-items-center">
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;