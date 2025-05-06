import "./header.css";
import Logo from "./../../Assets/Img/logo.png";
import Vector from "./../../Assets/Img/Vector.svg"
const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/*Estou a redirecionar ao clicar na logo */}
            <a to="">
            <img src={Logo} alt="Logo do Filmoteca" />
            </a>
            <nav className="nav_header">
              <a href="" className="link_header" >Home</a>
              <a href="" className="link_header" >Eventos</a>
              <a href="" className="link_header" >Usuarios</a>
              <a href="" className="link_header" >Contatos</a>

                <a className="link_header" >Administrador <img className="imagen_saida" src={Vector} alt=""/></a>
            </nav>

            </div>
        </header>
    )
}

export default Header;