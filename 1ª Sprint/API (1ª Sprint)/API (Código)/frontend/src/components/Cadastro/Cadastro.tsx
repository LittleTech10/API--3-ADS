import { useState } from "react";
import "./Cadastro.css";
import LT from "../img/little_tech.png"
import logo from "../img/visiona_logo.png"
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';
import Axios from "axios"
import { useNavigate } from "react-router-dom";



function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [values, setValues] = useState({} as any)
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate()

  const handleChangeValues = (value) => {
    setValues((prevValue : any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }
  
  const handleClick = () => {
    Axios.post("http://localhost:3001/registro", {
      nome: values.nome,
      email: values.email,
      senha: values.senha,
      confirmarSenha: values.confirmarSenha
    }).then((response) => {
      if (response.data.msg !== " "){
        alert(response.data.msg)
        // navigate('/login')
      }
        
    })

    navigate('/login')
  }
    

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const showConfirmHandler = () => {
    setShowConfirm(!showConfirm);
  };

//  const camposPreenchidos = () => {
//    if ( values.target.name === "" || email === "" || password === "" || confirm === "") {
//      return alert("Preencha todos os campos.");
//    }
    // Código para cadastrar o usuário
//  };

  const passwordInputTypeSenha = showPassword ? "text" : "password";
  const passwordInputTypeConfirm = showConfirm ? "text" : "password";
  const passwordIconSrc = showPassword ?   eyeIconOpen : eyeIconClose;
  const confirmIconSrc = showConfirm ?   eyeIconOpen : eyeIconClose;


  return (
    <div className="container-cd">
      <div className="container-cadastro">
        <div className="wrap-cadastro">
          <form className="cadastro-form">
            <span className="cadastro-form-title">
             <img src={logo} alt="logo visiona"/>
            </span>
            <div className="wrap-input-cd">
              <input
                className= {nome !== "" ? "has-val input" : "input-cd"}
                type="nome"
                name="nome"
                onChange={handleChangeValues}
              />
              <span className="focus-input-cd" data-placeholder="Nome"></span>

            </div>
            <div className="wrap-input-cd">
              <input
                className={email !== "" ? "has-val input" : "input-cd"}
                type="email"
                name="email"
                onChange={handleChangeValues}
              />
              <span className="focus-input-cd" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input-cd">
              <input
                className={password !== "" ? "has-val input" : "input-cd"}
                type={passwordInputTypeSenha}
                name="senha"
                onChange={handleChangeValues}
              />
              <span className="focus-input-cd" data-placeholder="Senha"></span>
              <img src={passwordIconSrc} alt="eye icon" onClick={showPasswordHandler} />
            </div>
            <div className="wrap-input-cd">
              <input
                className={confirm !== "" ? "has-val input" : "input-cd"}
                type={passwordInputTypeConfirm}
                name="confirmarSenha"
                onChange={handleChangeValues}
                //onChange={(e) => {
                //setConfirm(e.target.value);
                //setPasswordMatch(e.target.value === password);}
             // }
             />
              <span className="focus-input-cd" data-placeholder="Confirmar senha"></span>
              <img src={confirmIconSrc} alt="eye icon" onClick={showConfirmHandler} />
              {/*{confirm !== "" && !passwordMatch&& (
               <div className="balao-flutuante">
                 <p>As senhas não coincidem.</p>
               </div>
              )}*/}
            </div>

            <div className="container-cadastro-form-btn">
              <button className="cadastro-form-btn" onClick={handleClick}>Cadastrar</button> 
            </div>

            <div className="text-center">
              <span className="txt1">Já possui uma conta? </span>
              <a className="txt2" href="/login">
                Login
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

export default Cadastro;