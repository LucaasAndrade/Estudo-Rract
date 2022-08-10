


import './index.scss'


export default function Index(props) {
    
    
    return(
    <main className='Card'>
        <div className={props.alinhamento}>
                <h2> Seção {props.numeroSecao} </h2>
            <div className='agrupamento'>
                <p> {props.texto} </p>
        
                <img className="image" src={props.image} />
            </div>
        </div>
    </main>
    )
}