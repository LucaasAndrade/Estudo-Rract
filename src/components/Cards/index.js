





export default function Index(props) {
    
    
    return(
    <main className="Card-Texto">
        <div>
            <h2> Seção {props.numeroSecao} </h2>

            <p> {props.texto} </p>
        </div>
        
        <img src={props.image} />

    </main>
    )
}