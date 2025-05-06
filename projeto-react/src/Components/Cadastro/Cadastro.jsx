import Botao from '../Botao/Botao';
import Banner from '../../Assets/Img/Tipo-Evento.svg';

function Cadastro() {
  return (
    <section className='layout_grid'>
      <div className="bannertipoEvento"></div>
    <div className="tipo-de-evento">
      <h1 className='Titulo_Da_Pagina'>Cadastro Tipo de eventos</h1>
      <hr className='HR_TipoDeEvento'/>

      <form action="">
        <img src={Banner} alt="" />
        <div className='div_input'>
        <input className='input_titulo' type="text" placeholder='Titulo'/>
        <Botao nomeDoBotao='Cadastrar'/>
        </div>
      </form>
    
    </div>
    </section>
  )
}
export default Cadastro;



