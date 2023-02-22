import React, { useContext } from "react";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

function ToDuListGenerate(): JSX.Element {
  const {contents, setContents} = useContext(Context);
  // const history = useHistory();

  const getTypeBd = async () => {
    if(await getLocalStorage('token') && await getLocalStorage('idUser')){
      const data = await getLocalStorage('idUser');
      const contents = await requestDataId('/contents', data.idUser);
      setContents(contents);
    }
  };

  useEffect(() => {
    getTypeBd();
  }, [contents]);

  return (
    <>{contents.map((content: any) => content)}</>
  );
}

export default ToDuListGenerate;
