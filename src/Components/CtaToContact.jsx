import { Link } from "react-router-dom";
import './CtaToContact.css'
function CtaToContact(){
    return(
        <>
        <div className="contact-cta">
            <p>Have a question or want to place an order? We're always happy to help and serve you better.</p>
            <Link id="contact-link" to='/contacts'> Contact Us</Link>
        </div>
        </>
    )

}
export default CtaToContact;