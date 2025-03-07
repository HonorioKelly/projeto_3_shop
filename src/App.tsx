
import './App.css'

function App() {
 

  return (


        <div className="homepage-container">
            {/* Banner Promocional */}
            <div className="banner-promo">
                <div className="banner-texto">
                    <span>Sign up and get 20% off to your first order.</span>
                    <span className="sign-up-now">Sign Up Now</span>
                </div>
            </div>

            {/* Navbar */}
            <div className="navbar">
                <button className="menu-toggle">☰</button>
                <b className="logo">SHOP.CO</b>

                <div className="nav-menu">
                    <a href="#" className="nav-link">Shop</a>
                    <a href="#" className="nav-link">On Sale</a>
                    <a href="#" className="nav-link">New Arrivals</a>
                    <a href="#" className="nav-link">Brands</a>
                </div>

                <div className="search-container">
                    <img src="img/lupa.jpeg" alt="Search Icon" className="lupa" />
                    <input type="text" placeholder="Search for products..." className="search-input" />
                </div>

                <div className="icon-container">
                    <img src="img/carrinho.jpeg" alt="Cart Icon" className="carrinho" />
                    <img src="img/perfil.jpeg" alt="Profile Icon" className="perfil" />
                </div>
            </div>

            {/* Título Principal */}
            <div className="homepage">
                <b id="titulo-principal" className="titulo-principal">
                    FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
                </b>
                <div className="sub-titulo">
                    Browse through our diverse range of meticulously crafted garments, designed<br />
                    to bring out your individuality and cater to your sense of style.
                </div>

                <div className="shop-now-wrapper">
                    <button type='button'>Shop Now</button>
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
                    <img src="vite.svg" alt="" className="vite" />
                    <img src="casal.png" alt="" className="casal" />
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
    );
}



export default App
