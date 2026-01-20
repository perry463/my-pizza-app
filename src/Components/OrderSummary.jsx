function OrderSummary({cart = []}) {
     const subtotal = cart.reduce(
               (sum, item) => sum + item.Price * item.qty,
                0
                    );

          // constants
               const DELIVERY_FEE = cart.length > 0 ? 1: 0;
               const TAX_RATE = 0.075; // 7.5%

               const tax = subtotal * TAX_RATE;
               const total = subtotal + tax + DELIVERY_FEE;

    return (
          <div className='order-cal'>
                        <h1>Order Summary</h1>
                    <div id='order-info'>
                         <div id='price-row'>
                               <p id='order-info-summary'>Subtotal </p>
                               <p id='order-info-price'>${subtotal.toFixed(2)}</p>
                         </div>
                         <div id='price-row'>
                                <p id='order-info-summary'>Delivery Fee</p>
                                <p id='order-info-price'>${DELIVERY_FEE.toFixed(2)}</p>
                         </div>
                         <div id='price-row'>
                                  <p id='order-info-summary'>Items</p>
                                  {cart.length > 0 && (
                                        <p id='order-info-price' >{cart.length}</p> 
                                  )}
                         </div>
                    </div>

                           <hr />

                              <div id='total'>
                                        <p>Total</p>
                                         <p>${total.toFixed(2)}</p>
                               </div>
               </div>
    )
}
export default OrderSummary;