import './register.css';
import React, { useState } from 'react';
import firebase_client from '../../config/firebase';
import 'firebase/auth';

function NewUser() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [messageType, setMessageType] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();

  function signup() {
    setMessage(null);
    setLoading(true);

    if(!email || !password) {
      setMessageType('error');
      setMessage('Você precisa informar o e-mail e senha para fazer cadastro');
      return;
    }

    firebase_client.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setLoading(false);
        setMessageType('success');
        setMessage('Conta criada com sucesso.');
      }

      ).catch((error) => {
        setLoading(false);
        setMessageType('error');
        switch (error.message) {
          case 'Password should be at least 6 characters':
            setMessage('A senha deve ter pelo menos 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            setMessage('Este e-mail já está sendo usado por outro usuário.');
          break;
          case 'The email address is badly formatted.':
            setMessage('O formato do seu email é inválido!');
            break;          
          default:
            setMessage('Não foi possivel cadastrar, Tente novamente mais tarde.');
            break;
        }
      })
  }

  return(
    <div className="form-signup">
      <form className="form-login text-center mx-auto mt-5">
        <h1 className="h3 mb-3 text-black font-weight-bold">
          Signup    
        </h1>

        <input type='email' 
          onChange={(e) => setEmail(e.target.value) }
          className="form-control my-2" 
          placeholder="email"></input>
        
        <input type="password" 
          onChange={(e) => setPassword(e.target.value) }
          className="form-control my-2" 
          placeholder="Senha"></input>

        { 
          (loading) ? <div className="spinner-border text-danger" role='status'> <span className="sr-only"> Loading...</span> </div>
          : <button type="button" className = "btn btn-lg btn-block mt-3 mb-5 btn-signup" onClick={signup}> Signup </button>
        } 

        <div className="msg-login text-black text-center my-5">
          { messageType == 'success' && <span> <strong> Wow! </strong> Usuário cadastrado com sucesso. &#128526;</span> }
          { messageType == 'error' && <span> <strong> Ops! </strong> {message} &#128546; </span> }
        </div>
      </form>
    </div>
  )
};

export default NewUser;