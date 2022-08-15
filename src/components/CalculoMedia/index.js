

import { useEffect, useState } from 'react'
import './index.scss'

import MediaAluno from '../../services/mediaaluno'

export default function CalculoMediaAluno() {
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [nota4, setNota4] = useState(0)
    const [media, setMedia] = useState(0)

    useEffect(() => {
        let x = MediaAluno(nota1, nota2, nota3, nota4)
        setMedia(x)
    }, [nota1, nota2, nota3, nota4])

    return (
        <main className='Calculo-Media'>
            <h2> Media Aluno </h2>

            <section className='Inputs'>
                <div>
                    <label> Nota 1 :</label>
                    <input type='number' value={nota1} onChange={e => setNota1(Number(e.target.value))} />
                </div>
                <div>
                    <label> Nota 2 :</label>
                    <input type='number' value={nota2} onChange={e => setNota2(Number(e.target.value))} />
                </div>
                <div>
                    <label> Nota 3: </label>
                    <input type='number' value={nota3} onChange={e => setNota3(Number(e.target.value))} />
                </div>
                <div>
                    <label> Nota 4: </label>
                    <input type='number' value={nota4} onChange={e => setNota4(Number(e.target.value))} />
                </div>
            </section>
            <section className='resposta' >
                <label> Média: </label>
                <span> {media} </span>
            </section>


        </main>
    )
}