import './whyUs.css'
import { CiLock } from 'react-icons/ci';
import {FaBolt} from 'react-icons/fa';
import {BsPercent} from 'react-icons/bs';
import {BiSupport} from 'react-icons/bi'
function whyUs(){
        return(
            <>
              
             <div className='guarantee'>
               <div id='icon-1'>
                
                  <span>
               <CiLock style={{
                backgroundColor: '#10a369ff', color: '#fff', fontSize: '5em', borderRadius: '50%', padding: '10px'
               }}/> </span>
                <h2 id='text'>
                  Safe & Hygienic
                  </h2> 
                  <p id='texts'>Every pizza is prepared in a spotless kitchen with strict hygiene standards.</p>         
              
            
              <span> <FaBolt style={{ backgroundColor: '#5e7705ff', color: '#f0f7d4ff', fontSize: '5em', borderRadius: '50%', padding: '10px'}}/>
                  </span>
            <h2>
               Fast Delivery
            </h2> <p id='texts'>Your pizza is baked hot and delivered hot. From oven to doorstep__ Fast, Fresh & right on time.</p>
          
           </div>  
           
           <hr color='grey'/>
           <div id='icon-2'>
               <span>
               <BsPercent style={{ backgroundColor: '#d4ce0bff', color: '#f0f7d4ff', fontSize: '5em', borderRadius: '50%', padding: '10px'}}/>
               </span>
            <h2>
            Fair Price
            </h2> <p id='texts'>Premium ingredients, fair portions, and honest prices.Crafted to give you exceptional value without compromise.</p>
             <span>
                <BiSupport style={{ backgroundColor: '#775505ff', color: '#f0f7d4ff', fontSize: '5em', borderRadius: '50%', padding: '10px'}}/>
             </span>
              <h2>
               Quick Support
             </h2>
             <p id='texts'>Our friendly support team is always ready to help and make sure your order experience is smooth and stress-free. </p>
          </div>
           </div>
            </>
        );
}
export default whyUs;