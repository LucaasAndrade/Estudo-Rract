import { useState } from 'react'
import './index.scss'




export default function Index(props){
    const [nm, setNm] = useState(0);
    let calc = nm
    function addClick(){
        setNm(calc++);
    }
    
    function removeClick(){
        setNm(calc--);
    }

    return(
        <main className="comp-Contador">
            <div className="formato">
                <h4> {props.titulo} </h4>

                <h3> {nm} </h3> 

                <div className="botoes">
                    <button onClick={addClick}> Adicionar </button>
                    <button onClick={removeClick}> Remover </button>
                </div>
            </div>
        </main>
    )
}