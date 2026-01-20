import './Menu.css';
import MenuHero from '../assets/menu.hero.jpg';
import { Link } from 'react-router-dom';
import MenuPizzaCard from './MenuPizzaCard';
import PizzaMenu from '../MenuPizzaDetail';
import { FaAngleRight } from "react-icons/fa";
import SideMenu from '../MenuSideDetail';
import MenuSidesCard from './MenuSidesCard';
import MenuSoftDrink from './MenuSoftDrink';
import SoftDrinkMenu from '../MenuSoftDDetails';
import MenuCocktailCard from './MenuCocktailCard';
import CocktailMenu from '../MenuCocktailDetail';
import MenuMocktailCard from './MenuMocktailCard';
import MocktailMenu from '../MenuMocktailDetail';


function Menu( {addToCart} ) {
    return (
        <>
            <div className='menu'>
                     <img src={MenuHero} />
                <div className='menu-hero'>
                    <h1>OUR MENU</h1>
                    <p>Crafted pizzas. Quality ingredients.</p>
                    <Link id='menu-hero-link'>View Specials <FaAngleRight/></Link>
                </div>

                <div className='menu-sections'>
                    <a href='#to-pizza' id='menu-section-list'>Pizzas</a>
                    <span></span>
                    <a href='#to-sides' id='menu-section-list'>Sides</a>
                    <span></span>
                    <a href='#to-drinks' id='menu-section-list'>Drinks</a>
                </div>
                <div className='slide-in-left'>
                <div id='to-pizza' >
                    <h2>PIZZAS</h2>

                  {
                   PizzaMenu.map((card, index) => (
                        <MenuPizzaCard 
                        key={index}
                        pizza={card}
                        addToCart={addToCart}
                        />
                    ))
                  }  
                    <Link id='pizza-link'>View all sizes & options <FaAngleRight/></Link>


                     <h2 id='side-h2'>Sides</h2>
                    <div id='to-sides'>
                       {
                        SideMenu.map((detail, index) => (
                            <MenuSidesCard 
                                key={index}
                                sides={detail}
                                addToCart={addToCart}
                            />
                        ))
                       }
                      
                        
                    </div>
                    </div>
                    <Link id='pizza-link'>View all<FaAngleRight/></Link>

                        <h2>Drinks</h2>
                    <div id='to-drinks'>
                        <h2>Soft Drinks</h2>

                        {SoftDrinkMenu.map((detail, index) => (
                           < MenuSoftDrink 
                            key={index}
                            softdrink={detail}
                            addToCart={addToCart}
                           />
                        ))}
                     </div>   

                       <div id='drinks-cocktails'>
                          
                                 <h2>Cocktails</h2>
                           {CocktailMenu.map((detail, index) => (
                            <MenuCocktailCard 
                            key={index}
                            cocktail={detail}
                           addToCart={addToCart}
                            />
                           ))}
                            
                        </div>

                            <div id='drinks-cocktails'>
                                <h2>Mocktails</h2>
                           {MocktailMenu.map((detail, index) => (
                            <MenuMocktailCard
                                key={index}
                                mocktail={detail}
                                addToCart={addToCart}
                            />
                           ))}
                            
                            </div>
                            <Link id='pizza-link-last'>View all<FaAngleRight/></Link>


                           <section className='menu-cta'> 
                            <h2>Hungry Already?</h2>   
                            <p>Freshly baked pizzas, made to order.</p>                        
                            <Link to='/cart' id='menu-cta-btn'>Order Now</Link>
                           </section> 
                </div>
            </div>
        </>
    )
}
export default Menu;