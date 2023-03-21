import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";
import PanelDetal from "./PanelDetal";

function ListDetal(): JSX.Element {
  const history = useHistory();

  const {
    dateListDetal,
    emojis,
    edtorTrue,
  } = useContext(Context);

  return (
    <>
      <div className="lists-div-0">
      <h2 className="data-task">
        {/* Dia: {formatarData(dateListDetal)} */}
      </h2>
      {dateListDetal !== undefined
        ? dateListDetal?.data
        .map((content: any, index: any) =>
          <div
            className="lists-div-1"
            style={
              edtorTrue?.id === content.id
              ? { backgroundColor: '#b0ddcd' }
              : { backgroundColor: '#d5f8ec'
            }}
            key={index}
            id={content.id}
          >
            <div className="lists-div-1-div">
              <div className="lists-div-1-div-div">
                <div
                  className="lists-div-1-div-div-div-date"
                  title="Task day and time"
                >
                  {formatarData(content.date)} - {content.time}
                </div>
                <div className="lists-div-1-div-div-div-panel">
                <PanelDetal
                  data={dateListDetal?.data}
                  id={content.id}
                  status={content.status}
                  date={dateListDetal?.date}
                  idUser={dateListDetal?.idUser}
                />
                </div>
              </div>
            </div>
          <div className="lists-div-2">
            <div className="lists-div-2-div">
              { emojis?.filter((emoji: any) => emoji.name === content.emoji)
                .map((emoji: any) => (
              <img
                src={emoji.url}
                alt={emoji.name}
                key={emoji.name}
                width='50px'
                title={`Emoji: ${emoji.name}`}
              />
              ))
            }</div>
            <div
              className="lists-div-2-div-2"
              title="Description"
            >
              {content.descript}
            </div>
          </div>
        </div>)
        : history.push(`/home/calendar`)
        }
      </div>
    </>
  );
}

export default ListDetal;