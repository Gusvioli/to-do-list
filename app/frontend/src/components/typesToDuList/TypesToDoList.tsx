import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";

function TypeToDoList(): JSX.Element {
  const { listarContents, setListarContents, setCodeStatusMessage } = useContext(Context);
  const history = useHistory();

  const gotPage = (url: string) => {
    history.push(`/home${url}`);
    setListarContents(!listarContents);
    setCodeStatusMessage({ status: 0, message: ''});
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
      </ul>
    );
  
}

export default TypeToDoList;