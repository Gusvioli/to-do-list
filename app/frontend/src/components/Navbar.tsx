import { ChangeEvent, useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import '../styles/pages/navbar.css';
import { hendleClearAll } from "./utils/clears/HendleclearAll";
import { useQueryClient } from "react-query";
import TypesToDoList from "./typesToDuList/TypesToDoList";

function Navbar(): JSX.Element {
  const {
    setSearch,
    search,
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
            src="/logoToDoList.png"
            alt="Logotipo to do list"
            title="Logotipo to do list"
          />
          <h2>To do list</h2>
          <section className="nav-section-2">
            <form className="nav-section-2-form">
              <label htmlFor="buscador">
                <input
                  data-testid='input-buscador'
                  className="input-buscador"
                  type="text"
                  id="buscador"
                  title="Search by: #id, description, date, emoji"
                  placeholder={
                    history.location.pathname.split('/')[2] === 'calendar'
                    ? 'Search by: #id, description, date, emoji in calendar'
                    : 'Search by: #id, description, date, emoji in simple'
                  }
                  value={ search }
                  onChange={ (e) => hendleSearch(e) }
                />
              </label>
            </form>
          </section>
        <TypesToDoList />
        </section>
        <section
          data-testid='user-name'
          className="name-user"
        >
          {
            dataTokenUserName?.nameUser.name
            ? <span title="Your name" className="name-exibitions">
                <b>
                  Hi,
                </b>
                {dataTokenUserName?.nameUser.name}
              </span>
            : ''
          }
          {
            dataTokenUserName?.token
            ?
              <img
                style={{ cursor: 'pointer' }}
                width={20}
                height={20}
                src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png?v8"
                alt="Button Exit site"
                title="Exit site"
                onClick={ hendleExited }
              />
            : ''
          }
        </section>
      </nav>
    </>
  );
}

export default Navbar;
