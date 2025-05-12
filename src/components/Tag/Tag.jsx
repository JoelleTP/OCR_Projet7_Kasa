import './Tag.scss'

function Tag({ label }) {
    return (
        <li className="tags__content">{label}</li>
    )  
}

export default Tag