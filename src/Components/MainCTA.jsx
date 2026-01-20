import './MainCTA.css';
import { useNavigate } from 'react-router-dom';

function MainCTA(){
    const navigate = useNavigate();
    return(
        <>
        <div className="Main-cta">
           <h2 id="cta-text">From fresh ingredients to perfectly baked crusts, every pizza at PerrySlice is made to satisfy. Whether you're ordering for yourself, family, or friends, we deliver hot, delicious pizzas straight to your door - fast, fresh and full of flavor.</h2> 
        
        <p id="cta-text2">Order now and enjoy the taste you'll keep coming back for.</p>
        <button id="cta-btn" onClick={() => 
            navigate("/menu")
        }>Order Fresh Pizza</button>
        </div>
        <div className="cta-features">
            <span>🚀 Fast Delivery</span>
            <span>🍕 Fresh ingredient</span>
            <span>⭐Trusted quality</span>
        </div>
        </>
    )
}
export default MainCTA;