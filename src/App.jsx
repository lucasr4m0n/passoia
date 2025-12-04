// aqui importamos os arquivos
import Header from "./components/Header";
import Banner from "./components/Banner";
import Lancamentos from "./components/Lancamentos";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";
import bannerprincipal from "./assets/Banner.png";
import bannerlapis from "./assets/bannerLapis.png";

// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App(){
  return(
    <>
    <Header />
    <Banner imagem={bannerprincipal} alt="Banner principal onde mostra um produto da loja" />
    <Produtos  />
    <Lancamentos  />
    
    <Banner imagem={bannerlapis} alt="Banner onde mostra varios pinceis de maquiagem" />
    <Footer />
    </>
  )
}
export default App;