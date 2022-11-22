import React from 'react';
import Navbar from './Navbar';
import Datas from './Datas';
import Banner from './Banner';
import Categorias from './Categorias';


function App() {
 
  let categoria1 = 'REMERAS';
  let categoria2 = 'PANTALONES';
  let categoria3 = 'VESTIDOS';
  let categoria4 = 'SWEATERS';
  let categoria5 = 'OFERTAS';

  return (
    <div>
      <Navbar categoria1 = {categoria1} categoria2 = {categoria2} categoria3 = {categoria3} categoria4 = {categoria4} categoria5 = {categoria5}/>
      <Datas/>
      <Banner/>
      {/* <Categorias/> */}
    </div>
  );
}

export default App;