import { useState } from 'react';
import './contact.css'
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall } from 'react-icons/md'
import {TfiEmail} from 'react-icons/tfi'
import {Link} from 'react-router-dom';
function Contact(){
    const [subject, setSubject] = useState();

    function handleSubject(e){
        setSubject(e.target.value);
    }
    return (
        <>
        <div className='contact'>
           
            <div id='contact-header'>
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you! Reach out to us anytime.</p>
            </div>
        <div id='our-info'>

            <div id='our-location'>
                <FaLocationDot style={{
                    color: '#6a1aeaff',
                    fontSize: '2.5rem'

                }}/>
                <h2>Our Location</h2>
                <p>7 alebiowu steet,</p>
                <p id='loc-P'>Lagos,Nigeria 100001</p>
            </div>
             <div id='our-contact'>
                <MdCall style={{
                    color: '#6a1aeaff',
                    fontSize: '2.5rem'

                }}/>
                <h2>Call Us</h2>
                <p>+234 (906) 057 4852</p>
            </div>
            <div id='our-email'>
                <TfiEmail style={{
                    color: '#6a1aeaff',
                    fontSize: '2.5rem'

                }}/>
                <h2>Email Us</h2>   
                 <p>goodluckimodje8@gmail.com</p>
            </div>
        </div>

            <h1>Contact Us</h1>
        <div id='user-info'>
            <div id='user-name-email'>
              <div id='for-name'>
                    <label htmlFor="name-input">Your Name </label>
                    <input type="text" id='name-input'/>
              </div>
            <div id='for-email'>
                    <label htmlFor="email-input"> Your Email </label>
                    <input type="email" id='email-input' />
             </div>    
             </div>
                 
                  <select name="reportIssue" value={subject} onChange={handleSubject}>
                      <option value="">Select a Subject</option>
                      <option value="Why my transaction is still processing?">Why my transaction is still processing?</option>
                      <option value="My delivery is taking so long">My delivery is taking so long</option>
                      <option value="Delivered to a wrong address">Delivered to a wrong address</option>
                      <option value="I got a wrong order">I got a wrong order</option>
                      <option value="">Other</option>
                  </select>
                   <label htmlFor="subject-input"> Subject </label> 
                  <input type="text" id='subject-input' value={subject} onChange={handleSubject}/>
             <label htmlFor="textarea-input">Your Message </label>
            <textarea  id="textarea-input"></textarea>
            <div className='Cbtn'><Link id='contact-button'>Send Message</Link></div>
        </div>
        </div>  
        </>
    )
}
export default Contact;