import Style from './cartão.module.css'
import Cartão from '../img/cartãoc.png';

export default function cartão() {
    return (
        <article className={Style.caixa}>
            <img src={Cartão} className={Style.cartãoc} />
            <div className={Style.texto} />
            <p>Quanto mais você usa a Conta Digital Banking, mais benefícios você tem.</p>
        </article>

    );
}