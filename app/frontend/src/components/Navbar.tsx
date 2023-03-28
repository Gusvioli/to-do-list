import { ChangeEvent, useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import '../styles/pages/navbar.css';
import { hendleClearAll } from "./utils/clears/HendleclearAll";
import { useQueryClient } from "react-query";

function Navbar(): JSX.Element {
  const {
    setSearch,
    setNameEmojiUrl,
    setFormCreateAndEditTask,
    setEmail,
    setPassword,
    setCodeStatusMessage,
    setIsActiveEmojisPanel,
  } = useContext(Context);

  const history = useHistory();

  const dataTokenUserNameQuery = useQueryClient();
  const dataTokenUserName = dataTokenUserNameQuery.getQueryData<any>('tokenUserName');

  const hendleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };

  const hendleExited = () => {
    history.push('/login');
    localStorage.clear();
    hendleClearAll(setFormCreateAndEditTask, setNameEmojiUrl);
    setEmail('');
    setPassword('');
    dataTokenUserNameQuery.setQueryData('tokenUserName', {
      token: '',
      idUser: {},
      nameUser: {},
    });
    setCodeStatusMessage({ status: 0, message: '' });

    setIsActiveEmojisPanel(false);
  };

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
                placeholder="Search by: description, date, emoji"
                size={35}
                onChange={ (e) => hendleSearch(e) }
              />
            </label>
            {
              dataTokenUserName?.token
              ? <button
                data-testid='button-sair'
                onClick={ hendleExited }
              >
                Exit
              </button>
              : ''
            }
          </form>
        </section>
        <section data-testid='user-name'>
          {
            dataTokenUserName?.nameUser.name
            ? <span> Hi, {dataTokenUserName?.nameUser.name}</span>
            : ''
          }
        </section>
      </nav>
    </>
  );
}

export default Navbar;
