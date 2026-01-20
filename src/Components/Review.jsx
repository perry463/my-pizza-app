import './Review.css'
function Review(){
    return (
    <>
    <div className="reviews">
        <h1>Ratings & Review</h1>
        <h2>Most Recents</h2>
      <div id='review-card'>
        <div>
            <p>⭐️⭐️⭐️⭐️⭐️ <br />
Honestly one of the best pizzas I’ve had in a long time. <br />
The pizza arrived hot, fresh, and full of flavor. You can tell quality really matters at Perry Slice. Definitely ordering again _____ Florence</p>
        </div>
        <div> <hr />
            <p>
                ⭐️⭐️⭐️⭐️⭐️  <br />
“Consistently good every time.”
I’ve ordered from Perry Slice multiple times and they never disappoint. Great flavors, reliable service, and always satisfying. _____ Ross . JK
            </p>
        </div>
        <hr />
        <div>
            <p>⭐️⭐️⭐️☆☆ <br />
Good, but room for improvement.
I liked the taste and freshness of the pizza. Service was fine, though there’s still some room to improve. I’d order again. ______ Henry</p>
        </div>
      </div>  
    </div>
    </>
    )
}
export default Review;