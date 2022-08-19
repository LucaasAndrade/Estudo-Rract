
import './index.scss';


export default function ComponenteIten(props) {


    return(
        <section>
            <p> {props.item} <span onClick={e => props.removerClick(props.item)}> (x)</span></p>
        </section>
    )
}