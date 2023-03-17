import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import '../../styles/components/simple/typesToDoList.css';

function TypeToDoList(): JSX.Element {
  const {
    setCodeStatusMessage,
    listarContents,
    setListarContents,
    setDescript,
    setDate,
    setLogoEmoji,
    setDateTime,
    setEdtorTrue,
    setSearch,
    setCaracters,
    isEmojisTasck,
    setIsEmojisTasck,
  } = useContext(Context);
  const history = useHistory();

  const gotPage = (url: string) => {
      history.push(`/home${url}`);
      setListarContents(!listarContents);
      setCodeStatusMessage({ status: 0, message: ''});
      setDescript('');
      setDate('');
      setLogoEmoji('');
      setDateTime('');
      setSearch('');
      setCaracters(0);
      setIsEmojisTasck(false);
      setEdtorTrue({
        id: 0,
        data: [],
      });
  };

  return (
      <ul className="ul-buttons-types-to-do-list">
        <li>
          <button
            type="button"
            onClick={() => gotPage('/simple')}
          >
            Simple
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => gotPage('/calendar')}
          >
            Calender
          </button>
        </li>
      </ul>
    );

}

export default TypeToDoList;
