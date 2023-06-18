import { useContext } from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router-dom'
import Context from '../../context/Context'
import searchControl from '../utils/controlPages/searchControl'
import diasMeses from './functions/diasMeses'
import './styles/listCalendar.css'

function ListCalendar(): any {
  const { contents, setDataLocal, search } = useContext(Context)
  const statusConsts = useQueryClient()
  const getdataContents = statusConsts.getQueryData<any>('contents')
  const history = useHistory()

  const getDateToSend = (
    element: {
      ano: number
      mes: { id: number }
    },
    index: number,
  ) => {
    return `${element.ano}-${element.mes.id}-${
      index + 1 < 10 ? `0${index + 1}` : index + 1
    }`
  } // date para enviar

  const hendleSendDate = (e: any) => {
    const date = e.target.value
    const dataContent = contents.filter((element: any) => element.date === date)
    statusConsts.setQueryData<any>('contents', dataContent)
    setDataLocal(date)
    history.push(`/home/simple`)
  }

  const contlengthContents = (dataLoop: string): string => {
    if (getdataContents) {
      return getdataContents.filter((element: any) => element.date === dataLoop)
        .length > 0
        ? getdataContents.filter((element: any) => element.date === dataLoop)
            .length
        : ''
    } else {
      return ''
    }
  }

  const searshDate = () =>
    search ? searchControl(search, getdataContents) : []

  return (
    <>
      <div className="lists-calendar-div-0">
        {diasMeses().map(
          (element: {
            dias: number
            mes: { id: number; nome: string }
            ano: number
          }) => (
            <div key={element.mes.nome} className="lists-calendar-div-1">
              <h2 title={`Month of: ${element.mes.nome}`} className="data-task">
                {element.mes.nome}
              </h2>
              <div className="lists-calendar-div-div-1">
                {new Array(element.dias).fill('').map((_, index) => (
                  <div
                    key={index}
                    style={
                      searshDate().find(
                        (elementdate: any) =>
                          elementdate.date === getDateToSend(element, index),
                      )
                        ? {
                            border: '5px solid green',
                            opacity: '1',
                            borderRadius: '15px',
                            boxShadow:
                              '0px 0px 10px 0px rgba(145, 170, 170, 0.75)',
                          }
                        : { border: '5px solid transparent', opacity: '1' }
                    }
                  >
                    <div
                      key={index}
                      className="lists-calendar-div-2"
                      style={
                        contlengthContents(getDateToSend(element, index)) === ''
                          ? { opacity: '0.4' }
                          : { opacity: '1' }
                      }
                    >
                      <div className="lists-calendar-div-3">
                        <div title="Amounts of tasks on that day">
                          {contlengthContents(getDateToSend(element, index))}
                        </div>
                        <h3 title={`Day: ${index + 1}`}>{index + 1}</h3>
                        <div>
                          <button
                            type="button"
                            value={getDateToSend(element, index)}
                            onClick={(e) => hendleSendDate(e)}
                            hidden={
                              contlengthContents(
                                getDateToSend(element, index),
                              ) === ''
                            }
                            title="Open day"
                          >
                            {' '}
                            Open day
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </>
  )
}

export default ListCalendar
