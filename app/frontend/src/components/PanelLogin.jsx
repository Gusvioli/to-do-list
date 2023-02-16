import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { setTokenAuthorization, requestLogin } from "../services/requests";
import codeMenssage from "../services/status";
import setLocalStorage from "../utils/setLocalStorage";

// Componente para fazer o login
function PanelLogin() {
  const {email, setEmail} = useContext(Context);
  const {password, setPassword} = useContext(Context);
  const {codeStatusMessage, setCodeStatusMessage} = useContext(Context);
  const history = useHistory();

  // Função para pegar os valores dos inputs
  const hendleForm = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
      if (id === 'email') setEmail(value); 
      if (id === 'password') setPassword(value);
  };
  
  // Função para fazer o login e retorna os erros ou acertos na tentativa de login
  const hendleSubmitLogin = async () => {
    try {
      const date = await requestLogin('/login', { email, password });
      setPassword(''); // Limpa o input de senha no state
      setEmail(''); // Limpa o input de email no state
      setTokenAuthorization(date.token); // Salva o token no header Authorization
      setLocalStorage('token', date.token); // Salva o token no localStorage
      // Salva o status e a messagem vinda do backend
      setCodeStatusMessage({
        status: 200,
        message: date.message
      });
    } catch (error) {
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
      return `${codeMenssage[codeStatusMessage.status]}, ${codeStatusMessage.message}`;
    }return '';
  };

  return(
    <form
      data-testid='form-Login'
      action="submit"
    >
      <label htmlFor="email">
        <input
          data-testid='input-email'
          type="text"
          id="email"
          onChange={ (e) => hendleForm(e) }
          value={ email }
        />
      </label>
      <label htmlFor="password">
        <input
          data-testid='input-password'
          type="password"
          id="password"
          onChange={ (e) => hendleForm(e) }
          value={ password }
        />
      </label>
      <button
        type="button"
        onClick={ hendleSubmitLogin }
      >
        Login
      </button>
      <button
        type="button"
        onClick={ () => history.push('/cadastro') }
      >
        Cadastro
      </button>
      <p>{ exibirMsgs() }</p>
    </form>
  );
}

export default PanelLogin;