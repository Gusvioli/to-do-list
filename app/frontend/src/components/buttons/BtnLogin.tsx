import { useHistory } from "react-router-dom";

function BtnLogin() {
  const history = useHistory();
  
  return(
    <>
      <button
        data-testid='button-buscar'
        onClick={() => history.push('/login')}
      >
        Entrar
      </button>
    </>
  );
}

export default BtnLogin;
