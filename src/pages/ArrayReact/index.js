
import { useState } from 'react'
import './index.scss'

import ComponenteIten from '../../components/compArray';

export default function PaginaArray(){
    const [tarefa, setTarefa] = useState('');
    const [lista, setLista] = useState([]);

    function AdicionarClick() {
        let novaLista = [...lista , tarefa];
        setLista(novaLista);
        setTarefa(" ");
    }

    function removerClick(t){
        let novaLista = lista.filter(item => item !== t);
        setLista(novaLista);
    }

    return(
        <section className="Pagina-Array">
            <h2> Uso de Arrays no ReactJs </h2>

            <div>
                <input type="text" value={tarefa} onChange={e => setTarefa(e.target.value)}/>

                <button onClick={AdicionarClick}> Adicionar </button>

            <p> Tarefas </p>

            <div>
                {lista.map( item => 
                    <ComponenteIten 
                    item={item}
                    removerClick={removerClick}
                    />
                )}
            </div>

            </div>

        </section>
    )
}