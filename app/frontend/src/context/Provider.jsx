import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [texts, setTexts] = useState([]);
  const memorize = React.useMemo(() => ({
    texts,
    setTexts,
  }), [
    texts,
    setTexts,
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
