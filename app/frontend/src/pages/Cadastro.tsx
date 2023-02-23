import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Context from '../context/Context';
import { requestCreate } from '../services/requests';
import codeMenssage from '../services/status';
import getLocalStorage from '../utils/getLocalStorage';
import setLocalStorage from '../utils/setLocalStorage';

// Página de cadastro
function Cadastro() {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {codeStatusMessage, setCodeStatusMessage} = useContext(Context);
  const history = useHistory();

  // Função para exibir as mensagens de erro ou sucesso
  const exibirMsgs = () => {
    if (codeStatusMessage.status !== 0 && codeStatusMessage.message !== '') {
      return `${codeMenssage(codeStatusMessage.status)}, ${codeStatusMessage.message}`;
    }return '';
  };

  // Função para criar um novo usuário
  const hendleCreateUser = async () => {
    const UM_SEGUNDOS = 1000;
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
      
      setLocalStorage('token', returnData.token);
      setLocalStorage('idUser', returnData.id);

      // Redireciona para a página home depois de 1 segundos e meio
      setTimeout(() => {
        history.push('/'); // Redireciona para a página home
      }, UM_SEGUNDOS); // Espera 1 segundos

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
      if (id === 'password') setPassword(value);
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
        <Navbar />
        <form>
        <br />
        <label htmlFor="name">
          Name:
          <input
            data-testid='input-name-cadastro'
            type="text"
            id="name"
            value={name}
            onChange={(e) => hendleForm(e)} />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid='input-email-cadastro'
            type="text"
            id="email"
            value={email}
            onChange={(e) => hendleForm(e)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            data-testid='input-password-cadastro'
            type="password"
            id="password"
            value={password}
            onChange={(e) => hendleForm(e)}
          />
        </label>
        <button
          type="button"
          onClick={hendleCreateUser}
        >
          Cadastrar
        </button>
        <p>{exibirMsgs()}</p>
      </form>
    </>
  );
}

export default Cadastro;

