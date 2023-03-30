import { useContext, useState } from 'react';
import { useQueryClient } from 'react-query';
import Context from '../../context/Context';
import { requestDelete, requestUpdate } from '../../services/requests';
import getLocalStorage from '../../utils/getLocalStorage';
import { hendleClearAll } from '../utils/clears/HendleclearAll';
import './style/panelSimple.css';
import "../../styles/lists/lists.css";
import formatarTime from '../../utils/formatarTime';

function PanelSimple({
  id,
  status,
  date,
  idUser,
  horaMinutes,
  description,
  emojiName,
  createdAt,
  updatedAt,
}: {
  id: any;
  status: string;
  date: string;
  horaMinutes: string;
  description: string;
  idUser: number;
  emojiName: any;
  createdAt: string;
  updatedAt: string;
}): JSX.Element {
  const {
    setFormCreateAndEditTask,
    setStatusTask,
    setEditrTrue,
    setNameEmojiUrl,
    emojis,
  } = useContext(Context);

  const dataUserQuery = useQueryClient();

  const hendleEdit = async (e: any) => {
    window.scrollTo(0, 0);
    const {id} = e.target;
    setFormCreateAndEditTask({
      date: date,
      horaMinutes,
      description,
      caracters: description.length,
    });
    setStatusTask({status, id});
    setEditrTrue(true);
    const emojiReturn = emojis.filter((emoji: any) => emoji.name === emojiName.name);
    setNameEmojiUrl({name: emojiName.name, url: emojiReturn[0].url});
  };

  const hendleDelete = async (e: any) => {
    const { id } = e.target;
    const dataContents = dataUserQuery.getQueryData<any>("contents");
    if (dataContents) {
      const dataStatus = dataContents.map((dataContent: any) => {
        if (dataContent.id !== Number(id)){
          return {
            ...dataContent,
          };
        }
      }).filter((dataContent: any) => dataContent !== undefined);
      dataUserQuery.setQueryData("contents", dataStatus);
    }
    await requestDelete
      ('/deleteContents',
        {
          id,
          date,
          idUser,
        });
    hendleClearAll(setFormCreateAndEditTask, setStatusTask);
  };

  const hendlestatus = async (e: any) => {
    const getIdUser = await getLocalStorage('idUser');
    const { id } = e.target;
    const idSplit = id.split('-');
    const dataContents = dataUserQuery.getQueryData<any>("contents");
    if (dataContents) {
      const dataStatus = dataContents.map((dataContent: any) => {
        if (dataContent.id === Number(idSplit[1])) {
          return {
            ...dataContent,
            status: idSplit[0],
          };
        } else {
          return dataContent;
        }
      });
      dataUserQuery.setQueryData("contents", dataStatus);
    }
    await requestUpdate
    ('/contentsUpdate', {
      id: Number(idSplit[1]),
      idUser: getIdUser,
      date,
      status: idSplit[0],
    });
  };

  return(
  <>
    <div id="top">
      <form>
        <button
          id={id}
          type="button"
          onClick={(e) => hendleEdit(e)}
          className="panel-simple-div-form-button-edit"
        >
          <img
            id={id}
            className="panel-simple-div-form-button-img"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png?v8"
            alt='edit'
            title="Edit"
          />
        </button>
        <button
          id={id}
          name="delete"
          type="button"
          onClick={(e) => hendleDelete(e)}
          className="panel-simple-div-form-button-delete"
        >
          <img
            id={id}
            className="panel-simple-div-form-button-img"
            src="https://github.githubassets.com/images/icons/emoji/unicode/1faa6.png?v8"
            alt='delete'
            title="Delete"
          />
        </button>
        <button
          id={`Concluido-${id}`}
          type="button"
          onClick={(e) => hendlestatus(e)}
          hidden={status === 'Concluido' ? true : false}
          className="panel-simple-div-form-button-pendente"
          >
            <img
              className="panel-simple-div-form-button-img"
              src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png?v8"
              id={`Concluido-${id}`}
              alt='Concluded'
              title="Concluded"
            />
        </button>
        <button
          id={`Pendente-${id}`}
          type="button"
          name="Pendente"
          onClick={(e) => hendlestatus(e)}
          hidden={status === 'Pendente' ? true : false}
          className="panel-simple-div-form-button-pendente"
        >
          <img
            className="panel-simple-div-form-button-img"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png?v8"
            id={`Pendente-${id}`}
            alt='Deconclude'
            title="Deconclude"
          />
          </button>
          <img
            className="panel-simple-div-form-button-img"
            src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d5.png?v8"
            id={id}
            alt='Deconclude'
            title={
              `id: #${id}
              created:
              ${createdAt.split('T')[0]} - ${formatarTime(createdAt)}
              updated:
              ${updatedAt.split('T')[0]} - ${formatarTime(updatedAt)}`
            }
          />
      </form>
    </div>
  </>
  );

}

export default PanelSimple;
