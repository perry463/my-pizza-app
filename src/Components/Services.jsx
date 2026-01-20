import heroBg from '../assets/service-hero.png';
import PropDetails from '../ServiceProp'
import './Services.css';
import { Link } from 'react-router-dom'
import ServicesOfferCard from './ServicesOfferCard';
function Services(){

    return(
        <>
    <div className="services">
            
            {/* <img src={heroBg} alt="" id='services-hero'/>
           <div className='services-wrap'>
            <div className='img-text'>
                <h1>Our Services</h1>
                <p>Delivering Quality, One Slice at a Time</p>
            </div> */}
            <div className="services-hero-container" >
                 <img src={heroBg} alt="" id="services-hero"/>
                 <div className="services-wrap">
                  <div className="img-text">
                        <h1>Our Services</h1>
                        <p>Delivering Quality, One Slice at a Time</p>
                  </div>
            </div>
              {PropDetails.map((detail, index) => (
                <ServicesOfferCard 
                key={index}
                img={detail.Img}
                name={detail.name}
                details={detail.text}
                />
              ))}

            <div className='about-contact'>
                <h1>Get in Touch</h1>
                <p>Ready to plan your next pizza experience? Contact us today?</p>
                <div id='about-contact-info'>
                    <h4>Call Us</h4>
                    <p>(906) 057- 4952</p>
                </div>
                 <div id='about-contact-info'>
                    <h4>Email Us</h4>
                    <p>info@perryslice.com</p>
                </div>
                 <div id='about-contact-info'>
                    <h4>Visit Us</h4>
                    <p>7 alebiowu steet, Lagos,Nigeria</p>
                </div>
                <Link id='about-contact-link' to='/contacts'>Contact Us</Link>
            </div>
            </div>
    </div>
        </>
    )
}
export default Services;