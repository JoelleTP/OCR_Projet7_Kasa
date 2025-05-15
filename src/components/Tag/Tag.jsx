import './Tag.scss'

function Tag({ label }) {
    if (!label) return null
    return (
        <li className="tags__content">{label}</li>
    )  
}

export default Tag