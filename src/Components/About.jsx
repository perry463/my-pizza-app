import {Link} from 'react-router-dom';
import AbtHero from '../assets/about-hero.jpg';
import './About.css';
import AboutCard from './AboutCard';
import AboutInfo from '../AboutProp';
import Story from '../assets/for-story.jpg';
import Ingredients from '../assets/pizza-ingredient.jpg'
function About(){
return(
    <>
    <div className='about-page'>
                <img src={AbtHero} alt="" id='about-section-img'/>
        <div className='about-section-info'>
                 <h1>About Us</h1>
                  <p>PASSION FOR PIZZA, CRAFTED FOR PERFECTION</p>
        </div>
           <div className='about-story-section'>
                <div className='about-story-details'>
                  <h1>Our Story</h1>
                  <p>
                    Welcome to PerrySlice, where our love for authentic, delicious pizza come to life!
                      Founded in 2025, we set out to create the perfect pizza experience for our community.
                      <br />
                      With a commitment to fresh ingredients and traditional recipes,
                     we've been serving mouth, watering pizzas that keep our guests coming back for more.
                  </p>
                </div>
                <div className='about-story-img'>
                  <img src={Story} />
                </div>
        </div>
             <div className='about-story-section'>
                <div className='about-story-img'>
                  <img src={Ingredients} />
                </div>
                  <div className='about-story-details'>
                  <h1>Our Ingredients</h1>
                  <p>
                    We believe in quality.That's why we use only the finest, freshest ingredients.
                    <br />
                    From hand-tossed dough and rich tomato sauce to premium mozzarella and gourmet toppings, everything is crafted with care to bring you best possible.
                  </p>
                </div>
        </div>

       

        <h1 id='cardH1'>Team</h1>
            {
              AboutInfo.map((detail, index) => (
               <AboutCard 
                  key={index}
                  img={detail.Img}
                  name={detail.name}
                  title={detail.title}
               />
              ))
            }   
      <div id='about-brand'>  
            <h1>About PerrySlice</h1>
            <p>At PerrySlice, we are passioniate about delivering more than just pizza, we deliver comfort, flavor, and satisfaction right to your doorstep.
            Built <br />
            as an online pizza delivery brand, PerrySlice was created to make enjoying delicious, freshly made pizza easy, fast, and convenient, no matter where you are.
            We believe great pizza start with a great ingredients. That's why our dough is freshly prepared, our sauces are rich and flavorful, and our toppings are carefully selected to ensure every bite is packed with taste. From classic favorites to creative combinations, each pizza is crafted with attention to detail and baked to perfection.
            </p>
      </div> 
          
      <div className="about-contact-cta">
            <p>Have questions or catering needs?</p>
         <Link id='contact-link' to='/contacts'>Contact Us</Link>
      </div>
    </div>
    </>
)
}
export default About;