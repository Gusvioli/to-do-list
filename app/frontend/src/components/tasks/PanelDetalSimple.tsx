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
    setEdtorTrue({
      id: data.id,
      data: data.data.filter((element: any) => element.id === data.id),
    });

    const dataZero = data.data.filter((element: any) => element.id === data.id)[0];

    setCaracters(dataZero.descript.length);
    setDescript(dataZero.descript);
    setDate(dataZero.date);
    setDateTime(dataZero.time);
    setLogoEmoji(data
      .data
      .filter((element: any) => element.id === data.id)[0]
      .emoji);
  };

  const hendleDelete = async () => {
    const idUser = await getLocalStorage('idUser');
    const { date, id } = data;
    const returnDelete = await requestDelete('/deleteContents', {
      id,
      date,
      idUser: idUser.idUser,
    });

    setDateListDetal({...returnDelete});
    setDescript('');
    setDate('');
    setLogoEmoji('');
    setDateTime('');
    setCaracters(0);
    setCodeStatusMessage({
      status: 0,
      message: '',
    });
    setEdtorTrue({
      id: 0,
      data: [],
    });
    if (returnDelete.data.length === 0) {
      history.push('/home/simple');
    }
  };

  const hendleConcluido = async (e: any) => {
    const { date, id } = data;

    const idUser = await getLocalStorage('idUser');
    const returnUp = await requestUpdate('/contentsUpdate', {
      id,
      idUser,
      date,
      status: e.target.id
    });
    setDateListDetal({...returnUp});
  };

  const hendlePendente = async (e: any) => {
    const { date, id } = data;
    const idUser = await getLocalStorage('idUser');
    const returnUp = await requestUpdate('/contentsUpdate', {
      id,
      idUser,
      date,
      status: e.target.id
    });
    setDateListDetal({...returnUp});
  };

  return(
  <>
    <div>
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
          />
          </button>
      </form>
    </div>
  </>
  );
}

export default PanelDetalSimple;
