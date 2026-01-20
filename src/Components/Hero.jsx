import heroBg from '../assets/hero-bg.png';
import './Hero.css';
import {Link} from 'react-router-dom';
function Hero(){
    return (
        <section className='hero' 
        style={{
            backgroundImage: `url(${heroBg})`
        }}>
        <div className='hero-section' >
        <h1>Fresh, Fast &<br/> Delicious Pizza in <br /> Town 🍕</h1>
       <p>Hot slices, fast delivery, unforgettable taste</p>
        <Link to='/cart'  id='order'>Order Now</Link>
        <Link to='/menu' id='menu'>View Menu</Link>
        </div>
        </section>
    )
}
export default Hero;