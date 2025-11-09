export default function Stars({ rating }) {
    const fullStars = Math.floor(rating) 
    const hasHalfStar = rating % 1 >= 0.5 

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => {
                if (index < fullStars) {
                    return <span key={index} className="fa fa-star active"></span>
                } 
                else if (index === fullStars && hasHalfStar) {
                    return <span key={index} className="fa fa-star active"></span>
                } 
                else {
                    return <span key={index} className="fa fa-star"></span>
                }
            })}
        </div>
    )
}