import getLocalStorage from "../../utils/getLocalStorage";
import {requestDelete, requestUpdate} from "../../services/requests";
import {useContext, useDeferredValue} from "react";
import Context from "../../context/Context";
import { useHistory } from "react-router-dom";

function PanelDetalSimple(data: any): JSX.Element {
  const {
    dateListDetal,
    setDateListDetal,
    setEdtorTrue,
    setLogoEmoji,
    setDescript,
    setDate,
    setDateTime,
    setCaracters,
    setCodeStatusMessage,
  } = useContext(Context);
  const deferredNewData = useDeferredValue(dateListDetal);
  const history = useHistory();

  const hendleEdit = () => {
  };

  const hendleDelete = async () => {
  };

  const hendleConcluido = async (e: any) => {
  };

  const hendlePendente = async (e: any) => {
  };

  return(
  <>
    <div id="top">
      <form>
        <button
          type="button"
          onClick={hendleEdit}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1px' }}
        >
          <img
            style={{ width: '18px', height: '18px' }}
            src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png?v8"
            alt='edit'
            title="Edit"
          />
        </button>
        <button
          type="button"
          onClick={hendleDelete}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1px' }}
        >
          <img
            style={{ width: '18px', height: '18px' }}
            src="https://github.githubassets.com/images/icons/emoji/unicode/1faa6.png?v8"
            alt='delete'
            title="Delete"
          />
          </button>
        <button
          id={deferredNewData !== undefined && deferredNewData.id}
          type="button"
          onClick={(e) => hendleConcluido(e)}
          hidden={data.status === 'Concluido' ? true : false}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1px' }}
          >
          <img
            style={{ width: '18px', height: '18px' }}
            src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png?v8"
            id={"Concluido"}
            alt='delete'
            title="Concluded"
          />
        </button>
        <button
          id={deferredNewData !== undefined && deferredNewData.id}
          type="button"
          name="Pendente"
          onClick={(e) => hendlePendente(e)}
          hidden={data.status === 'Pendente' ? true : false}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1px' }}
        >
          <img
            style={{ width: '18px', height: '18px' }}
            src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png?v8"
            id={"Pendente"}
            alt='delete'
            title="Deconclude"
          />
          </button>
      </form>
    </div>
  </>
  );
}

export default PanelDetalSimple;
