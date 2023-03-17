import React, { useState } from 'react';
import Context from './Context';
import { UserName, EdtorTrue, CodeStatusMessage, DateListDetal } from './Types';

function Provider({ children }: { children: any}) {
  const [texts, setTexts] = useState([]);
  const [email, setEmail] = useState('');
  const [types, setTypes] = useState([]);
  const [contents, setContents] = useState([]);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState<UserName | undefined>();
  const [isTokenTrue, setIsTokenTrue] = useState(false);
  const [listarContents, setListarContents] = useState(false);
  const [descript, setDescript] = useState('');
  const [logoEmoji, setLogoEmoji] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [emojisLocal, setEmojisLocal] = useState([]);
  const [dateListDetal, setDateListDetal] = useState<DateListDetal | undefined>();
  const [codeStatusMessage, setCodeStatusMessage] = useState<CodeStatusMessage | undefined>();
  const [date, setDate] = useState('');
  const [idUserProvider, setIdUserProvider] = useState(0);
  const [dateTime, setDateTime] = useState('');
  const [search, setSearch] = useState('');
  let [caracters, setCaracters] = useState(0);
  let [isEmojisTasck, setIsEmojisTasck] = useState(false);
  const [edtorTrue, setEdtorTrue] = useState<EdtorTrue | undefined>();
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
    idUserProvider,
    setIdUserProvider,
    search,
    setSearch,
    isEmojisTasck,
    setIsEmojisTasck,
    caracters,
    setCaracters,
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
    idUserProvider,
    setIdUserProvider,
    search,
    setSearch,
    isEmojisTasck,
    setIsEmojisTasck,
    caracters,
    setCaracters,
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
