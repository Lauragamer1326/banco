import Style from './Texto.module.css'
export default function Texto() {
    return (
        <article className={Style.caixa}>
             <div className={Style.texto}>
            <p>Transferências por chave Pix.
                As chaves Pix são os apelidos dos seus dados bancários (banco, agência e conta), criadas para você
                fazer ou receber transferências. Elas podem ser o seu CPF, número de celular, e-mail e/ou a 
                chave aleatória.
                Depois de se cadastrar, você já pode usar o seu Pix: é só passar essa chave pra quem você quer
                que te pague. Se você precisar pagar alguém, basta ter a chave dessa pessoa ou o CNPJ da empresa.
                A chave aleatória você só gera se quiser manter seus dados protegidos ao compartilhar com quem você quer.
                A chave aleatória é gerada pelo Banco Central para o Pix.</p>
                </div>
        </article>
    )
}