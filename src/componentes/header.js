import Style from '../componentes/header.module.css'
import banco from '../img/banco.png'
export default function Header(){
    return(
        <header className={Style.container}>
                <img src={banco} alt="banco" className={Style.banco} />
                <nav className={Style.menu}>
                <ul>
                    <li>
                        <a href='/about'>Inicio</a>
                    </li>
                    <li>
                        <a href='/about'>Sobre</a>
                    </li>
                    <li>
                        <a href='/about'>Cartão</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
