import { useState } from "react"
import Calculadora from "../../services/calculadora";

import './index.scss'

export default function CompCalculadora() {
    const [nm1, setNm1] = useState(0);
    const [nm2, setNm2] = useState(0);
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState(0);

    function calcularClick() {
        let x = Calculadora(nm1, nm2, operacao)
        setResultado(x);
    }

    console.log(operacao)
    console.log(resultado)

    return (
        <main className="Calculadora">
            <section className="EstiloUm">
                <h2> Calculadora </h2>

                <div>
                    <p> Digite um número: </p>
                    <input type="number" value={nm1} onChange={e => setNm1(Number(e.target.value))} />
                    <p> Digite outro número: </p>
                    <input type="number" value={nm2} onChange={e => setNm2(Number(e.target.value))} />
                </div>

                <div className="operacao">
                    <label> Operações: </label>
                    <select onChange={e => setOperacao(e.target.value)}>
                        <option> Escolha uma operação:</option>
                        <option value='+'> Adição (+)</option>
                        <option value='-'> Subtração (-)</option>
                        <option value=':'> Divisão ( : )</option>
                        <option value='*'> Multiplicação ( * ) </option>
                    </select>
                </div>

                <button className="click" onClick={calcularClick}> Calcular! </button>

                <span> {resultado} </span>
            </section>
        </main>
    )
}