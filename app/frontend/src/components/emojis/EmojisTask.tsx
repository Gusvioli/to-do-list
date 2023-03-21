import {useContext, useDeferredValue} from "react";
import {useQuery} from "react-query";
import Context from "../../context/Context";
import '../../styles/components/task/emojisTasck.css'

function EmojisTask(): JSX.Element {
  const {
    setNameEmojiUrl,
    emojisLocal,
    setEmojisLocal,
    emojis,
    setIsActiveEmojisPanel,
  } = useContext(Context);
  const deferred = useDeferredValue(emojis);

  const closeEmojisPanel = () => setIsActiveEmojisPanel(false);

  const addEmojiName = (emojisName: any) => {
    const { id, src } = emojisName.target;
    setNameEmojiUrl({ name: id, url: src });
    closeEmojisPanel();
  };

  const searchEmojis = async (e: any) => {
    const { value } = e.target;
    setEmojisLocal(deferred?.filter((emoji: any) => deferred
      .map((emoji: any) => emoji.name)
      .filter((emoji: any) => emoji
      .includes(value)).includes(emoji.name)));
  };

  return (
      <div className="div-inpute-mojis">
        <button
          type="button"
          className="button-close-emojis"
          onClick={closeEmojisPanel}
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
      {!emojis
      ? <p>Loading emojis...</p>
      :
        (
        <ul className="div-ul-emojis">
          {
            deferred?.map((emoji: any) =>
              (
                <li key={emoji.name}>
                  <img
                    src={emoji.url}
                    alt={emoji.name}
                    width={35}
                    id={emoji.name}
                    onClick={ (e) => addEmojiName(e) }
                  />
                </li>
              )
            )
          }
          </ul>
        )
      }
    </div>
  );
}

export default EmojisTask;