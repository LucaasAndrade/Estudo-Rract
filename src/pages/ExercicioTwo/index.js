import './index.scss'

import Contador from '../../components/Contador'
import  Calculadora from '../../components/Calculadora'

export default function Index(){


    return(
        <main className='exercicioTwo'>
            <h2> Variáveis de Estado </h2>

            <div>
                <Contador titulo="Contador de passos"/>
                <Calculadora />
            </div>
        </main>
    )
}