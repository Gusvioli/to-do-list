import {useContext} from "react";
import { useQueryClient } from "react-query";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";
import PanelSimple from "./PanelSimple";
import "../../styles/lists/lists.css";

function ListSimple(): JSX.Element {
  const {emojis} = useContext(Context);

  const dateDb = new Date().toISOString().split("T")[0];

  const dateNow = new Date()
  .toISOString().split("T")[0]
  .split("-").reverse().join("/");

  const statusConsts = useQueryClient();
  const dataContents = statusConsts.getQueryData<any>("contents");

  return (
    <>
    <div className="lists-div-0">
        <h2 className="data-task">
          Dia: {dateNow}
        </h2>
      {dataContents?.find((fil: any) => fil.date === dateDb)
      ? dataContents?.filter((fil: any) => fil.date === dateDb)
      .map((content: any) =>
      <div
        className="lists-div-1"
        key={content.id}
        id={content.id}
      >
          <div className="lists-div-1-div">
            <div className="lists-div-1-div-div">
              <div className="lists-div-1-div-div-div-date">
                {formatarData(content.date)} - {content.time}
              </div>
              <div className="lists-div-1-div-div-div-panel">
                <PanelSimple
                  id={content.id}
                  status={content.status}
                  date={content.date}
                  idUser={content.idUser}
                  horaMinutes={content.time}
                  description={content.description}
                  emojiName={{name: content.emoji}}
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
            }
            </div>
            <div className="lists-div-2-div-2">{content.description}</div>
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

export default ListSimple;
