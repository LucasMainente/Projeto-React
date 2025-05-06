import './CadastroDeEvento.css';
import Header from '../../Components/Header/header';
import Lista from '../../Components/Lista/lista.jsx';

import Botao from '../../Components/Botao/Botao';
import Banner from '../../Assets/Img/Tipo-Evento.svg';

const CadastroDeEvento = () => {
    return (

        <>
        <Header/>
        <form action="" className='layout_grid'>
        <img src={Banner} alt="" />
        <div className='div_input'>
        <input className='input_titulo' type="text" placeholder='Titulo'/>
        <input type="select" placeholder='' />
        <Botao nomeDoBotao='Cadastrar'/>
        </div>
      </form>
        <Lista nomeLista='Cadastro De Evento'/>
       
        </>

    );
    }
    export default CadastroDeEvento;