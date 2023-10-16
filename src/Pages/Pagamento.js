import Style from './Pagamento.module.css'
export default function Pagamento() {
    return(
        <article className={Style.caixa}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"/></svg>
            <div className={Style.texto}>
                <h1>Pagamentos por QR Code</h1>
                <p>Pelo Pix, você pode criar QR Code de pagamento e também pagar QR Code 
                já criados por outras pessoas ou empresas. Eles são lidos por
                qualquer smartphone, basta 
                capturá-los com a câmera.</p>
                <p>Aqui no Digital Banking, cada pessoa pode gerar sua
                chave Pix e ter seu próprio QR Code vinculado. Dessa forma, é só mostrar esse QR Code 
                pra quem precisa pagar. Aí, essa pessoa coloca o valor e finaliza. Preparamos tudo para
                que seus pagamentos e transferências sejam rápidos e simples.</p>
            </div>
        </article>
    )
}