

import './index.scss';

import CardTexto from '../../components/Cards';


export default function Index() {
    return(
        <main className='exercicioOne'>
            <div>
                Exercicio Components - EX01
            </div>

        <CardTexto numeroSecao={1} 
        texto="Tu não és para mim senão uma pessoa inteiramente igual a cem mil outras pessoas. E eu não tenho necessidade de ti. E tu não tens necessidade de mim. Mas, se tu me cativas, nós teremos necessidade um do outro."
        image="https://cdn.culturagenial.com/imagens/principe-cke.jpg?auto_optimize=low"
        alinhamento="EstiloTres"
        />

        </main>
    )
}