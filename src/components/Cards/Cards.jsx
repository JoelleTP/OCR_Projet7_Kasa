function Card({ id, title, cover }) {
    return (
    <>
        <img className="card__cover" src={cover} alt={`${title} cover`} />
        <h2 className="card__title">{title}</h2>
    </>)
}

export default Card