import { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";

function EmojisTasck() {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    emojis,
    setEmojis,
    setLogoEmoji,
  } = useContext(Context);

  const addEmojisDescript = (emojis: any) => {
    const { id } = emojis.target;
    setLogoEmoji(id);
  };

  useEffect(() => {
    const fetchEmojis = async () => {
      const response = await fetch('https://api.github.com/emojis');
      const data = await response.json();
      const emojis: any[] = Object.keys(data).map((key) => ({
        name: key,
        url: data[key],
      }));
      setEmojis(emojis);
      setLoading(false);
    };
    fetchEmojis();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading emojis...</p>
      ) : (
        <ul style={{
          width: '120px',
          height: '120px',
          border: '1px solid #ccc',
          padding: '10px',
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'start',
          overflow: 'auto',
          listStyleType: 'none',
          }}>
          {emojis.map((emoji: any) => (
            <li key={emoji.name} style={{ padding: '2px' }}>
              <img
                src={emoji.url}
                alt={emoji.name}
                width={30}
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