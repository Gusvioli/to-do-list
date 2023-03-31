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
          <img
            width={50}
            height={50}
            src="logoToDoList.png"
            alt="Logotipo to do list"
            title="Logotipo to do list"
          />
          <h2>To do list</h2>
        </section>
        <section className="nav-section-2">
          <form className="nav-section-2-form">
            <label htmlFor="buscador">
              <input
                data-testid='input-buscador'
                type="text"
                id="buscador"
                title="Search by: #id, description, date, emoji"
                placeholder={
                  history.location.pathname.split('/')[2] === 'calendar'
                  ? 'Search by: #id, description, date, emoji in calendar'
                  : 'Search by: #id, description, date, emoji in simple'
                }
                size={45}
                onChange={ (e) => hendleSearch(e) }
              />
            </label>
            {
              dataTokenUserName?.token
              ?
                <img
                  style={{ cursor: 'pointer' }}
                  width={25}
                  height={25}
                  src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png?v8"
                  alt="Button Exit site"
                  title="Exit site"
                  onClick={ hendleExited }
                />
              : ''
            }
          </form>
        </section>
        <section data-testid='user-name'>
          {
            dataTokenUserName?.nameUser.name
            ? <span title="Your name"> Hi, {dataTokenUserName?.nameUser.name}</span>
            : ''
          }
        </section>
      </nav>
    </>
  );
}

export default Navbar;
