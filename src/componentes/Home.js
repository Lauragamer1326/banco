import Style from './Home.module.css';
import Cartão from '../img/cartão5.png';

export default function Home() {

    return (
        <article className={Style.caixa}>
            <div className={Style.texto}>
                <p>O cartão de credito do banco “Digital Banking”, é o seu novo cartão de visita.</p>
                <button>Abra sua conta</button>
            </div>
            <img src={Cartão} className={Style.cartão5} />

        </article>
    );
}  