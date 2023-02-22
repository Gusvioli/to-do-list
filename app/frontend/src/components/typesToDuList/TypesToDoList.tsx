import { Key, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestData } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

function TypeToDoList(): JSX.Element {
  const history = useHistory();
  const {types, setTypes} = useContext(Context);

  const gotPage = (url: string) => {
    history.push(`/home${url}`);
  };

  const getTypeBd = async () => {
    if(await getLocalStorage('token')){
      const typesReturn = await requestData('/types');
      setTypes(typesReturn);
    }
  };

  useEffect(() => {
    getTypeBd();
  }, []);

  return (
      <ul>
        { types.map((type: any, index: Key) => 
        <li key={ index }>
          <button type="button" onClick={(url) => gotPage(type.url)}>
          {type.name}
          </button>
        </li>
        )}
      </ul>
    );
  
}

export default TypeToDoList;