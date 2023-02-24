import { useHistory } from "react-router-dom";

function TypeToDoList(): JSX.Element {
  const history = useHistory();

  const gotPage = (url: string) => {
    history.push(`/home${url}`);
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