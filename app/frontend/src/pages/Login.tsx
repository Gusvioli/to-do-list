import { ChangeEvent, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { requestLogin } from "../services/requests";
import codeMenssage from "../services/status";
import getLocalStorage from "../utils/getLocalStorage";
import setLocalStorage from "../utils/setLocalStorage";
import '../styles/pages/login.css';

// Componente para fazer o login
function Login(): JSX.Element {
  const {
    email,
    setEmail,
    password,
    setPassword,
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

  // Função para fazer o login e retorna os erros ou acertos na tentativa de login
  const hendleSubmitLogin = async () => {
    try {
      const UM_SEGUNDOS = 1000;

      const data = await requestLogin('/login', { email, password });
      setPassword(''); // Limpa o input de senha no state
      setEmail(''); // Limpa o input de email no state
      setLocalStorage('token', data.token); // Salva o token no localStorage
      setLocalStorage('idUser', {idUser: data.idUser}); // Salva o idUser no localStorage
      setLocalStorage('nameUser', {name: data.name}); // Salva o name no localStorage

      // Salva o status e a messagem vinda do backend
      setCodeStatusMessage({
        status: 200,
        message: data.message
      });

      // Redireciona para a página home depois de 1 segundos e meio
      setTimeout(() => {
        setCodeStatusMessage({
          status: 0,
          message: ''
        });
        codeMenssage(0);
        history.push('/home'); // Redireciona para a página home
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
    if (codeStatusMessage !== undefined) {
      return `${codeMenssage(codeStatusMessage.status)}
      ${codeStatusMessage.status ? `,` : ''}
      ${codeStatusMessage.message}`;
    } else {
      return '';
    }
  };

  // Verifica se o usuário já está logado
  useEffect(() => {
    getLocalStorage('token').then((token) => {
      if (token) history.push('/home');
    });
  }, [history]);

  return(
    <>
      <div className="div-0-form">
        <form
          data-testid='form-Login'
          action="submit"
          className="form-login"
        >
          <div className="form-div-text-login">
            Log in to To-do-List
          </div>
          <label htmlFor="email">
            <input
              placeholder="E-mail"
              data-testid='input-email'
              type="email"
              id="email"
              onChange={(e) => hendleForm(e)}
              value={email}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="Password"
              data-testid='input-password'
              type="password"
              id="password"
              onChange={(e) => hendleForm(e)}
              value={password}
            />
          </label>
          <div className="form-div-button">
            <button
              type="button"
              onClick={hendleSubmitLogin}
            >
              Login
            </button>
            <a
              className="form-a-text-cadastro"
              href="/cadastro"
              onClick={() =>{
                setCodeStatusMessage({
                  status: 0,
                  message: ''
                });
                codeMenssage(0);
                history.push('/cadastro')}
              }
            >
              Register
            </a>
          </div>
          <p className="exibir-msgs">{exibirMsgs()}</p>
          <a className="form-a-text-esqueceu-senha" href="/login">
            Forgot password?
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;
