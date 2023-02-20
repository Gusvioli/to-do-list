import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }: { children: any}) {
  const [texts, setTexts] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  }), [
    texts,
    setTexts,
    email,
    setEmail,
    password,
    setPassword,
    codeStatusMessage, 
    setCodeStatusMessage,
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
