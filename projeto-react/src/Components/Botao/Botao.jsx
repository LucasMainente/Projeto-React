import './Botao.css';
// importando o css do botao

function Botao(props) {
    return (
        <button className="botao">{props.nomeDoBotao}</button>
    );
    
}
export default Botao;
// exportando o botao