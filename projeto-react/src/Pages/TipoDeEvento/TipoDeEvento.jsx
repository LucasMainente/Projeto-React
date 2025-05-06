import './TipoDeEvento.css';
import Header from '../../Components/Header/header';
import Lista from '../../Components/Lista/lista.jsx';
import Cadastro from '../../Components/Cadastro/Cadastro.jsx';

const TipoDeEvento = () => {
  return (
    <>
    <Header/>
    <Cadastro/>
    <Lista nomeLista='Lista de Eventos'/>
   
    </>
  );
}
export default TipoDeEvento;  