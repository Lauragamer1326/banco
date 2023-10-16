import {Link} from 'react-router-dom'
import Pix from '../img/pix.png';
import Style from './SaibaMais.module.css';

  function SaibaMais(){
    return(

      <article className={Style.caixa}>
      <div className={Style.texto}>
        <h1>Pix</h1>
          <p>Faça pagamentos e transferências de forma instantânea e segura.</p>
      </div>
      <img src={Pix} className={Style.pix} />

  </article>

  
        
    );
}
export default SaibaMais