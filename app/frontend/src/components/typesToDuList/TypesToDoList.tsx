import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import '../../styles/components/simple/typesToDoList.css';

function TypeToDoList(): JSX.Element {
  const { setEditrTrue, setCodeStatusMessage, setContents } = useContext(Context);
  const history = useHistory();

  const gotPage = (url: string) => {
    setEditrTrue(false);
    setCodeStatusMessage({
      status: 0,
      message: '',
    })
    history.push(`/home${url}`);
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
