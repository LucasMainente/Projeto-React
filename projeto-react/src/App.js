import './App.css';
import './Pages/Login/Login.css';
import Login from './Pages/Login/Login';
import TipoDeEvento from './Pages/TipoDeEvento/TipoDeEvento';
import Lista from '././Components/Lista/lista.jsx'; // importando a lista
import Routes from './Routes/routes.js'
import Cadastro from './Components/Cadastro/Cadastro.jsx';
import CadastroDeEvento from './Pages/CadastroDeEvento/CadastroDeEvento.jsx';
import CadastroDeUsuario from './Pages/CadastroTipoUsuario/TipoUsuario.jsx';

// importando o login

function App() {
  return (
    <>
      
     <Routes />
      </>

  );
}
export default App;