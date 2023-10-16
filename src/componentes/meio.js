import Style from './meio.module.css';
import Online from '../img/online.png';

export default function Home() {

    return (
        <article className={Style.caixa}>
            <img src={Online} className={Style.online} />
            <div className={Style.texto}>
                <p>O cartão de credito do banco “Digital Banking”, é o seu novo cartão de visita.</p>
            </div>

        </article>
    );
}  