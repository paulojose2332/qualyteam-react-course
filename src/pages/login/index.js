import React,{useState} from "react";
import { Button } from "../../components/button";
import logo from "../../logo.png";
import Axios from 'axios'

const Login = ({ onSubmit }) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  function login() {
    
    Axios.post("http://localhost:4000/auth/login", {
      email: email,
      password: password
    }).then(content => localStorage.setItem("token", content.data.access_token));
  }

  return (
    <div className="login">
      <figure>
        <img src={logo} alt="recipes" />
      </figure>
      <form className="login--form" onSubmit={login}>
        <div className="login--form--inputscontainer">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>

        <Button type="submit"> Entrar </Button>
      </form>
    </div>
  );
};

export { Login };
