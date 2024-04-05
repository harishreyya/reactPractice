import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Header from './Components/Header';
import ProductsPage from './Components/ProductPage';
import CartPage from './Components/CartPage';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    
      <div className="app">
         <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
       
        <Routes>
          <Route path="/" element={ <ProductsPage onAddToCart={addToCart} />}/>
           
          
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />}/>
            
         
          </Routes>
        </Router>
      </div>
    
  );
};

export default App;
