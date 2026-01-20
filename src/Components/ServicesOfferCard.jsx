

function ServicesOfferCard(props){
        return( 
            <>
             <div className='offer-cards'>
                <img src={props.img} alt="" id='offer-card-img' />
                <div id='offer-card-details'>
                    <h2>{props.name}</h2>
                    <p>{props.details}</p>
                    <button>Learn More</button>
                </div>
            </div>
            </>
        )
}
export default ServicesOfferCard;