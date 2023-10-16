import Style from './Formulario.module.css'
import Grupo from '../img/grupo.png'

export default function Formulario() {
    return (
        <section className={Style.container}>
            <form className={Style.caixa_pequena1}>
             <label>
                Nome completo*
                <input />
             </label>

             <label>
                CPF*
                <input />
             </label>

             <label>
                E-mail*
                <input />
             </label>

             <label>
                Confirmar e-mail*
                <input />
             </label>

             <button type="submit">Continuar</button>
             <p>Ao continuar, você permite que o banco Digital
                Banking entre em contato com você pelos canais informados</p>
            </form>

            <div className={Style.caixa_pequena2}>
                <img src={Grupo} alt="" />
            </div>
        </section>
    )
}