import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";
import PanelDetal from "./PanelDetal";

function ListDetal() {
  const history = useHistory();
  const {dateListDetal, emojis} = useContext(Context);

  useEffect(() => {
  }, []);

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
        <div style={{ padding: '5px 15px' }}>
          <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'end', justifyContent: 'space-between' }}>
            <PanelDetal
              dateListDetal={dateListDetal}
              status={content.status}
              date={content.date}
              id={content.id}
            />
          </div>
          <span>{formatarData(content.date)}</span> -
          <span>{content.time}</span>
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