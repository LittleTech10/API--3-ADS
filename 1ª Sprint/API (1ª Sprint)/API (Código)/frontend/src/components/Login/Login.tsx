import { useState } from "react";
import "./Login.css";
import logo from "../img/visiona_logo.png"
import LT from "../img/little_tech.png"
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const verificaLogin = () => {
    if (email !== 'admin@admin.com' && email !== "" && password !== "") {
      navigate ('/user')
    }

    if (email === 'admin@admin.com') {
      navigate('/user-admin')
    }
    
    if (email === "" || password === "" ) {
        return alert("Preencha todos os campos.");
    }
  }

  const passwordInputType = showPassword ? "text" : "password";
  const passwordIconSrc = showPassword ?   eyeIconOpen : eyeIconClose;

  // const handleLogin = (values : any) => {
  //   Axios.post("http://localhost:3001/login", {
  //     email: values.email,
  //     password: values.password
  //   }).then( (response) => {
  //       console.log(response)
  //   })
  // }

  return (
    <div className="container-lg">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="logo visiona"/>
            </span>
            <span className="login-form-title"> Bem vindo </span>
            <div className="wrap-input-lg">
              <input
                className={email !== "" ? "has-val input" : "input-lg"}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input-lg">
              <input
                className={password !== "" ? "has-val input" : "input-lg"}
                type={passwordInputType}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
              <img src={passwordIconSrc} alt="eye icon" onClick={showPasswordHandler} />
            </div>          
            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={verificaLogin}>Login</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="/cadastro">
                Criar conta
              </a>
            </div>
            <div className="text-center">
              <a className="txt2" href="/alterar-senha">
                Esqueci minha senha
              </a>
            </div>
          </form>
        </div>
        <div className='logo'>
          <img src={LT} alt="little_tech"></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
