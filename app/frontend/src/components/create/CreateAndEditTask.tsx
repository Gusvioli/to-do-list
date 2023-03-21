import { MouseEvent, useContext } from "react";
import CreateTasckEnum from "../utils/enums/CreateTasckEnum";
import Context from "../../context/Context";
import EmojisTasck from "../emojis/EmojisTask";
import '../../styles/components/task/createAndEditTask.css'
import { requestCreate, requestUpdate } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";
import { exibirMsgs } from "../utils/msgs/exibirMsgs";
import { hendleClearAll } from "../utils/clears/HendleclearAll";
import { hendleClear } from "../utils/clears/Hendleclear";
import { hendleForm } from "../utils/forms/hendleForm";
import { useQueryClient } from "react-query";

function CreateAndEditTask() {
  const {
    isActiveEmojisPanel, // boolean
    setIsActiveEmojisPanel, // boolean
    nameEmojiUrl, // { name: string, url: string }
    setNameEmojiUrl, // { name: string, url: string }
    formCreateAndEditTask, // { date: string, horaMinutes: string, description: string, caracters: number }
    setFormCreateAndEditTask, // { date: string, horaMinutes: string, description: string, caracters: number }
    setCodeStatusMessage, // { status: number, message: string }
    codeStatusMessage, // { status: number, message: string }
    statusTask, // string
    setStatusTask, // string
    editTrue, // boolean
    setEditrTrue, // boolean
   } = useContext(Context);

   const dataUserQuery = useQueryClient();

  // Função que recebe os dados do formulário e retorna um objeto
  const objEnvio = async (
      getIdUser: { idUser: number },
      nameEmojiUrl: { name: string },
      formCreateAndEditTask: {
        date: string;
        horaMinutes: string;
        description: string;
      },
    ) => {
    return {
      idUser: getIdUser.idUser,
      type: 'simple',
      emoji: nameEmojiUrl.name,
      date: formCreateAndEditTask.date,
      time: formCreateAndEditTask.horaMinutes,
      description: formCreateAndEditTask.description,
      status: 'Pendente',
    };
  };

  // Função que cria e/ou edita uma tarefa
  const createAndEditTask = async (event: any) => {
    const { name } = event.target;
    const getIdUser = await getLocalStorage('idUser');

    try {
      if (name === 'create') {
        const returnData = await requestCreate('/newContents',
          await objEnvio(getIdUser, nameEmojiUrl, formCreateAndEditTask));
        setCodeStatusMessage({
          status: 200,
          message: returnData.message
        });
      }
      if (name === 'edit') {
        const dataContents = dataUserQuery.getQueryData<any>("contents");
        if (dataContents) {
          const dataStatus = dataContents.map((dataContent: any) => {
            if (dataContent.id === Number(statusTask.id)) {
              return {
                ...dataContent,
                emoji: nameEmojiUrl.name,
                date: formCreateAndEditTask.date,
                time: formCreateAndEditTask.horaMinutes,
                description: formCreateAndEditTask.description,
              };
            } else {
              return dataContent;
            }
          });
          dataUserQuery.setQueryData("contents", dataStatus);
        }
        const returnData =  await requestUpdate('/contentsEditUpdate', {
          id: statusTask.id,
          idUser: getIdUser,
          type: 'simple',
          emoji: nameEmojiUrl.name,
          date: formCreateAndEditTask.date,
          status: statusTask.status,
          time: formCreateAndEditTask.horaMinutes,
          description: formCreateAndEditTask.description,
        });
        setCodeStatusMessage({
          status: 200,
          message: returnData.message,
        });
        setEditrTrue(false);
      }
      hendleClearAll(setFormCreateAndEditTask, setNameEmojiUrl);
    } catch (error: any) {
      setCodeStatusMessage({
        status: error.response.status,
        message: error.response.data.message
      })
    }
  };

  const hendleCloseEditor = () => {
    setFormCreateAndEditTask({
      date: '',
      horaMinutes: '',
      description: '',
      caracters: 0,
    });
    setStatusTask({status: '', id: 0});
    setEditrTrue(false);
    setNameEmojiUrl({ name: '', url: '' });
  };

  const hendleemojis = (e: MouseEvent<HTMLButtonElement>) => {
    setIsActiveEmojisPanel(!isActiveEmojisPanel);
  };

  return (
    <>
      <div className="div-0-createTask">
        <div className="div-createTask">
        { isActiveEmojisPanel ? <EmojisTasck /> : ''}
        <form>
          <div className="form-div-date-time-description">
              <div className="form-div-date-time-description-div">
                <button
                  id="0"
                  type="button"
                  className="button-prevew-tasck"
                  onClick={(e) => hendleemojis(e)}
                >
                 { !isActiveEmojisPanel
                    ? <div>
                        <img
                          src={
                            nameEmojiUrl.url.length === 0
                            ? 'https://twemoji.maxcdn.com/v/13.0.1/72x72/1f642.png'
                            : nameEmojiUrl.url
                          }
                          alt={nameEmojiUrl.name}
                          width="30px"
                          height="30px"
                        />
                      </div>
                    : <img
                        src={
                          nameEmojiUrl.url.length === 0
                          ? 'https://twemoji.maxcdn.com/v/13.0.1/72x72/1f642.png'
                          : nameEmojiUrl.url
                        }
                        alt="slightly smiling face"
                        width="30px"
                        height="30px"
                      />
                 }
                </button>
                <label htmlFor="subtitle">
                  <input
                    className="label-input-date"
                    type="date"
                    name="date"
                    id="date"
                    value={formCreateAndEditTask.date}
                    onChange={(e) => hendleForm( e,
                      setFormCreateAndEditTask,
                      formCreateAndEditTask
                    )}
                  />
                </label>
                <label htmlFor="horaMinutes">
                  <input
                    className="label-input-time"
                    type="time"
                    name="horaMinutes"
                    id="horaMinutes"
                    value={formCreateAndEditTask.horaMinutes}
                    onChange={(e) => hendleForm(e,
                      setFormCreateAndEditTask,
                      formCreateAndEditTask
                    )}
                  />
                </label>
                <button
                  className="div-1-criacao-edicao-button"
                  type="button"
                  name={ !editTrue ? 'create' : 'edit' }
                  onClick={ (e) => createAndEditTask(e) }
                >
                  {!editTrue ? 'Create' : 'Edit'}
                </button>
              {!editTrue ? '' : <button
                    type="button"
                    className="div-1-criacao-edicao-button"
                    onClick={hendleCloseEditor}
                  >
                    Close edit
                  </button>
              }
              </div>
              <div className="div-1-criacao-edicao-button-div-clear" >
                {formCreateAndEditTask.caracters}/200
                <button
                    type="button"
                    className="div-1-criacao-edicao-button-clear"
                    onClick={() => hendleClear( setFormCreateAndEditTask,
                      formCreateAndEditTask
                    )}
                >
                  Clear descriptions
                </button>
                <button
                    type="button"
                    className="div-1-criacao-edicao-button-clear"
                    onClick={() => hendleClearAll( setFormCreateAndEditTask,
                      setNameEmojiUrl
                    )}
                >
                  Clear all
                </button>
              </div>
              <label htmlFor="descript">
                <textarea
                  name="description"
                  id="description"
                  cols={55}
                  rows={5}
                  wrap="true"
                  value={formCreateAndEditTask.description}
                  minLength={CreateTasckEnum.MIN}
                  maxLength={CreateTasckEnum.MAX}
                  placeholder={'Description tasck'}
                  onChange={(e) => hendleForm(
                    e,
                    setFormCreateAndEditTask,
                    formCreateAndEditTask
                  )}
                />
              </label>
            </div>
          </form>
        </div>
        <p className={"exibir-msgs"}>{exibirMsgs(codeStatusMessage)}</p>
      </div>
    </>
  );
}

export default CreateAndEditTask;
function closeEmojisPanel() {
  throw new Error("Function not implemented.");
}

