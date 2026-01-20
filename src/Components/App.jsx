import {Routes, Route } from 'react-router-dom'
import Home from './Home';
import Services from './Services';
import About from './About';
import Cart from './Cart';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';
import Order from './Order';
import { useState, useEffect } from 'react';

function App() {
    // const [cart, setCart] = useState([]);

     

      // Load cart from localStorage, or start with empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


    const addToCart = (product) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(
          item => item.id === product.id
        );
        if (existingItem) {
          return prevCart.map(item =>
            item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
          );
        }
        return [...prevCart, {...product, qty: 1}];
      });
    }

    const increaseQty = (id) => {
      setCart(prev =>
        prev.map(item => 
          item.id === id
          ? {...item, qty: item.qty + 1}
          : item
        )
      );
    };

    const decreaseQty = (id) => {
      setCart(prev => 
        prev.map(item =>
          item.id === id && item.qty > 1
          ? {...item, qty: item.qty - 1 }
          : item
        )
      )
    }
    const removeFromCart = (id) => {
  setCart(prev =>
    prev.filter(item => item.id !== id)
  );
};
  return (
    <>
    <div className="main-content">
    <Header cart={cart}/>
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/services' element={<Services />}/>
     <Route path='/about' element={<About />} />
     <Route path='/cart' element={<Cart 
                                      cart={cart}
                                      increaseQty={increaseQty}
                                      decreaseQty={decreaseQty}
                                      removeFromCart={removeFromCart}
                                      />}/>
    <Route path='/contacts' element={<Contact/>}/>
    <Route path='/menu' element={<Menu setCart addToCart={addToCart}/>}/>
    <Route path='/order' element={<Order cart={cart}/>}/>
    </Routes>
     <Footer />
     </div>
    </>

  )
}

export default App
