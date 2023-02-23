import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import setLocalStorageClear from "../utils/setLocalStorageClear";
import BtnCadastro from "./buttons/BtnCadastro";
import BtnLogin from "./buttons/BtnLogin";

function Navbar(): JSX.Element {
  const {
    setCodeStatusMessage,
    setContents,
    setEmail,
    setPassword,
    setTypes
  } = useContext(Context);
  const {userName, setUserName} = useContext(Context);
  const history = useHistory();

  const hendleExited = () => {
    setLocalStorageClear();
    setCodeStatusMessage({
      status: 0,
      message: ''
    });
    setEmail('');
    setPassword('');
    setContents([]);
    setTypes([]);
    setUserName({name: '', localStore: false});
    history.push('/');
  };

  return(
    <>
      <nav data-testid='navbar' style={{ display: 'flex', justifyContent: 'center' }}>
        <section>To do list</section>
        <section>
          <form
            data-testid='form-Login'
            action="submit"
            onSubmit={ (e) => e.preventDefault() }
          >
            <label htmlFor="buscador">
              <input
                data-testid='input-buscador'
                type="text"
                id="buscador"
              />
            </label>
            <button
              data-testid='button-buscar'
            >
              Buscar
            </button>
            { !userName.localStore ? <><BtnLogin /><BtnCadastro /></> : '' }
            <button
              data-testid='button-sair'
              onClick={ hendleExited }
            >
              Sair
            </button>
          </form>
        </section>
        <section data-testid='user-name'>
          { userName.localStore ? <span> Usuário(a) {userName.name}</span> : '' }
        </section>
      </nav>
    </>
  );
}

export default Navbar;
