



export default function MediaAluno(nota1, nota2, nota3, nota4){
    const media = (nota1 + nota2 + nota3 + nota4) / 4
    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10)
        return 'Informe uma nota válida!'
    else
        return `${media}`
}