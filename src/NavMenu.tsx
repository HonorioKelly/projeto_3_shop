import { Link } from 'react-router-dom';

export const NavMenu = () => {
    return (
        <div className="nav-menu">
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/onsale" className="nav-link">On Sale</Link>
            <Link to="/new-arrivals" className="nav-link">New Arrivals</Link>
            <Link to="/brands" className="nav-link">Brands</Link>
        </div>
    );
};
