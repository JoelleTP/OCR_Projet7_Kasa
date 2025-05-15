import './Title.scss'

function Title({ title, subtitle }) {
    return (
        <>
            {title && <h2 className="logement__title">{title}</h2>}
            {subtitle && <p className="logement__subtitle">{subtitle}</p>}
        </>
    )
}

export default Title