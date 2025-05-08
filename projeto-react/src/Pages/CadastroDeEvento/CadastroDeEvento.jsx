import './CadastroDeEvento.css';
import Header from '../../Components/Header/header';
import Lista from '../../Components/Lista/lista.jsx';

import Botao from '../../Components/Botao/Botao';
import Banner from '../../Assets/Img/Tipo-Evento.svg';

const CadastroDeEvento = () => {
    return (

        <>
        <Header/>
        <h1>CADASTRO DE EVENTO</h1>
        <form action="" className='layout_grid'>
        <img src={Banner} alt="" />
        <div className='div_input'>
        <input required  className='input_titulo' type="text" placeholder='Titulo'/>
        <select required  name="Tipo de Evento" id="">
          <option value="">Palestra</option>
          <option value="">Palestra</option>
          <option value="">Palestra</option>
        </select>
        <Botao nomeDoBotao='Cadastrar'/>
        </div>
      </form>
        <Lista nomeLista='LISTA DE EVENTO'/>
       
        </>

    );
    }
    export default CadastroDeEvento;