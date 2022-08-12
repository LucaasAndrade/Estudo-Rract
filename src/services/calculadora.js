




export default function Calculadora(nm1, nm2, operacao) {
    if(operacao === 'adicao' || operacao === 'adição' || operacao === '+')
        return nm1 + nm2;
    else if(operacao === 'subtracao' || operacao === 'subtração' || operacao === '-')
        return nm1 - nm2
    else if(operacao === 'divisao' || operacao === 'divisão' || operacao === ':')
        return nm1 / nm2
    else if(operacao === 'multiplicacao' || operacao === 'multiplicação' || operacao === '*')
        return nm1 * nm2
}