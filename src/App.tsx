

import './App.css'
import FistCompo from './components/FistCompo';
import NavBar from './components/NavBar'
import NewArrival from './components/new-arrival/NewArrival';
import Customers from './components/avaliaçoes/Customers';
import Browse from './components/browse/Browse';
import Creditos from './components/creditos/Creditos';
import Home from './components/homepage/Home';



function App() {
 

  return   (
   <div>
        <div className="body-container">
            <FistCompo/>
            <NavBar/>
            <Home/>
            <NewArrival/>
            <Browse/>
            <Customers/>
            <Creditos/>
        </div>
    </div>

    );   
};

export default App;
