import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";

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
      setEdtorTrue({
        id: 0,
        data: [],
      });
  };

  return (
      <ul>
        <li>
          <button
            type="button"
            onClick={() => gotPage('/simple')}
          >
            To do list simples
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => gotPage('/calendar')}
          >
            To do list Calender
          </button>
        </li>
      </ul>
    );

}

export default TypeToDoList;
