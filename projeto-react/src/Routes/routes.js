import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import TiposDeEvento from "../Pages/TipoDeEvento/TipoDeEvento";
import CadastroDeEvento from "../Pages/CadastroDeEvento/CadastroDeEvento";
import TipoDeUsuario from "./../Pages/CadastroTipoUsuario/TipoUsuario"
import ListagemDeEventos from "../Pages/ListagemDeEventos/ListagemDeEventos";


// import { Routes } from "react-router-dom";

const Rotas = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/TiposDeEvento" element={<TiposDeEvento />} />
                <Route path="/Cadastro" element={<CadastroDeEvento />} />
                <Route path="/Usuario" element={<TipoDeUsuario/>}/>
                <Route path="/ListagemDeEventos" element={<ListagemDeEventos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;