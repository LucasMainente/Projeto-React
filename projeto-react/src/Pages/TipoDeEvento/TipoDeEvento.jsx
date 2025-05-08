import './TipoDeEvento.css';
import Header from '../../Components/Header/header';
import Lista from '../../Components/Lista/lista.jsx';
import Cadastro from '../../Components/Cadastro/Cadastro.jsx';
import Footer from '../../Components/Footer/footer.jsx';

const TipoDeEvento = () => {
  return (
    <>
    <Header/>
    <Cadastro nomeDoCadastro='CADASTRO TIPO DE EVENTOS'/>
    <Lista nomeLista='LISTA TIPO DE EVENTOS'/>
    <Footer/>
    </>
  );
}
export default TipoDeEvento;  