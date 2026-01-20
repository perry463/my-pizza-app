import AddedToCart from './AddedToCart';
import { useState } from 'react';
function MenuPizzaCard ({pizza, addToCart}){
          const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {  
    addToCart(pizza); // your existing add logic
    setShowPopup(true); // trigger popup
  };
        return (
            <div className='pizza-card'>
                    <div id='pizza-img'>
                            <img src={pizza.Img} alt="" />
                    </div>
                <div id='pizza-info'> 
                        <h2>{pizza.name}</h2>
                          <p>{pizza.ingredient}</p>
                          <p>from <span>${pizza.Price}</span></p>
                          
                          <button onClick={handleAdd} >Add to Cart</button>
                           <AddedToCart show={showPopup} icon={pizza.icon}/>
                </div>
            </div>
    )
}
export default MenuPizzaCard;