
import './App.css'
import FistCompo from './componentes/FistCompo';
import NavBar from './componentes/NavBar';
import New from './componentes/new-arrival/New';
import Customers from './componentes/avaliaçoes/Customers';
import Browse from './componentes/browse/Browse';
import Creditos from './componentes/creditos/Creditos';

import casal from "./assets/casal.png"
import estrela1 from "./assets/estrela1.png"
import estrela2m from "./assets/estrela2m-sem.png"

import versace from "./assets/versace.jpg"
import zara from "./assets/zara.jpg"
import gucci from "./assets/gucci.jpg"
import prada from "./assets/prada.jpg"
import calvin from "./assets/calvin.jpg"



function App() {
 

  return   (
   <div>
        <div className="body-container">
            <FistCompo/>
            <NavBar/>
            
            <div className="homepage">
                <b id="titulo-principal" className="titulo-principal">
                    FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
                </b>
                <div className="sub-titulo">
                    Browse through our diverse range of meticulously crafted garments, designed<br />
                    to bring out your individuality and cater to your sense of style.
                </div>

                <div className="shop-now-wrapper">
                    <button>Shop Now</button>
                </div>

                {/* Números */}
                <div className="produtos-numeros">
                    <div className="parent">
                        <b className="numeros">200+</b>
                        <p>International Brands</p>
                    </div>
                    <div className="High-Quality">
                        <b className="numeros">2,000+</b>
                        <p>High-Quality Products</p>
                    </div>
                    <div className="container">
                        <b className="numeros">30,000+</b>
                        <p>Happy Customers</p>
                    </div>
                </div>

                {/* Imagens e Marcas */}
                <div className="fontes-img">
                    <img src= {estrela2m} alt="" className="estrela2m-sem" />
                    <img src= {estrela1} alt="" className="estrela1-sem" />
                    <img src= {casal} alt="" className="casal" />
                </div>
                    
                <div className="marcas">
                    <img src= {versace} alt="" className="versace" />
                    <img src= {zara} alt="" className="zara" />
                    <img src= {gucci} alt="" className="gucci" />
                    <img src= {prada} alt="" className="prada" />
                    <img src= {calvin} alt="" className="calvin" />
                    
                </div>
            </div>
            <New/>
            <Browse/>
            <Customers/>
            <Creditos/>
        </div>
    </div>

    );   
}

export default App;
