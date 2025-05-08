import './TipoUsuario.css';
import Header from '../../Components/Header/header';
import Lista from '../../Components/Lista/lista.jsx';

import Botao from '../../Components/Botao/Botao';
import Banner from '../../Assets/Img/TipoUsuario.svg';

const CadastroDeUsuario = () => {
    return (

        <>
        <Header/>
        <h1>CADASTRO DE USUARIO</h1>
        <form action="" className='layout_grid'>
        <img src={Banner} alt="" />
        <div className='div_input'>
        <input className='input_titulo' type="text" placeholder='Titulo'/>
        
        <Botao nomeDoBotao='Cadastrar'/>
        </div>
      </form>
        <Lista nomeLista='LISTA TIPO USUARIO'/>
       
        </>

    );
    }
    export default CadastroDeUsuario;