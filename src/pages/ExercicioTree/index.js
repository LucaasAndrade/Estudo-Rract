

import './index.scss'

import CalculoMediaAluno from '../../components/CalculoMedia'
import situacaoAluno from '../../services/situacaoAluno'
import { useState } from 'react'

export default function Index(){
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState('');

    function verificarClick() {
        let x = situacaoAluno(media);
        setSituacao(x);
    }

    return(
        <main className='ExercicioTree'>
            <h1> Use Effect - Atualizando de forma automática </h1>

            <section className='container'>
                <CalculoMediaAluno />

                <div className='Situacao-Aluno'>
                    <h3> Situação aluno </h3>
                    <p> Verificação de Situação Escolar </p>

                    <div className='div'>

                    <input type='number' value={media} onChange={e => setMedia(Number(e.target.value))}/>

                    <button onClick={verificarClick}> Verificar Situação </button>

                    <span> {situacao} </span>

                    </div>
                </div>
            </section>
            
        </main>
    )
}