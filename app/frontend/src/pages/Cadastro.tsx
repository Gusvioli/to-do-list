import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { requestCreate } from '../services/requests';
import getLocalStorage from '../utils/getLocalStorage';
import '../styles/pages/cadastro.css';
import { exibirMsgs } from '../components/utils/msgs/exibirMsgs';

// Página de cadastro
function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {codeStatusMessage, setCodeStatusMessage} = useContext(Context);
  const history = useHistory();

  // Função para criar um novo usuário
  const hendleCreateUser = async () => {
    const UM_SEGUNDO = 1000;
    try {
      const returnData = await requestCreate('/newUser', {
        name,
        email,
        password,
        role: 'user'
      });

      setCodeStatusMessage({
        status: 200,
        message: returnData.message
      });

      setName('');
      setEmail('');
      setPassword('');

      // Redireciona para a página home depois de 1 segundos e meio
      setTimeout(() => {
        history.push('/'); // Redireciona para a página home
      }, UM_SEGUNDO); // Espera 1 segundos

    } catch (error: any) {
      // Salva o status e a messagem vinda do backend retornando o erro
      setCodeStatusMessage({
        status: error.response.status,
        message: error.response.data.message
      });
    }
  };

  // Função para pegar os dados do input
  const hendleForm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
      if (id === 'name') setName(value);
      if (id === 'email') setEmail(value);
      if (id === 'password') {
        setPassword(value);
      }
  };

  // Verifica se o usuário está logado
  useEffect(() => {
    getLocalStorage('token').then((token) => {
      if (token) history.push('/home');
    });
  }, [history]);

  // Formulário de cadastro
  return(
      <>
        <div className="div-0-form">
          <form className='form-cadastro'>
          <div className="form-div-text-cadastro">
            <img
              width={50}
              height={50}
              src="logoToDoList.png"
              alt="Logotipo to do list"
              title="Logotipo to do list"
            />
            <h3>To do list</h3>
            <p>Register in the system</p>
          </div>
          <br />
          <label htmlFor="name">
            <input
              placeholder='Nome'
              data-testid='input-name-cadastro'
              type="text"
              id="name"
              value={name}
              onChange={(e) => hendleForm(e)}
              title="Enter your name"
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder='E-mail'
              data-testid='input-email-cadastro'
              type="text"
              id="email"
              value={email}
              onChange={(e) => hendleForm(e)}
              title="Enter your email"
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder= 'Password'
              data-testid='input-password-cadastro'
              type="password"
              id="password"
              value={password}
              onChange={(e) => hendleForm(e)}
              title="Enter your password"
            />
          </label>
          <div className="form-div-button">
            <button
              type="button"
              onClick={hendleCreateUser}
              data-testid='button-cadastro'
              title="Register now"
            >
              Register now
            </button>
            <a
              className='link-login'
              href="/login"
              onClick={() => history.push('/login')}
              title="Go to login"
            >
              Go Login
            </a>
          </div>
        <p className={"exibir-msgs"}>{exibirMsgs(codeStatusMessage)}</p>
        </form>
      </div>
    </>
  );
}

export default Cadastro;

