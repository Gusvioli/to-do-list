import React from "react";
import { useHistory } from "react-router-dom";

function BtnCadastro() {
  const history = useHistory();
  return(
    <>
      <button
        data-testid='button-buscar'
        onClick={() => history.push('/cadastro')}
      >
        Cadastro
      </button>
    </>
  );
}

export default BtnCadastro;
