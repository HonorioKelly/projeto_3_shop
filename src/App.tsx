
import './App.css'
import FistCompo from './componentes/FistCompo';
import NavBar from './componentes/NavBar';

import casal from "./assets/casal.png"
import estrela1 from "./assets/estrela1.png"


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
                    <img src="img/estrela2m-sem.png" alt="" className="estrela2m-sem" />
                    <img src= {estrela1} alt="" className="estrela1-sem" />
                    <img src= {casal} alt="" className="casal" />
                </div>

                <div className="marcas">
                    <img className="versace" src="img/versace-sem.png" alt="" />
                    <img className="zara" src="img/zara.logo1-Photoroom.png" alt="" />
                    <img className="gucci" src="img/gucci.logo-Photoroom.png" alt="" />
                    <img className="prada" src="img/prada.logo-Photoroom.png" alt="" />
                    <img className="calvin" src="img/calvin-klein.logo-Photoroom.png" alt="" />
                </div>
            </div>
        </div>
    </div>

    );   
}

export default App;
