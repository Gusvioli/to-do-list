import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestDataId } from "../../services/requests";
import formatarData from "../../utils/formatarData";
import getLocalStorage from "../../utils/getLocalStorage";
import PanelDetalSimple from "../calendar/PanelDetalSimple";

function ToDuListSimple(): JSX.Element {
  const {
    emojis,
    setContents,
    contents,
    dateListDetal,
    setDateListDetal
  } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    setDateListDetal({ ...dateListDetal })
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
  }, [history.location.pathname, setContents]);

  return (
    // Template Simples
    <>
    {contents.map((content: any, index: any) =>
    <div style={{
        border: '1px solid #ccc',
        width: '40%',
        height: '150px',
        margin: '5px',
        padding: '7px 5px',
        overflow: 'auto',
        borderRadius: '9px',
        backgroundColor: '#f1f4f5',
        }} key={index}>
        <div style={{ padding: '5px 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            {content.status}
          </div>
          <div>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'end' }}>
              <PanelDetalSimple
                data={{data: contents}}
                id={content.id}
                status={content.status}
                date={content.date}
              />
            </div>
            <span>{formatarData(content.date)}</span> -
            <span>{content.time}</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent:'start', alignItems: 'center' }}>
          <div style={{ padding: '5px 15px' }}>
            { emojis.filter((emoji: any) => emoji.name === content.emoji)
              .map((emoji: any) => (
            <img src={emoji.url} alt={emoji.name} key={emoji.name} width='50px' />))
          }</div>
          <div style={{ padding: '5px', font: '26px' }}>{content.descript}</div>
        </div>
        </div>)}
    </>
  );
}

export default ToDuListSimple;
