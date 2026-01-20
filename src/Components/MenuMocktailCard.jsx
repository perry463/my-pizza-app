import AddedToCart from './AddedToCart';
import { useState } from 'react';

function MenuMocktailCard({mocktail, addToCart}){

                const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {  
    addToCart(mocktail); // your existing add logic
    setShowPopup(true); // trigger popup
  };

    return(
         <div className='cocktail-cards'>
                       <img src={mocktail.Img}  />
                    <div className='cocktail-card-info'>
                            <h2>{mocktail.name}</h2>
                            <p>${mocktail.Price}</p>
                           <button onClick={handleAdd}>Add to Cart</button>
                           <AddedToCart show={showPopup} icon={mocktail.icon} />
                    </div>
         </div>
    )
}
export default MenuMocktailCard;