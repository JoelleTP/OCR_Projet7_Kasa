import fullStars from "../../assets/images/fullStars.png"
import emptyStars from "../../assets/images/emptyStars.png"
import './Rate.scss'

function Rate({rating}) {
    if(!rating) return null
    const totalScore = [1, 2, 3, 4, 5];

    return (
        <div>
            {totalScore.map((index) => (
                <span key={index}>
                    {index <= rating ? 
                        <img className="stars" src={fullStars} alt="Etoiles pleines"/>
                    :
                    <img className="stars" src={emptyStars} alt="Etoiles vides"/>}
                </span>
            ))}
        </div>
    )
}

export default Rate