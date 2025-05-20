import './Title.scss'

function Title({ title, subtitle }) {
    return (
        <>
            {title && <h1 className="logement__title">{title}</h1>}
            {subtitle && <p className="logement__subtitle">{subtitle}</p>}
        </>
    )
}

export default Title