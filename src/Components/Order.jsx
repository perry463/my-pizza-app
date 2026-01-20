import { useLocation } from 'react-router-dom';
import './Order.css';
import OrderSummary from './OrderSummary';
function Order(){
        const {state} = useLocation();
        const items = state?.items || [];

 console.log("CHECKOUT ITEMS:", items)

      
    return(
        <>
        <div id='checkout-container'>
            <div id='flex-container'>
        <div className='col'>
        <h1>Checkout</h1>
        <p>Complete your order.</p>
        </div>
        <div className='checkout'>
            <h3>Delivery Information</h3>
            <div className='del-info'>
                <div className='input-flex'>
                    <div id='name-input'>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id='full-name'   />
                    </div>
                    <div id='email-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                    </div>
                </div>
                <label htmlFor="address">Address</label>
                <input type="text"  id='address'/>
             <div className='city-code'>
                <div id='for-city'>
                     <label htmlFor="city">City</label>
                     <input type="text" id='city'/>  
                </div>
                <div id='for-zip_CODE'>
                    <label htmlFor="zip-code">ZIP Code</label>
                    <input type="tel" id='zip-code' />
                </div>
            </div>
               
                
            </div>
        </div>

        <div className='checkout-payment'>
            <div>
                <h2>Payment Details</h2>
                             <p>Credit/Debit Card</p>
                    <div id='payments-info'> 
                             <input type="text" placeholder='Card Number'/>
                             <input type="text" placeholder='MM/YY'/>
                             <input type="text" placeholder='CVV'/>
                    </div>
            </div>
                <div className='payment_METHOD'>
                    <input type="radio" id='for-paypal' name='payment_METHOD'/>
                    <label htmlFor="for-paypal">PayPal</label>
                    <br />
                    <hr />
                    <input type="radio" id='for-cash-on_DEL' name='payment_METHOD'/>
                    <label htmlFor="for-cash-on_DEL" >Cash on Delivery</label>
                </div>

        </div>
        <button id='final-checkout-btn'>CheckOut</button>
        </div>
        <OrderSummary cart={items}/>
        </div>
        </>
    )
}
export default Order;