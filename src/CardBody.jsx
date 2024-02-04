export function CardBody({name, change=true}){
    return(
        <div>
            {change ? (
                <div className="innerBody">
                    <p className='value'><i className="fa fa-check"></i></p>
                    <p className='key'>{name}</p>
                </div>
            ) : (
                <div className="innerBody" style={{opacity:0.5}}>
                    <p className='value'><i className="fa fa-times"></i></p>
                    <p className='key'>{name}</p>
                </div>
            )}
            
        </div>
    )
}