import './New.css'

import camisa from "./assets/camisa.png"
import calca from "./assets/calca.png"
import blusa from "./assets/blusa.png"
import camisa2 from "./assets/camisa2.png"

import vertical from "./assets/vertical.png"
import courage from "./assets/courage.png"
import loose from "./assets/loose.png"
import faded from "./assets/faded.png"


const New = () => {
  return (
    <div>                {/* New Arrivals */}
        <section className="new-arrivals">
            <h1>NEW ARRIVALS</h1>
                <div className="products">
                <div className="product-card">
                    <img src= {camisa} alt="T-shirt with Tape Details" />
                    <h3>T-shirt with Tape Details</h3>
                    <div className="rating">★★★★☆ <span>4.5/5</span></div>
                    <p className="price">$120</p>
                </div>

                <div className="product-card">
                    <img src= {calca} alt="Skinny Fit Jeans" />
                    <h3>Skinny Fit Jeans</h3>
                    <div className="rating">★★★☆☆ <span>3.5/5</span></div>
                    <p className="price">
                        <span className="old-price">$260</span> $240 <span className="discount">-20%</span>
                    </p>
                </div>

                <div className="produtos-link">
                    <div className="product-card">
                        <img src= {blusa} alt="Checkered Shirt" />
                        <h3>Checkered Shirt</h3>
                        <div className="rating">★★★★☆ <span>4.5/5</span></div>
                        <p className="price">$180</p>
                    </div>
                </div>

                <div className="produtos-link">
                    <div className="product-card">
                        <img src= {camisa2} alt="Sleeve Striped T-shirt" />
                        <h3>Sleeve Striped T-shirt</h3>
                        <div className="rating">★★★★☆ <span>4.5/5</span></div>
                        <p className="price">
                            <span className="old-price">$160</span> $130 <span className="discount">-30%</span>
                        </p>
                    </div>
                </div>
                </div>

            <button className="view-all">View All</button>

            <section className="top-selling">
            <h1>NEW ARRIVALS</h1>
            <div className="products">
                <div className="product-card">
                    <img src= {vertical} alt="Vertical Striped Shirt" />
                    <h3>T-shirt with Tape Details</h3>
                    <div className="rating">★★★★☆ <span>4.5/5</span></div>
                    <p className="price">$120</p>
                </div>

                <div className="product-card">
                    <img src= {courage} alt="Courage Graphic T-shirt" />
                    <h3>Skinny Fit Jeans</h3>
                    <div className="rating">★★★☆☆ <span>3.5/5</span></div>
                    <p className="price">
                        <span className="old-price">$260</span> $240 <span className="discount">-20%</span>
                    </p>
                </div>

                <div className="produtos-link">
                    <div className="product-card">
                        <img src= {loose} alt="Loose Fit Bermuda Shorts" />
                        <h3>Checkered Shirt</h3>
                        <div className="rating">★★★★☆ <span>4.5/5</span></div>
                        <p className="price">$180</p>
                    </div>
                </div>

                <div className="produtos-link">
                    <div className="product-card">
                        <img src= {faded} alt="Faded Skinny Jeans" />
                        <h3>Sleeve Striped T-shirt</h3>
                        <div className="rating">★★★★☆ <span>4.5/5</span></div>
                        <p className="price">
                            <span className="old-price">$160</span> $130 <span className="discount">-30%</span>
                        </p>
                    </div>
                </div>
            </div>

            <button className="view-all">View All</button>
        </section>
        </section>
    </div>
  )
}

export default New