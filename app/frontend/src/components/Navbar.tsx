import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { requestDataUser } from "../services/requests";
import getLocalStorage from "../utils/getLocalStorage";
import setLocalStorageClear from "../utils/setLocalStorageClear";
import BtnCadastro from "./buttons/BtnCadastro";
import BtnLogin from "./buttons/BtnLogin";

function Navbar(): JSX.Element {
  const {setCodeStatusMessage} = useContext(Context);
  const {setEmail} = useContext(Context);
  const {setPassword} = useContext(Context);
  const [userName, setUserName] = useState({name: '', localStore: false});
  const history = useHistory();

  const getDataUserName = async() => {
    try {
      const getTokenLocal = await getLocalStorage('token');
      const returnrequest = await requestDataUser('/userName', {
        token: getTokenLocal
      });
      setUserName({
        name: returnrequest.name,
        localStore: getTokenLocal
      });
    } catch (error) {
      return error;
    }
  };

  const hendleExited = () => {
    setLocalStorageClear();
    setCodeStatusMessage({
      status: 0,
      message: ''
    });
    setEmail('');
    setPassword('');
    history.push('/');
  };
  
  useEffect(() => {
     getDataUserName();
  }, [userName]);

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
