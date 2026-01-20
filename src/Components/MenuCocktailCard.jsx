import AddedToCart from './AddedToCart';
import { useState } from 'react';

function MenuCocktailCard( {cocktail, addToCart}){

                const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {  
    addToCart(cocktail); // your existing add logic
    setShowPopup(true); // trigger popup
  };

    return (
         <div className='cocktail-cards'>
           <img src={cocktail.Img}  />
              <div className='cocktail-card-info'>
                <h2>{cocktail.name}</h2>
                  <p>{cocktail.cocktailInfo1}<br />{cocktail.cocktailInfo2}</p>
                   <p>${cocktail.Price}</p>
                <button onClick={handleAdd}>Add to Cart</button>
              <AddedToCart show={showPopup} icon={cocktail.icon} />
              </div>                      
         </div>
    )
}
export default MenuCocktailCard;