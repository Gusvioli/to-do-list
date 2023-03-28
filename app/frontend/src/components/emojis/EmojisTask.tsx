import {useContext, useDeferredValue} from "react";
import {useQuery, useQueryClient} from "react-query";
import Context from "../../context/Context";
import '../../styles/components/task/emojisTasck.css'

function EmojisTask(): JSX.Element {
  const {
    setNameEmojiUrl,
    emojis,
    setEmojisLocal,
    emojisLocal,
    setIsActiveEmojisPanel,
  } = useContext(Context);

  const emojisDataQuery = useQueryClient();
  const emojisDatas = emojisDataQuery.getQueryData<any>("emojis");
  const deferred = useDeferredValue(emojisDatas);

  const closeEmojisPanel = () => {
    setIsActiveEmojisPanel(false);
    emojisDataQuery.setQueryData<any>("emojis", emojis);
  }

  const addEmojiName = (emojisName: any) => {
    const { id, src } = emojisName.target;
    setNameEmojiUrl({ name: id, url: src });
    closeEmojisPanel();
  };

  const searchEmojis = async (e: any) => {
    const { value } = e.target;
    const newDefered = emojis.filter((emoji: any) => emojis
    .map((emoji: any) => emoji.name)
    .filter((emoji: any) => emoji
    .includes(value)).includes(emoji.name));
    setEmojisLocal(newDefered);

    emojisDataQuery.setQueryData<any>("emojis", newDefered);
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
    </div>
  );
}

export default EmojisTask;