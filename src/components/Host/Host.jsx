import './Host.scss'

function Host({host}) {
    if (!host) return null
    return (
        <div className="host">
            <p className="host__name">{host.name || "Anonyme"}</p>
            {host.picture && <img className="host__photo" src={host.picture} alt="Photo de l'hôte"/>}
        </div>
    )
}

export default Host