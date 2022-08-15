

import './index.scss'

import CalculoMediaAluno from '../../components/CalculoMedia'

export default function Index(){


    return(
        <main className='ExercicioTree'>
            <h1> Use Effect - Atualizando de forma automática </h1>

            <section className='container'>
                <CalculoMediaAluno />

                <div>
                    <h3> Situação aluno </h3>

                    <div>
                    <p> Verificação de Situação Escolar </p>

                    <span> {situacaoAluno} </span>
                    </div>
                </div>
            </section>
            
        </main>
    )
}