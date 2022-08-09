

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
        image="https://41456.cdn.simplo7.net/static/41456/sku/painel-de-festa-infantil-para-meninos-o-pequeno-principe-painel-redondo-o-pequeno-principe-3d-sublimado--p-1597837276746.jpg"
        />

        </main>
    )
}