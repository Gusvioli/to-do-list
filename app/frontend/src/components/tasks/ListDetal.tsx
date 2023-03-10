import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";
import PanelDetal from "./PanelDetal";

function ListDetal(): JSX.Element {
  const history = useHistory();

  const {
    dateListDetal,
    setDateListDetal,
    emojis,
  } = useContext(Context);

  useEffect(() => {
    setDateListDetal({ ...dateListDetal })
  }, [setDateListDetal]);


  return (
    <>
      {dateListDetal.data ? dateListDetal.data.map((content: any, index: any) =>
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
         Id: #{content.id}
        <div style={{ padding: '5px 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            {content.status}
          </div>
          <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'end' }}>
            <PanelDetal
              data={dateListDetal.data}
              id={content.id}
              status={content.status}
              date={dateListDetal.date}
              idUser={dateListDetal.idUser}
            />
          </div>
          <span>
            {formatarData(content.date)}
          </span> - { ' ' }
          <span>
            {content.time}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent:'start', alignItems: 'center' }}>
          <div style={{ padding: '5px 15px' }}>
            { emojis.filter((emoji: any) => emoji.name === content.emoji)
              .map((emoji: any) => (
            <img src={emoji.url} alt={emoji.name} key={emoji.name} width='50px' />))
          }</div>
          <div style={{ padding: '5px', font: '26px' }}>{content.descript}</div>
        </div>
      </div>) : history.push(`/home/calendar`)}
    </>
  );
}

export default ListDetal;