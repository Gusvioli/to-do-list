import { ChangeEvent, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Context from "../context/Context";
import { requestDataUser, requestLogin } from "../services/requests";
import codeMenssage from "../services/status";
import getLocalStorage from "../utils/getLocalStorage";
import setLocalStorage from "../utils/setLocalStorage";

// Componente para fazer o login
function Login(): JSX.Element {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setUserName,
  } = useContext(Context);
  const {codeStatusMessage, setCodeStatusMessage} = useContext(Context);
  const history = useHistory();

  // Função para pegar os valores dos inputs
  const hendleForm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
      if (id === 'email') setEmail(value); 
      if (id === 'password') setPassword(value);
  };
  
  // Função para pegar o username
  const getDataUserName = async(token: object, isTrue: boolean) => {
    const returnrequest = await requestDataUser('/userName', {
      token: token
    });
    setUserName({
      name: returnrequest.name,
      localStore: isTrue
    });
  };
  
  // Função para fazer o login e retorna os erros ou acertos na tentativa de login
  const hendleSubmitLogin = async () => {
    try {
      const UM_SEGUNDOS = 1000;
      
      const data = await requestLogin('/login', { email, password });
      setPassword(''); // Limpa o input de senha no state
      setEmail(''); // Limpa o input de email no state
      // setTokenAuthorization(date.token); // Salva o token no header Authorization
      setLocalStorage('token', data.token); // Salva o token no localStorage
      setLocalStorage('idUser', {idUser: data.idUser}); // Salva o idUser no localStorage

      // Salva o status e a messagem vinda do backend
      setCodeStatusMessage({
        status: 200,
        message: data.message
      });

      // Salva o status e pega o username
      getDataUserName(data.token, true);

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

  // Função para exibir as mensagens de erro ou sucesso
  const exibirMsgs = () => {
    if (codeStatusMessage.status !== 0 && codeStatusMessage.message !== '') {
      return `${codeMenssage(codeStatusMessage.status)}, ${codeStatusMessage.message}`;
    }return '';
  };

  // Verifica se o usuário já está logado
  useEffect(() => {
    getLocalStorage('token').then((token) => {
      if (token) history.push('/home');
    });
  }, [history]);
  
  return(
    <>
      <Navbar />
      <br />
      <form
        data-testid='form-Login'
        action="submit"
      >
        <label htmlFor="email">
          <input
            data-testid='input-email'
            type="text"
            id="email"
            onChange={(e) => hendleForm(e)}
            value={email} />
        </label>
        <label htmlFor="password">
          <input
            data-testid='input-password'
            type="password"
            id="password"
            onChange={(e) => hendleForm(e)}
            value={password}
          />
        </label>
        <button
          type="button"
          onClick={hendleSubmitLogin}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => history.push('/cadastro')}
        >
          Cadastro
        </button>
        <p>{exibirMsgs()}</p>
      </form>
    </>
  );
}

export default Login;
