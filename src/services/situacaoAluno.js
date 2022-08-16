




export default function situacaoAluno(media){
    if(media < 0 || media > 10 )
        return 'Informe uma media válida!'
    else if(media >= 8)
        return 'Aluno aprovado com exelencia'
    else if(media >= 5)
        return 'Aluno aprovado'
    else if(media >= 3)
        return 'Aluno de recuperação'
    else
        return 'Aluno reprovado'
}