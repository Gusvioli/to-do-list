import React, { useState } from 'react'
import Context from './Context'
import { UserName, EdtorTrue, CodeStatusMessage, DateListDetal } from './Types'

function Provider({ children }: { children: any }) {
  const [texts, setTexts] = useState([])
  const [email, setEmail] = useState<string>('')
  const [types, setTypes] = useState([])
  const [contents, setContents] = useState([])
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState<UserName | undefined>()
  const [isTokenTrue, setIsTokenTrue] = useState(false)
  const [listarContents, setListarContents] = useState(false)
  const [descript, setDescript] = useState('')
  const [dataLocal, setDataLocal] = useState('')
  const [nameEmojiUrl, setNameEmojiUrl] = useState({ name: '', url: '' })
  const [emojis, setEmojis] = useState([])
  const [emojisLocal, setEmojisLocal] = useState([])
  const [dateListDetal, setDateListDetal] = useState<
    DateListDetal | undefined
  >()
  const [codeStatusMessage, setCodeStatusMessage] = useState<
    CodeStatusMessage | undefined
  >()
  const [date, setDate] = useState('')
  const [idUserProvider, setIdUserProvider] = useState(0)
  const [dateTime, setDateTime] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState<number>(0)
  const [returnFilterArr, setReturnFilterArr] = useState([])
  const [statusTask, setStatusTask] = useState({ status: '', id: 0 })
  const [formCreateAndEditTask, setFormCreateAndEditTask] = useState({
    date: '',
    horaMinutes: '',
    description: '',
    caracters: 0,
  })
  const [caracters, setCaracters] = useState(0)
  const [isEmojisTasck, setIsEmojisTasck] = useState(false)
  const [isActiveEmojisPanel, setIsActiveEmojisPanel] = useState<boolean>(false)
  const [editTrue, setEditrTrue] = useState<EdtorTrue | undefined>()
  const memorize = React.useMemo(
    () => ({
      texts,
      setTexts,
      email,
      setEmail,
      password,
      setPassword,
      codeStatusMessage,
      setCodeStatusMessage,
      types,
      setTypes,
      contents,
      setContents,
      userName,
      setUserName,
      isTokenTrue,
      setIsTokenTrue,
      descript,
      setDescript,
      emojis,
      setEmojis,
      nameEmojiUrl,
      setNameEmojiUrl,
      listarContents,
      setListarContents,
      dateListDetal,
      setDateListDetal,
      date,
      setDate,
      dateTime,
      setDateTime,
      editTrue,
      setEditrTrue,
      emojisLocal,
      setEmojisLocal,
      idUserProvider,
      setIdUserProvider,
      search,
      setSearch,
      isEmojisTasck,
      setIsEmojisTasck,
      caracters,
      setCaracters,
      isActiveEmojisPanel,
      setIsActiveEmojisPanel,
      formCreateAndEditTask,
      setFormCreateAndEditTask,
      statusTask,
      setStatusTask,
      page,
      setPage,
      returnFilterArr,
      setReturnFilterArr,
      dataLocal,
      setDataLocal,
    }),
    [
      texts,
      setTexts,
      email,
      setEmail,
      password,
      setPassword,
      codeStatusMessage,
      setCodeStatusMessage,
      types,
      setTypes,
      contents,
      setContents,
      userName,
      setUserName,
      isTokenTrue,
      setIsTokenTrue,
      descript,
      setDescript,
      emojis,
      setEmojis,
      nameEmojiUrl,
      setNameEmojiUrl,
      listarContents,
      setListarContents,
      dateListDetal,
      setDateListDetal,
      date,
      setDate,
      dateTime,
      setDateTime,
      editTrue,
      setEditrTrue,
      emojisLocal,
      setEmojisLocal,
      idUserProvider,
      setIdUserProvider,
      search,
      setSearch,
      isEmojisTasck,
      setIsEmojisTasck,
      caracters,
      setCaracters,
      isActiveEmojisPanel,
      setIsActiveEmojisPanel,
      formCreateAndEditTask,
      setFormCreateAndEditTask,
      statusTask,
      setStatusTask,
      page,
      setPage,
      returnFilterArr,
      setReturnFilterArr,
      dataLocal,
      setDataLocal,
    ],
  )
  return <Context.Provider value={memorize}>{children}</Context.Provider>
}

export default Provider
