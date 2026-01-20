import AddedToCart from './AddedToCart';
import { useState } from 'react';

function MenuSidesCard ({sides, addToCart}){
            const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {  
    addToCart(sides); // your existing add logic
    setShowPopup(true); // trigger popup
  };
    return (
          <div className='sides-card'>
                            <div className='side-card-img'> 
                                <img src={sides.Img} alt="" />
                            </div>
                             <div className='side-card-info'>
                                <h2>{sides.name}</h2>
                                <p>${sides.Price}</p>
                                <button onClick={handleAdd}>Add to Cart</button>
                                <AddedToCart show={showPopup} icon={sides.icon}/>
                             </div>
                        </div>
    )
}
export default MenuSidesCard;