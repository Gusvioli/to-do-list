import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import codeMenssage from "../../services/status";

function BtnLogin() {
  const {setCodeStatusMessage} = useContext(Context);
  const history = useHistory();

  return(
    <>
      <button
        data-testid='button-buscar'
        onClick={() => {
          setCodeStatusMessage({
            status: 0,
            message: ''
          });
          codeMenssage(0);
          history.push('/login')
        }}
      >
        Enter
      </button>
    </>
  );
}

export default BtnLogin;
