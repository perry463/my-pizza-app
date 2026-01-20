import './Footer.css';
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Footer(){
   const year = new Date().getFullYear();
    
    return (
        <>
        <div className='footer'>
             <h1>🍕 PerrySlice </h1><span>Freshly baked pizzas, <span>fast delivery, unforgettable taste.</span></span>
            <hr color='grey'/>
            <div className="footer-widget">

           
            <div id='footer-nav'>
                <h2>Quick Links</h2>
                <Link to='/'>Home</ Link>
                <Link to='/menu'>Menu</ Link>
                <Link to='/about'>About</ Link>
                <Link to='/contacts'>Contact</ Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/services'>Services</Link>
            </div> 
            {/* <hr /> */}
            <div id='footer-contact'>
                
                <h2>Contact Us</h2>
               <p><IoLocationSharp /> 7 alebiowu st, Lagos, Nigeria </p>
               <p><FiPhoneCall /> +234 906 057 4952</p>
               <p><MdOutlineMail /> goodluckimodje8@gmail.com</p>
               <p><IoTimeOutline /> Open: 11am - 11pm Daily</p>
            </div>
            </div>
            <hr color='grey'/>
            <div id='guarantee-logo'> <span>🚀 Fast Delivery</span><span> 🍕 Fresh Ingredients</span><span> ⭐ Quality Assured</span></div>
            <hr color='grey'/>
           
           <div id='footer-icons'>
                 <div id='react-icons'> 
                        <FaFacebook size='2em'  style={{
                              color: 'blue', backgroundColor: 'white', borderRadius: '50%'
                           }}/>  
                        <FaSquareInstagram size='2em'  style={{
                                color: '#d79ba5ff' }} />
                         <FaSquareWhatsapp size='2em'  style={{
                                color:'green', backgroundColor: '#fff'     
                             }} /> 
            </div>

            <h2>  Craving pizza? Order now and get it hot & fresh. <Link to='./cart' id='footer-order-link'>Order Now</Link></h2>
            
           </div> <hr color='grey'/>
           <p> &copy; {year}  Perry Slice. All rights reserved. Privacy Policy | Terms</p>
        </div>
        </>
    )
}
export default Footer;