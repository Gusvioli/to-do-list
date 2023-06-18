import { useContext } from 'react'
import { useQueryClient } from 'react-query'
import Context from '../../context/Context'
import formatarData from '../../utils/formatarData'
import PanelSimple from './PanelSimple'
import '../../styles/lists/lists.css'
import controlPages from '../utils/controlPages/controlPages'
import ListSimplesEnum from '../utils/enums/ListSimplesEnum'
import pages from '../utils/controlPages/Pages'
import dateNowTime from '../utils/dates/dateNowTime'
import searchControl from '../utils/controlPages/searchControl'
import MSGS from '../utils/enums/textsEnum'

function ListSimple() {
  const { emojis, page, search, dataLocal } = useContext(Context)
  const statusConsts = useQueryClient()
  const dataContents = statusConsts.getQueryData<any>('contents')
  const dataSearsh = searchControl(search, dataContents)
  const dataContentsPages = pages(
    ListSimplesEnum.PAGES,
    dataSearsh,
    dataLocal || dateNowTime().dateDb,
  )[page]

  return (
    <>
      <div className="lists-div-0">
        <h2 title="Today's date" className="data-task">
          Day: {dataLocal ? formatarData(dataLocal) : dateNowTime().dateNow}
        </h2>
        {dataContentsPages ? (
          dataContentsPages?.map((content: any) => (
            <div
              className="lists-div-1"
              key={content.id}
              id={content.id}
              style={
                content.status === 'Concluido'
                  ? { backgroundColor: '#b0ddcd' }
                  : {}
              }
            >
              <div className="lists-div-1-div">
                <div title="A task" className="lists-div-1-div-div">
                  <div className="lists-div-1-div-div-div-date">
                    {formatarData(content.date)} - {content.time}
                  </div>
                  <div title="A task" className="lists-div-1-div-div-div-panel">
                    <PanelSimple
                      id={content.id}
                      status={content.status}
                      date={content.date}
                      idUser={content.idUser}
                      horaMinutes={content.time}
                      description={content.description}
                      emojiName={{ name: content.emoji }}
                      createdAt={content.createdAt}
                      updatedAt={content.updatedAt}
                    />
                  </div>
                </div>
              </div>
              <div className="lists-div-2">
                <div className="lists-div-2-div">
                  {emojis
                    ?.filter((emoji: any) => emoji.name === content.emoji)
                    .map((emoji: any) => (
                      <img
                        key={emoji.name}
                        src={emoji.url}
                        alt={emoji.name}
                        width="45px"
                        title={emoji.name}
                      />
                    ))}
                </div>
                <div title="description" className="lists-div-2-div-2">
                  {content.description}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="msg-no-task">
            {search ? MSGS.TAREFAPAGE : MSGS.TAREFADIA}
          </div>
        )}
        <div className="paginations">
          {dataLocal
            ? controlPages(ListSimplesEnum?.PAGES, dataContents, dataLocal)
            : controlPages(
                ListSimplesEnum?.PAGES,
                dataContents,
                dateNowTime().dateDb,
              )}
        </div>
      </div>
    </>
  )
}

export default ListSimple
