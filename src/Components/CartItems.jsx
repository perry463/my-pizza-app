// import { useState } from 'react';
// import cartImg from '../assets/menu.hero.jpg';
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


function CartItems({item, increaseQty,  decreaseQty, removeFromCart}){
    const navigate = useNavigate();
    return (
        <>
                        <div className="cart-cards">
                         <div className="cart-card-img">
                             <img src={item.Img}/>
                        </div>

                <div id='carts-info'>
                              <h1>{item.name}</h1>
                              <p>Medium </p>
                              <p>${(item.Price * item.qty).toFixed(2)} </p>
                              <MdDeleteForever  id='del-icon' size='1.5rem'
                                                         onClick={() => removeFromCart(item.id)}
                                                            />
                        <div id='carts-info-btn' >
                                <button onClick={() => decreaseQty(item.id)}>-</button>
                                <button>{item.qty}</button>
                                <button onClick={() => increaseQty(item.id)}>+</button>
                        </div>
                        <button id='buy-for-each-btn' onClick={() => 
                            navigate("/order", {
                                state: { items: [item]}
                            })
                        } >Order Now</button>

                         

                </div>
            </div>
                      
                  
                
        {/* </div>    */}
        
      {/* // */}

  
          {/* </div> */}
     </> 
    )
}
export default CartItems;