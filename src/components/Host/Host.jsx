import './Host.scss'

function Host({host}) {
    return(
        <div className="host">
            <p className="host__name">{host.name}</p>
            <img className="host__photo" src={host.picture} alt=""/>
        </div>
    )
}

export default Host