import Style from './Ponto.module.css'
export default function Ponto() {
    return(
        <article className={Style.caixa}>
            <div className={Style.texto}>
            <p>• A possibilidade de enviar e receber dinheiro todos os dias da semana, de qualquer
            lugar e hora, só com a informação da chave.</p>
            <p>• Facilidade de aceitação, pois, para usar, basta ter uma conta e o aplicativo no celular – sem cartão, 
            maquininha, nem dados de agência e conta.</p>
            <p>•Disponibilidade imediata do valor.</p>
            </div>
        </article>
    )
}