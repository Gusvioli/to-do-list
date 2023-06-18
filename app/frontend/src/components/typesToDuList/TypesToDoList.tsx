import { useContext } from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router-dom'
import Context from '../../context/Context'
import '../../styles/components/simple/typesToDoList.css'
import dateNowTime from '../utils/dates/dateNowTime'

function TypeToDoList() {
  const { setEditrTrue, setCodeStatusMessage, contents, setDataLocal } =
    useContext(Context)
  const history = useHistory()
  const statusConsts = useQueryClient()

  const gotPage = (url: string) => {
    if (url === '/simple') {
      const dataContent = contents.filter(
        (element: any) => element.date === dateNowTime().dateDb,
      )
      statusConsts.setQueryData<any>('contents', dataContent)
      setDataLocal(dateNowTime().dateDb)
      setEditrTrue(false)
      setCodeStatusMessage({
        status: 0,
        message: '',
      })
      history.push(`/home/simple`)
    }
    if (url === '/calendar') {
      statusConsts.setQueryData<any>('contents', contents)
      setEditrTrue(false)
      setCodeStatusMessage({
        status: 0,
        message: '',
      })
      history.push(`/home/calendar`)
    }
  }

  return (
    <ul className="ul-buttons-types-to-do-list">
      <li>
        <img
          style={{ cursor: 'pointer', margin: '10px' }}
          width={40}
          height={40}
          src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d4.png?v8"
          alt="Go to Simple"
          title="Go to Simple"
          onClick={() => gotPage('/simple')}
          hidden={history.location.pathname === '/home/simple'}
        />
      </li>
      <li>
        <img
          style={{ cursor: 'pointer', margin: '10px' }}
          width={40}
          height={40}
          src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c6.png?v8"
          alt="Go to Calendars"
          title="Go to Calendars"
          onClick={() => gotPage('/calendar')}
          hidden={history.location.pathname === '/home/calendar'}
        />
      </li>
    </ul>
  )
}

export default TypeToDoList
