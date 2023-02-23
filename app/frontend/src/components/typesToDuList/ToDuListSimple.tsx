import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

function ToDuListSimple(): JSX.Element {
  const {contents, setContents} = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const getTypeBd = async () => {
      if(await getLocalStorage('token') && await getLocalStorage('idUser')){
        const data = await getLocalStorage('idUser');
        let dataContents = await requestDataId('/contents', {idUser: data.idUser});
        if (history.location.pathname === '/home/simple') {
          dataContents = dataContents.filter((content: any) => content.type === 'simple');
          setContents(dataContents);
        }
      }
    };
    getTypeBd();
  }, [history.location.pathname, setContents]);

  return (
    // Template Simples
    <>{contents.map((content: any, index: any) =>
    <div key={index} style={{border: '1px solid #ccc', padding: '5px', margin: '5px'}}>
      <div>image: {content.image}</div>
      <div>title: {content.title}</div>
      <div>sub Title: {content.subTitle}</div>
      <div>Descript: {content.descript}</div>
      <div>Created: {content.createdAt}</div>
      <div>Updeted: {content.updatedAt}</div>
      <div>Status: {content.status}</div>
    </div>)}</>
  );
}

export default ToDuListSimple;
