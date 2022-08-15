

import './index.scss'

import CalculoMediaAluno from '../../components/CalculoMedia'

export default function Index(){


    return(
        <main className='ExercicioTree'>
            <h1> Use Effect - Atualizando de forma automáica </h1>

            <div>
                <CalculoMediaAluno />
            </div>
            
        </main>
    )
}