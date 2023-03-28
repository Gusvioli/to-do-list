import {useContext} from "react";
import { useQueryClient } from "react-query";
import Context from "../../context/Context";
import formatarData from "../../utils/formatarData";
import PanelSimple from "./PanelSimple";
import "../../styles/lists/lists.css";
import controlPages from "../utils/controlPages/controlPages";
import ListSimplesEnum from "../utils/enums/ListSimplesEnum";
import pages from "../utils/controlPages/Pages";
import dateNowTime from "../utils/dates/dateNowTime";

function ListSimple(): JSX.Element {
  const {emojis, page} = useContext(Context);
  const statusConsts = useQueryClient();
  const dataContents = statusConsts.getQueryData<any>("contents");
  const dataContentsPages = pages(ListSimplesEnum.PAGES, dataContents, dateNowTime().dateDb)[page];

  return (
    <>
    <div className="lists-div-0">
      <h2 className="data-task">
        Day: {dateNowTime().dateNow}
      </h2>
      {dataContentsPages ? dataContentsPages.map((content: any) =>
      <div
        className="lists-div-1"
        key={content.id}
        id={content.id}
        style={
          content.status === 'Concluido'
          ? { backgroundColor: '#b0ddcd' }
          : {}}
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
                  createdAt={content.createdAt}
                  updatedAt={content.updatedAt}
                />
              </div>
            </div>
          </div>
          <div className="lists-div-2">
            <div className="lists-div-2-div">
              { emojis?.filter((emoji: any) => emoji.name === content.emoji)
                .map((emoji: any) => (
              <img
                key={emoji.name}
                src={emoji.url}
                alt={emoji.name}
                width='45px'
              />
              ))
            }
            </div>
              <div className="lists-div-2-div-2" >
                {content.description}
              </div>
            </div>
          </div>
          )
          :
          <div className="msg-no-task">
            Não há tarefas para hoje
          </div>
        }
        <div>
          {dataContentsPages
          ? controlPages(ListSimplesEnum?.PAGES, dataContents, dateNowTime().dateDb)
          : ''}
        </div>
      </div>
    </>
  );
}

export default ListSimple;
