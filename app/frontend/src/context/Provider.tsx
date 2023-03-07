import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }: { children: any}) {
  const [texts, setTexts] = useState([]);
  const [email, setEmail] = useState('');
  const [types, setTypes] = useState([]);
  const [contents, setContents] = useState([]);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState({name: '', localStore: false});
  const [isTokenTrue, setIsTokenTrue] = useState(false);
  const [listarContents, setListarContents] = useState(false);
  const [descript, setDescript] = useState('');
  const [logoEmoji, setLogoEmoji] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [dateListDetal, setDateListDetal] = useState({day: 0, month: 0, year: 0});
  const [codeStatusMessage, setCodeStatusMessage] = useState({ status: 0, message: ''});
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
