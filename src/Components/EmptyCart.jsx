import {MdOutlineRemoveShoppingCart} from 'react-icons/md';
import {Link} from 'react-router-dom';


function EmptyCart(){


    return (
         <div className='cart'>
               <h1>Cart</h1>
               <div id='icons-p'>
               <p>Ooops </p><MdOutlineRemoveShoppingCart style={{
                    display: 'inline',
                    fontSize: '2rem',
                    color: '#e12',
               }}/></div>
               <p>Looks like you haven't added anything yet. Browse our menu and find something you'll love.</p>
               <Link to='/menu' id='cart-menu'>Menu</Link>
        </div>
    )
}
export default EmptyCart;