import './ListagemDeEventos.css';
import Mensagem from './../../Assets/Img/Mensagem.svg'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const ListagemDeEventos = () => {
    return (<><Header/>

        
        <section className='layout_grid'>
        <div>
        <h1>Eventos</h1>
        <select  className="select_listagem" name="Todos os eventos" id="">
            Todos os eventos
            <option disabled selected value=""></option>
            <option value="1">Evento1</option>
            <option value="2">Evento2</option>
            <option value="3">Evento3</option>
        </select>
        <div className="table-header"> 
            <thead className="">
                <th>
                    <td>Titulo</td>
                    <td>Tipo Evento</td>
                    <td>Comentarios</td>
                    <td>Participar</td>
                </th>
                
            </thead>
            <hr className='hr_listagem'/>
            
            
            <thead>
                <th>
                    <td>Nome Evento</td>
                    <td>Tipo Evento</td>
                    <td><img src={Mensagem} alt="" className='imagem-hover' /></td>
                    <td>
                    <label class="toggle">
      <input type="checkbox" id="my-toggle"></input>
      <span class="slider"></span>
    </label>
 
                    </td>
                </th>
            </thead>
            <hr className='hr_listagem'/>
        </div>
        </div>
        </section>
        <Footer/>
        </>
    );
}
export default ListagemDeEventos;