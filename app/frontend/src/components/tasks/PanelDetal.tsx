import getLocalStorage from "../../utils/getLocalStorage";
import {requestDelete, requestUpdate} from "../../services/requests";
import {useContext, useDeferredValue} from "react";
import Context from "../../context/Context";
import { useHistory } from "react-router-dom";

function PanelDetal(data: any): JSX.Element {
  const {
    dateListDetal,
    setDateListDetal,
    setEdtorTrue,
    setLogoEmoji,
    setDescript,
    setDate,
    setDateTime,
  } = useContext(Context);
  const deferredNewData = useDeferredValue(dateListDetal);
  const history = useHistory();

  const hendleEdit = () => {
    setEdtorTrue({
      id: data.id,
      data: data.data.filter((element: any) => element.id === data.id),
    });

    setDescript(data.data.filter((element: any) => element.id === data.id)[0].descript);
    setDate(data.data.filter((element: any) => element.id === data.id)[0].date);
    setDateTime(data.data.filter((element: any) => element.id === data.id)[0].time);

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
    if (returnDelete.data.length === 0) {
      history.push('/home/calendar');
    }
  };

  const hendleConcluido = async (e: any) => {
    const { value } = e.target;
    const { date, id } = data;
    const idUser = await getLocalStorage('idUser');
    const returnUp = await requestUpdate('/contentsUpdate', {
      id,
      idUser,
      date,
      status: value
    });
    setDateListDetal({...returnUp});
  };

  const hendlePendente = async (e: any) => {
    const { value } = e.target;
    const { date, id } = data;
    const idUser = await getLocalStorage('idUser');
    const returnUp = await requestUpdate('/contentsUpdate', {
      id,
      idUser,
      date,
      status: value
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
        >
          editar
          </button>
        <button
          type="button"
          onClick={hendleDelete}
        >
          excluir
          </button>
        <button
          id={deferredNewData.id}
          type="button"
          value="Concluido"
          onClick={(e) => hendleConcluido(e)}
          disabled={data.status === 'Concluido' ? true : false}
          >
          concluido
          </button>
        <button
          id={deferredNewData.id}
          type="button"
          value="Pendente"
          onClick={(e) => hendlePendente(e)}
          disabled={data.status === 'Pendente' ? true : false}
        >
          pendente
          </button>
      </form>
    </div>
  </>
  );
}

export default PanelDetal;
