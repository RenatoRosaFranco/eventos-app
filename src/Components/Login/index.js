import  './login.css';
import  React, { useState } from 'react';
import  firebase_client from '../../config/firebase';
import { Link } from 'react-router-dom';
import 'firebase/auth';

const Login = () => {
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  function logIn() {
    firebase_client
      .auth()
        .signInWithEmailAndPassword(email, password).then(result => {
          setMessage('success');
        }).catch((error) => {
          setMessage('error');
        });
  }

  return(
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
           <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        <div className="form-label-group">
          <input type="email" id="inputEmail"
            onChange={(e) => setEmail(e.target.value) }
            className="form-control my-2" 
            placeholder="Email address" required autofocus />
        </div>
          
        <div className="form-label-group">
          <input type="password" id="inputPassword"
            onChange={(e) => setPassword(e.target.value) }
            className="form-control my-2" 
            placeholder="Password" required />
        </div>
          
        <button 
            className="btn btn-lg btn-primary btn-block btn-login" 
            type="button" onClick={() => { logIn() }}> Sign in
        </button>

        <div className="msg-login text-white text-center my-5">
          { message == 'success' && <span> <strong> Wow! </strong> Você está conectado &#128526;</span> }
          { message == 'error' && <span> <strong> Ops! </strong> Verifique se a senha ou usuário estão corretos &#128546; </span> }
        </div>

        <div className="opcoes-login mt-5 text-center">
          <Link to='' className="mx-2">Recuper Senha</Link>
          <span className="text-white">&#9733;</span>
          <Link to='register' className="mx-2">Quero Cadastrar</Link>
        </div>
      </form>
    </div>
  )
};

export default Login;
