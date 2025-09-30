export const Card = ({ name, imgUrl, info, live }) => {
    return (
        <a className='project-card simple' target="_blank" rel="noopener noreferrer" href={live}>
            <img className='card-img' src={imgUrl} alt={name} />
            <div className='card-info'>
                <div className='app-name'>{name}</div>
                <div className='app-intro'>{info}</div>
            </div>
        </a>
    )
}