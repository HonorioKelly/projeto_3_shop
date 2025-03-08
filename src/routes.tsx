import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const NavBar = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<p>Home Page</p>} />
                <Route path="/shop" element={<p>Shop Page</p>} />
                <Route path="/onsale" element={<p>On Sale Page</p>} />
                <Route path="/new-arrivals" element={<p>New Arrivals Page</p>} />
                <Route path="/brands" element={<p>Brands Page</p>} />
            </Routes>
        </BrowserRouter>
    );
};
