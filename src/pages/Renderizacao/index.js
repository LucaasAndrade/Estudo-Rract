
import { useState } from 'react';
import './index.scss';


export default function Renderizacao()
{
    const [mostrar, setMostrar] = useState(false);
    const [respQuiz, setRespQuiz] = useState('');
    const [acertouQuiz, setAcertouQuiz] = useState(false);
    const [escolheu, setEscolheu] = useState(false);


    function exibir(){
        setMostrar(true)
    }

    function Csharp(event){
        if(event.target.checked){
            setRespQuiz('Errouuuuuuuuuuuu');
        }
    }

    function Js(event) {
        if(event.target.checked){
            setRespQuiz('Acertou');
            setAcertouQuiz(true);
        }
    }

    return(
        <section className='Renderização'>

            <h2> ========== Renderização Condicional ========== </h2>

            <div>
                <h5> Eu tenho uma pergunta pra você! </h5>

                <button onClick={exibir}> Ver pergunta </button>

                {mostrar === true &&
                    <h6> HTML e CSS são linguagens de programação?</h6>
                }
            </div>

            <hr/>
            <br/>
            <br/>
            <br/>

            <div>
                <h5> QUIZ MANIA </h5>

                <h5> Qual dessas linguagens de programação é melhor? </h5>

                <input type='radio' name='quiz' onClick={Csharp} disabled={escolheu}/> C# 
                <input type='radio' name='quiz' disabled={escolheu} onClick={Js} /> Js
                <input type='radio' name='quiz' disabled={escolheu} onClick={Csharp} /> Py
                <input type='radio' name='quiz' disabled={escolheu} onClick={Csharp} /> Java
                <div>
                    {respQuiz}
                </div>

            </div>

            <div>
                
            </div>


        </section>
    )
}

