import { useContext, useDeferredValue, useEffect, useState } from "react";
import Context from "../../../context/Context";
import '../../../styles/components/task/emojisTasck.css'

function EmojisTasck(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    emojis,
    setLogoEmoji,
    setEmojis,
    emojisLocal,
    setEmojisLocal,
    setIsEmojisTasck,
    isEmojisTasck,
  } = useContext(Context);
  const deferred = useDeferredValue(emojisLocal);

  const addEmojisDescript = (emojis: any) => {
    const { id } = emojis.target;
    setLogoEmoji(id);
    setIsEmojisTasck(!isEmojisTasck);
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
      if (emojis) {
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
    }
    fetchEmojis();
  }, [setEmojis]);


  return (
      <div className="div-inpute-mojis">
        <button
          type="button"
          className="button-close-emojis"
          onClick={ () => setIsEmojisTasck(!isEmojisTasck) }
        >
          X
        </button>
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
        <ul className="div-ul-emojis">
          {deferred.map((emoji: any) => (
            <li key={emoji.name}>
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