import React from 'react';
import Datas from './Datas';
import Banner from './Banner';
// import Categorias from './Categorias';
import Header from './Header';


function App() {
 
  let categoria1 = 'REMERAS';
  let categoria2 = 'PANTALONES';
  let categoria3 = 'VESTIDOS';
  let categoria4 = 'SWEATERS';
  let categoria5 = 'OFERTAS';

  return (
    <div>
      <Header categoria1 = {categoria1} categoria2 = {categoria2} categoria3 = {categoria3} categoria4 = {categoria4} categoria5 = {categoria5}/>
      {/* <Navbar  */}
      <Datas/>
      <Banner/>
      {/* <Categorias/> */}
    </div>
  );
}

export default App;