import { useContext } from "react";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";

function PrevewTasck({date, descript, dateTime}: any) {
  const {logoEmoji, emojis} = useContext(Context);
  return (
    <>
      <div style={{
        border: '3px dotted #ccc',
        width: '40%',
        height: '100px',
        margin: '5px',
        padding: '7px 5px',
        overflow: 'auto',
        borderRadius: '9px',
        backgroundColor: '#f1f4f5',
        display: 'flex',
        }}>
        <div style={{ padding: '5px 15px' }}>
          {
             formatarData(date).includes('undefined') ? '' : formatarData(date)
          }
          {dateTime && ' - '}
          {dateTime}
        </div>
        <div style={{ display: 'flex', justifyContent:'start', alignItems: 'center' }}>
          <div style={{ padding: '5px 15px' }}>
            { emojis.filter((emoji: any) => emoji.name === logoEmoji)
              .map((emoji: any) => (
            <img src={emoji.url} alt={emoji.name} key={emoji.name} width='50px' />))
          }</div>
          <div style={{ padding: '5px', font: '26px' }}>{descript}</div>
        </div>
        </div>
    </>
  );
}

export default PrevewTasck;