import getLocalStorage from "../../utils/getLocalStorage";

import { requestDelete, requestUpdate } from "../../services/requests";
import { useDeferredValue, useEffect, useState } from "react";

function PanelDetal(data: any): JSX.Element {
  const [newData, setNewData] = useState<any>([]);
  const deferredNewData = useDeferredValue(newData);

  const hendleEdit = () => {
    console.log('dateListDetal', data);
  };

  const hendleDelete = async () => {
    const idUser = await getLocalStorage('idUser');
    const { date, id } = data;
    const returnDelete = await requestDelete('/deleteContents', {
      id: id,
      date: date,
      idUser: idUser.idUser
    });
    if (returnDelete) {
      setNewData({
        ...deferredNewData,
        dateListDetal: {
          ...deferredNewData.dateListDetal,
          data: returnDelete
        }
      });
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
    if (returnUp) {
      setNewData({
        ...deferredNewData,
        status: returnUp[0].status,
        id: returnUp[0].id
      });
    }
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
    if (returnUp) {
      setNewData({
        ...deferredNewData,
        status: returnUp[0].status,
        id: returnUp[0].id
      });
    }
  };

  useEffect(() => {
    setNewData(data);
  }, [data]);

  return(
  <>
    <span style={{ padding: '5px' }}>{deferredNewData.status}</span>
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
          disabled={deferredNewData.status === 'Concluido' ? true : false}
          >
          concluido
          </button>
        <button
          id={deferredNewData.id}
          type="button"
          value="Pendente"
          onClick={(e) => hendlePendente(e)}
          disabled={deferredNewData.status === 'Pendente' ? true : false}
        >
          pendente
          </button>
      </form>
    </div>
  </>
  );
}

export default PanelDetal;