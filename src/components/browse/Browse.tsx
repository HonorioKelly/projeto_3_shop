import './Browse.css'

import modelo1 from "./assets/modelo1.png"
import modelo2 from "./assets/modelo2.png"
import modelo3 from "./assets/modelo3.png"
import modelo4 from "./assets/modelo4.png"

const Browse = () => {
  return (
    <div>
        <div className="browse-style">
                    <h2>Browse by Dress Style</h2>
                    <div className="style-list">
                      <div className="style-item">
                        <img src={modelo1} alt="Casual"/>
                        <p>Casual</p>
                      </div>
                      <div className="Formal">
                        <img src= {modelo2} alt="Formal"/>
                        <p>Formal</p>
                      </div>
                      <div className="Party">
                        <img src= {modelo3} alt="Party"/>
                        <p>Party</p>
                      </div>
                      <div className="Gym">
                        <img src= {modelo4} alt="Gym"/>
                        <p>Gym</p>
                      </div>
                    </div>
            </div>
    </div>

     );
 }

export default Browse