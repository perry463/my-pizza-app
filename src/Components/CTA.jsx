import './CTA.css';
import {  Link  } from "react-router-dom";

function CTA (props){
    return(
        <>
        <div className="first-CTA">
                <div id="CTA-body">
                    <div id='CTA-id'>
                          <img src={props.img} alt="" />
                    </div>
                            <h2>{props.Product}</h2>
                            <p id='CTA-description'>{props.Description}</p>
                            <p>{props.price}</p>
                             <Link to='./menu' id='cta-link'>GET NOW</Link>
                </div>
      
        </div>
        </>
    )
}
export default CTA;