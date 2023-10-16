import Style from '../componentes/header.module.css'
import banco from '../img/banco.png'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <header className={Style.container}>
                <img src={banco} alt="banco" className={Style.banco} />
                <nav className={Style.menu}>
                <ul>
                    <li>
                    <a> <Link to="/"> Inicio</Link> </a>
                    </li>
                    <li>
                        <a href='/about'>Sobre</a>
                    </li>
                    <li>
                        <a> <Link to="/"> Cartão</Link> </a>
                    </li>

                    <li>
                   <a> <Link to="/PaginaPix"> Saiba Mais</Link> </a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
