import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('CLICOU')
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt='Logo do sistema' />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar uma conta</h1>
          <input type="text" placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" placeholder='Digite seu email' value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value) } />
          <button type="submit">Cadastrar</button>
        </form>  

        <Link to="/">Já é cadastrado? Faça seu login</Link>
      </div>
    </div>
  );
}
  
  export default SignUp;
  