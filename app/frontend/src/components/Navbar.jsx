import React, { useState, useEffect, useContext } from "react";
import { requestDataUser } from "../services/requests";
import Context from "../context/Context";
import getLocalStorage from "../utils/getLocalStorage";

function Navbar() {
  const [userName, setUserName] = useState('');

  const getDataUserName = async() => {
    try {
      const returnUserName = await requestDataUser('/userName', {token: getLocalStorage('token')});
      setUserName(returnUserName.name);
    } catch (error) {
      return error;
    }
  };
  
  useEffect(() => {
     getDataUserName();
  }, [userName]);

  return(
    <>
      <nav data-testid='navbar' style={{ display: 'flex', justifyContent: 'center' }}>
        <section>To do list</section>
        <section>
          <form
            data-testid='form-Login'
            action="submit"
            onSubmit={ (e) => e.preventDefault() }
          >
            <label htmlFor="buscador">
              <input
                data-testid='input-buscador'
                type="text"
                id="buscador"
              />
            </label>
            <button
              data-testid='button-buscar'
              text="button"
            >
              Buscar
            </button>
            <button
              data-testid='button-sair'
              text="button"
            >
              Sair
            </button>
          </form>
        </section>
        <section data-testid='user-name'>
          { userName ? <span> Usuário(a) { userName }</span> : '' }
        </section>
      </nav>
    </>
  );
}

export default Navbar;
