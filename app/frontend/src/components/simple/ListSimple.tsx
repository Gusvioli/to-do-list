import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestDataId } from "../../services/requests";
import formatarData from "../../utils/formatarData";
import getLocalStorage from "../../utils/getLocalStorage";
import PanelDetalSimple from "../tasks/PanelDetalSimple";
import '../../styles/lists/lists.css';

function ToDuListSimple(): JSX.Element {
  const {
    emojis,
    setContents,
    contents,
    dateListDetal,
    setDateListDetal,
    idUserProvider,
    setIdUserProvider,
  } = useContext(Context);
  const history = useHistory();
  const [date] = useState(new Date()
    .toLocaleDateString().split('/')
    .reverse()
    .join('-')
  );

  useEffect(() => {
    const getIdUser = async () => {
      if(await getLocalStorage('token') && await getLocalStorage('idUser')){
        const data = await getLocalStorage('idUser');
        setIdUserProvider(data.idUser);
      }
    };
    getIdUser();
  }, [setIdUserProvider]);

  useEffect(() => {
    setDateListDetal({ ...dateListDetal });
  }, [setDateListDetal]);

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
  }, [history.location.pathname, setContents, dateListDetal]);


  return (
    // Template Simples
    <>
    <div className="lists-div-0">
        <h2 className="data-task">
          Dia: {formatarData(date)}
        </h2>
      {contents.find((fil: any) => fil.date === date)
      ? contents.filter((fil: any) => fil.date === date)
      .map((content: any, index: any) =>
      <div className="lists-div-1" key={index} id={content.id}>
          <div className="lists-div-1-div">
            <div className="lists-div-1-div-div">
              <div className="lists-div-1-div-div-div-id">
                Id: #{content.id}
              </div>
              <div className="lists-div-1-div-div-div-date">
                {formatarData(content.date)} - {content.time}
              </div>
              <div className="lists-div-1-div-div-div-panel">
                <PanelDetalSimple
                  data={contents}
                  id={content.id}
                  status={content.status}
                  date={content.date}
                  idUser={idUserProvider}
                />
              </div>
            </div>
          </div>
          <div className="lists-div-2">
            <div className="lists-div-2-div">
              { emojis.filter((emoji: any) => emoji.name === content.emoji)
                .map((emoji: any) => (
              <img
                src={emoji.url}
                alt={emoji.name}
                key={emoji.name}
                width='45px'
              />
              ))
            }</div>
            <div className="lists-div-2-div-2">
              {content.descript}
            </div>
          </div>
          </div>)
          :
          <div className="msg-no-task">
            Não há tarefas para hoje
          </div>}
      </div>

    </>
  );
}

export default ToDuListSimple;
