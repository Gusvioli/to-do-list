import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { requestDataToken } from "../services/requests";
import getLocalStorage from "../utils/getLocalStorage";
import setLocalStorageClear from "../utils/setLocalStorageClear";
import BtnCadastro from "./buttons/BtnCadastro";
import BtnLogin from "./buttons/BtnLogin";
import '../styles/pages/navbar.css';

function Navbar(): JSX.Element {
  const {
    setCodeStatusMessage,
    setContents,
    setEmail,
    setPassword,
    setTypes,
    isTokenTrue,
    setIsTokenTrue,
    listarContents,
    setListarContents,
    setDescript,
    setDate,
    setLogoEmoji,
    setDateTime,
    setEdtorTrue,
    setSearch,
  } = useContext(Context);

  const [name, setName] = useState('');

  const history = useHistory();

  const hendleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };

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
    setName('');
    setIsTokenTrue(false);
    setListarContents(!listarContents);
    setCodeStatusMessage({ status: 0, message: ''});
    setDescript('');
    setDate('');
    setLogoEmoji('');
    setDateTime('');
    setEdtorTrue({
      id: 0,
      data: [],
    });
    history.push('/');
  };

  useEffect(() => {
    const isTokenTrue = async () => {
      const returnTokenTrue = await getLocalStorage('token');
      if (returnTokenTrue) {
        const data = await requestDataToken('/tokenValidate', {
          token: returnTokenTrue
        });
        setIsTokenTrue(data);
      }
    };
    isTokenTrue();
  }, [setIsTokenTrue]);

  useEffect(() => {
    const getLocalStorageNavbar = async () => {
      const value = await getLocalStorage('nameUser');
      setName(value.name);
    };
    getLocalStorageNavbar();
  }, [setName]);

  return(
    <>
      <nav data-testid='navbar'>
        <section className="nav-section-1">
          <h1>
            To do list
          </h1>
        </section>
        <section className="nav-section-2">
          <form className="nav-section-2-form">
            <label htmlFor="buscador">
              <input
                data-testid='input-buscador'
                type="text"
                id="buscador"
                placeholder="Search by: id, description, date, emoji"
                size={35}
                onChange={ (e) => hendleSearch(e) }
              />
            </label>
            { !isTokenTrue ? <><BtnLogin /><BtnCadastro /></> : '' }
            { isTokenTrue ? <button
              data-testid='button-sair'
              onClick={ hendleExited }
            >
              Exit
            </button> : ''}

          </form>
        </section>
        <section data-testid='user-name'>
          { name ? <span> Usuário(a) {name}</span> : '' }
        </section>
      </nav>
    </>
  );
}

export default Navbar;
