import "./produtos.scss"
import olhos from "../../assets/olhos.png";
import labios from "../../assets/labios.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Produto(){
    return(
        <section className="produtos" id="produto">
            <h2 >LOOKS E DICAS DE MAQUIAGEM</h2>
            <figure>
                <img src={labios} alt="mulher passando gloss nos labios" />
                <img src={olhos} alt="olho verde com sombras e delineado feito" />
                <img src={rosto} alt="mulher passando base no rosto" />
                <img src={tendencia} alt="mulher com um pote de blush do lado do rosto" />
            </figure>
        </section>
    )
}

export default Produto;