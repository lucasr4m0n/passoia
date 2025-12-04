import "./footer.scss";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

function Footer(){
    return (
      <footer>
        <nav>
          <h4>ATENDIMENTO</h4>
          <ul>
            <li>Fale Conosco</li>
            <li>Perguntas Frequentes</li>
            <li>Meus Pedidos</li>
            <li>Nossas Lojas</li>
          </ul>
        </nav>
        <div className="pagamento">
          <h4>FORMAS DE PAGAMENTO</h4>
          <figure>
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={pix} alt="pix" />
            <img src={boleto} alt="boleto" />
          </figure>
        </div>
        <div className=" redes">
          <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
          <figure>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={youtube} alt="youTube" />
            <img src={twitter} alt="Twiter" />
          </figure>
        </div>
      </footer>
    );
}

export default Footer