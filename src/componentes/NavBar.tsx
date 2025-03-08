
import './NavBar.css';
import carrinho from './assets/carrinho.jpeg'
import lupa from './assets/lupa.jpeg'
import perfil from './assets/perfil.jpeg'


const NavBar = () => {
  return (
    <div>
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
                    <img src={lupa} alt="Search Icon" className="lupa" />
                    <input type="text" placeholder="Search for products..." className="search-input" />
                </div>

                <div className="icon-container">
                    <img src= {carrinho} alt="Cart Icon"  />
                    <img src= {perfil} alt="Profile Icon"  />
                </div>
            </div>
    </div>
  )
}

export default NavBar