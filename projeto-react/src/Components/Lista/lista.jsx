import './lista.css';
import Editar from '../../Assets/Img/Caneta.png';
import Excluir from '../../Assets/Img/Lixeria.png';


const Lista = (props) => {
    return (
<>
<form action="">
    <table>
        <thead>
            <th>
                
            </th>
        </thead>
    </table>
</form>
<section className="layout_grid listagem">
            <h1> {props.nomeLista} </h1>
            <hr/>

            <div className="tabela">
                <table>
                    
                    <thead>
                       
                        <tr className="table_cabecalho"> 
                            <th>Titulo</th>
                        </tr>
                        <tr>
                            <td data-cell="Editar">Editar</td>
                        </tr>
                        <tr>
                            <td><img src={Editar} alt="Caneta" /></td>
                        </tr>
                        <tr>
                            <td data-cell="Excluir">Excluir</td>
                        </tr>
                        <tr>
                            <td><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>
                                Tipo de Evento
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr className="item_lista">
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
</>
    );
}
export default Lista;