import { useContext, useDeferredValue, useEffect, useState } from "react";
import Context from "../../../context/Context";

function EmojisTasck() {
  const [loading, setLoading] = useState<boolean>(true);
  const [emojisLocal, setEmojisLocal] = useState([]);
  const {
    emojis,
    setLogoEmoji,
    setEmojis,
  } = useContext(Context);
  const deferred = useDeferredValue(emojisLocal);

  const addEmojisDescript = (emojis: any) => {
    const { id } = emojis.target;
    setLogoEmoji(id);
  };

  const searchEmojis = async (e: any) => {
    const { value } = e.target;
    setEmojisLocal(emojis.filter((emoji: any) => emojis
      .map((emoji: any) => emoji.name)
      .filter((emoji: any) => emoji
      .includes(value)).includes(emoji.name)));
  };

  useEffect(() => {
    const fetchEmojis = async () => {
      const response = await fetch('https://api.github.com/emojis');
      const data = await response.json();
      const responseEmojis: any[] | any = Object.keys(data).map((key) => ({
        name: key,
        url: data[key],
      }));
      setEmojisLocal(responseEmojis);
      setEmojis(responseEmojis);
      setLoading(false);
    };
    fetchEmojis();
  }, [setEmojis]);

  return (
      <div style={{
        maxWidth: '180px',
        maxHeight: '150px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center' }}
      >
      <input
        type="text"
        name="buscaEmojis"
        id="buscaEmojis"
        placeholder="Emoji pesquisa"
        onChange={ (e) => searchEmojis(e) }
      />
      {loading ? (
        <p>Loading emojis...</p>
      ) : (
        <ul style={{
          width: '180px',
          height: '100px',
          border: '1px solid #ccc',
          padding: '10px',
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
          listStyleType: 'none',
          }}>
          {deferred.map((emoji: any) => (
            <li key={emoji.name} style={{ padding: '2px' }}>
              <img
                src={emoji.url}
                alt={emoji.name}
                width={35}
                id={emoji.name}
                onClick={ (e) => addEmojisDescript(e) }
               />
            </li>
          ))}
        </ul>
      )}
    </div>
  ); 
}

export default EmojisTasck;