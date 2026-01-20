
import './Home.css'
import CTA from "./CTA";
import Hero from "./Hero";
import WhyUs from "./whyUs";
import ToAbout from "./ToAbout";
import Review from './Review';
import MainCTA from './MainCTA';
import CtaToContact from './CtaToContact';
// import Footer from "./Footer";
function Home(){
    return(
        <>
    <Hero />  
    <ToAbout />    
   
     <h2 id="home-h2">Shop for the first time and get one item free</h2>
    <CTA Product="Baked Ziti" img="https://www.thechunkychef.com/wp-content/uploads/2024/10/Italian-Sausage-Baked-Ziti-recipe-card.jpg" Description="This Easy Baked Ziti recipe is classic Italian comfort" price="FREE" />
    <CTA Product="Puck's smoked" img="https://i.redd.it/lon3vnxk27z71.jpg" Description="Smoked Salmon Pizza from Wolfgang Puck's Ospero"  price="FREE"/>
    <CTA Product="New York Slice" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAx-mjJ-5JrSacNjB8ettRdUOyHSgKTZS_Tg&s" Description="A classic New York-style pizza with a thin crust, tomato sauce "  price="FREE" />
    <CTA Product="Kabeb Pizza" img="https://i.redd.it/iv4y9bg5hh7a1.jpg" Description="Kebab pizza with chips on top, one of the tastiest kinds."  price="FREE"/>       
    <MainCTA />
    <h1 id="home-h1">Why Choose Us</h1>
    <WhyUs />
    <CtaToContact />
    {/* <Review/> */}
 
      </>
    )
}
export default Home;