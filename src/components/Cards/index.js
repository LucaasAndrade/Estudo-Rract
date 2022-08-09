


import './index.scss'


export default function Index(props) {
    
    
    return(
    <main className='Card'>
        <div className={props.alinhamento}>
            <div className='agrupamento'>
                <h2> Seção {props.numeroSecao} </h2>

                <p> {props.texto} </p>
            </div>
        
            <img className="image" src={props.image} />
        </div>
    </main>
    )
}