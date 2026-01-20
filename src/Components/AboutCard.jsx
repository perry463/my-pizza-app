function AboutCard(props){
    return (
           <div className='about-card'>
            <img src={props.img} alt='CEO image' id='img2'/>
            <h2>{props.name}</h2>
             <p>{props.title}</p>
      </div> 
    )
}
export default AboutCard;