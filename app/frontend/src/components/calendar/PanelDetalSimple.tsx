import getLocalStorage from "../../utils/getLocalStorage";
import {requestDelete, requestUpdate} from "../../services/requests";
import {useContext, useDeferredValue} from "react";
import Context from "../../context/Context";
import { useHistory } from "react-router-dom";

function PanelDetalSimple(data: any): JSX.Element {
  const {dateListDetal, setDateListDetal } = useContext(Context);
  const deferredNewData = useDeferredValue(dateListDetal);
  const history = useHistory();

  const hendleEdit = () => {
    console.log('newData');
  };

  const hendleDelete = async () => {
    const idUser = await getLocalStorage('idUser');
    const { date, id } = data;
    const returnDelete = await requestDelete('/deleteContents', {
      id,
      date,
      idUser: idUser.idUser,
    });
    console.log('returnDelete', returnDelete);

    setDateListDetal({...returnDelete});
    if (returnDelete.data.length === 0) {
      history.push('/home/simple');
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
    console.log('returnUp', returnUp);

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
    console.log('returnUp', returnUp);

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

export default PanelDetalSimple;