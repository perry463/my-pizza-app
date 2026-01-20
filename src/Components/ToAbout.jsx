import './toAbout.css';
import {Link }  from 'react-router-dom' ;
function ToAbout(){
    return (
        <>        
        <div className="to-about">
            <h1>Welcome to perrySlice 🍕</h1>
            <p>Perry Slice is all about serving fresh, flavorful pizzas made with quality ingredients and care. From our kitchen to your table, we focus on great taste, consistency, and a smooth ordering experience. Whether you’re stopping by for the first time or you’re already a fan, our goal is simple—deliver pizza you can trust and enjoy, every time.
                Learn more about our story, values, and what makes Perry Slice different on our About page. </p>
                <Link id='link-to-about' to='/about'>About Us</Link>
        </div>
        </>

    )
}
export default ToAbout;