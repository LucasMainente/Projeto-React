import "./header.css";
import Logo from "./../../Assets/Img/logo.png";
import Vector from "./../../Assets/Img/Vector.svg"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="layout_grid">
            <div className="">

                <Link to="/"><img src={Logo} width={115} height={20} alt="" /></Link>

                <nav className="nav_header">
                    <Link to="/Home" className="link_header">Home</Link>
                    <Link to="/Cadastro" className="link_header">Eventos</Link>
                    <Link to="/Usuario" className="link_header">Usuarios</Link>
                    <Link to="/Contatos" className="link_header">Contatos</Link>
                    <Link to="/Adm" className="link_header">Administrador</Link>
                    <img className="imagen_saida" src={Vector} alt="" />
                </nav>
            </div>

        </header>

    )
}

export default Header;