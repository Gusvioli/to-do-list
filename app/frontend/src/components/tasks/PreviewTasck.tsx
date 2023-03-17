import { useContext } from "react";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";
import '../../styles/components/task/previewTask.css'

function PrevewTasck({date, descript, dateTime, caracters}: any) {
  const {logoEmoji, emojis} = useContext(Context);
  return (
    <>
      <div className="div-prevew">
        <span>{caracters}/200</span>
        <div className="div-prevew-div-1">
          {
             formatarData(date).includes('undefined') ? '' : formatarData(date)
          }
          {dateTime && ' - '}
          {dateTime}
        </div>
        <div className="div-prevew-div-2">
          <div>
            { emojis.filter((emoji: any) => emoji.name === logoEmoji)
              .map((emoji: any) => (
              <img src={emoji.url} alt={emoji.name} key={emoji.name} width='50px' />))
            }
          </div>
          <div className="div-prevew-div-1-div">{descript}</div>
        </div>
        </div>
    </>
  );
}

export default PrevewTasck;