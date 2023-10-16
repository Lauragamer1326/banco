import Style from './Banco.module.css';
import Logo from '../img/logo.png';


export default function Banco() {
    return(
        <article className={Style.caixa}>
            <img src={Logo} className={Style.logo} />
            <div className={Style.texto}>
                <h1>Como funciona?</h1>
          <p>Pra enviar e receber dinheiro é bem fácil, basta abrir uma conta no Digital Banking.</p>
      </div>
        </article>
    );
}
