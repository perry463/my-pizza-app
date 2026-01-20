import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import OrderSummary from './OrderSummary';


function Cart({cart, increaseQty, decreaseQty, removeFromCart}){
    const navigate = useNavigate();
     const isCartEmpty = cart.length === 0;
     return (
          <> 
     <div className='cart-items'>
           {isCartEmpty ? <EmptyCart/> :           
          <div className='cart-item-container'>
                    <div id='cart-card-container'>
                         <div>
                           {cart.map((item) =>(
                                <CartItems 
                                   key={item.id} 
                                   item={item}
                                   increaseQty={increaseQty}
                                   decreaseQty={decreaseQty}
                                   removeFromCart={removeFromCart}
                                 />
              
                           ))}
                         </div>
                         <button to='/order' id='total-pay-btn' onClick={() => 
                              navigate("/order", {
                                   state: {items: cart}
                              })
                         }>Proceed to Checkout</button>
                    </div>     
                           <OrderSummary cart={cart}/>
             
          </div>
          }
     </div>
     

         

          </>
     )
}
export default Cart