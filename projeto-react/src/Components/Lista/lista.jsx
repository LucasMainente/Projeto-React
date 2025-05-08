import './lista.css';
import Editar from '../../Assets/Img/Caneta.png';
import Excluir from '../../Assets/Img/Lixeria.png';


const Lista = (props) => {
    return (
        <>

            <section className="listagem">
                <h1> {props.nomeLista} </h1>
                <hr />

                <div className="layout-grid tabela">
                    <table >
                        <thead>
                            <tr className="table_cabecalho">

                                <th> Nome </th>

                                <th> Editar </th>
                                <th> Excluir </th>
                            </tr>
    
                        </thead>
                         
                        <tbody>
                            <tr className="item_lista">
                                <td data-cell="Titulo"> Tipo Evento </td>

                                <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                                <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                            </tr>
                        </tbody>
                    
                    </table>
                </div>
                <hr className='linha_da_lista' />
            </section>
        </>
    )
}

export default Lista;