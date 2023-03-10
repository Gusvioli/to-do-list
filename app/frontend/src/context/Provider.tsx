import React, { useState } from 'react';
import Context from './Context';
import { UserName, EdtorTrue, CodeStatusMessage, DateListDetal } from './Types';

function Provider({ children }: { children: any}) {
  const [texts, setTexts] = useState([]);
  const [email, setEmail] = useState('');
  const [types, setTypes] = useState([]);
  const [contents, setContents] = useState([]);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState<UserName>();
  const [isTokenTrue, setIsTokenTrue] = useState(false);
  const [listarContents, setListarContents] = useState(false);
  const [descript, setDescript] = useState('');
  const [logoEmoji, setLogoEmoji] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [emojisLocal, setEmojisLocal] = useState([]);
  const [dateListDetal, setDateListDetal] = useState<DateListDetal>();
  const [codeStatusMessage, setCodeStatusMessage] = useState<CodeStatusMessage>();
  const [date, setDate] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [edtorTrue, setEdtorTrue] = useState<EdtorTrue>();
  const memorize = React.useMemo(() => ({
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
    logoEmoji,
    setLogoEmoji,
    listarContents,
    setListarContents,
    dateListDetal,
    setDateListDetal,
    date,
    setDate,
    dateTime,
    setDateTime,
    edtorTrue,
    setEdtorTrue,
    emojisLocal,
    setEmojisLocal,
  }), [
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
    logoEmoji,
    setLogoEmoji,
    listarContents,
    setListarContents,
    dateListDetal,
    setDateListDetal,
    date,
    setDate,
    dateTime,
    setDateTime,
    edtorTrue,
    setEdtorTrue,
    emojisLocal,
    setEmojisLocal,
  ]);
  return (
    <Context.Provider
      value={ memorize }
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;
