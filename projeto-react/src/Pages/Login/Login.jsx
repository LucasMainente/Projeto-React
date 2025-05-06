import Logo from "./../../Assets/Img/logo.png";
import "./../Login/Login.css";
import Botao from "./../../Components/Botao/Botao";

const Login = () => {
  return (
    <main className="main_login">
      <div className="banner"></div>
      <section className="section_login">
        <img src={Logo} alt="Logo do Filmoteca" />
        <form action="" className="form_login">
          <h1>Login</h1>
          <div className="campos_login">
            <div className="campo_input">
              <label htmlFor="text">Username: </label>
              <input type="text" name="User" placeholder="Username" />
              
            </div>
            <div className="campo_input">
              <label htmlFor="">Senha: </label>
              <input type="Password" name="Senha" placeholder="Digite sua senha" />
            
              <a className="esqueceuAsenha" href="">Esqueceu a senha?</a>
            </div>
          </div>
          <Botao nomeDoBotao="Login" />
        </form>
      </section>
    </main>
  )
}

export default Login;