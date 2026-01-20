import {Link} from 'react-router-dom';
import AddedToCart from './AddedToCart';
import { useState } from 'react';

function MenuSoftDrink({softdrink, addToCart}){

      const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {  
    addToCart(softdrink); // your existing add logic
    setShowPopup(true); // trigger popup
  };

    return (
        <>
        <div id="soft-drink-menu">
        <Link onClick={handleAdd} className='drink-name'>{softdrink.name}</Link>
        <span className='drink-dot'></span>
        <span className='drink-price'>${softdrink.Price}</span>
        <AddedToCart show={showPopup} icon={softdrink.icon}/>
        </div>
        </>
    )
}
export default MenuSoftDrink;