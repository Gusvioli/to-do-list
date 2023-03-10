import { ChangeEvent, useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestCreate, requestUpdate } from "../../services/requests";
import codeMenssage from "../../services/status";
import getLocalStorage from "../../utils/getLocalStorage";
import ListCalendar from "../calendar/ListCalendar";
import ToDuListSimple from "../simple/ListSimple";
import EmojisTasck from "./emojis/EmojisTasck";
import ListDetal from "./ListDetal";
import PrevewTasck from "./PreviewTasck";

function CreateTasck() {
  const {
    descript,
    setDescript,
    setLogoEmoji,
    logoEmoji,
    setCodeStatusMessage,
    codeStatusMessage,
    edtorTrue,
    setEdtorTrue,
    date,
    setDate,
    dateTime,
    setDateTime,
    setDateListDetal,
  } = useContext(Context);
  const history = useHistory();

  // Função para pegar os dados do input
  const hendleForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
      if (id === 'date') setDate(value);
      if (id === 'horaMinutes') setDateTime(value);
      if (id === 'descript') setDescript(value);

  };

  // Função para exibir as mensagens de erro ou sucesso
  const exibirMsgs = () => {
    if (codeStatusMessage?.status !== 0 && codeStatusMessage?.message !== '') {
      return `${codeMenssage(codeStatusMessage?.status)}, ${codeStatusMessage?.message}`;
    }return '';
  };

  const hendleCreateTasck = async () => {
    try{
      const getIdUser = await getLocalStorage('idUser');
      const returnData = await requestCreate('/newContents', {
        idUser: getIdUser.idUser,
        type: 'simple',
        emoji: logoEmoji,
        date,
        time: dateTime,
        descript,
        status: 'Pendente',
      });

      setDateListDetal(returnData);

      setCodeStatusMessage({
        status: 200,
        message: returnData.message
      });

      setDescript('');
      setDate('');
      setLogoEmoji('');
      setDateTime('');
      setEdtorTrue({
        id: 0,
        data: [],
      });

  } catch (error: any) {
    // Salva o status e a messagem vinda do backend retornando o erro
    setCodeStatusMessage({
      status: error.response.status,
      message: error.response.data.message
    });
  }
  };

  const hendleUpdateTasck = async () => {
    try{
      const getIdUser = await getLocalStorage('idUser');

      const returnData = await requestUpdate('/contentsEditUpdate', {
        id: edtorTrue.data[0].id,
        idUser: getIdUser,
        type: 'simple',
        emoji: logoEmoji,
        date,
        time: dateTime,
        descript,
        status: 'Pendente',
      });

      setDateListDetal(returnData.data);

      setCodeStatusMessage({
        status: 200,
        message: returnData.message
      });

      setDescript('');
      setDate('');
      setLogoEmoji('');
      setDateTime('');
      setEdtorTrue({
        id: 0,
        data: [],
      });

  } catch (error: any) {
    // Salva o status e a messagem vinda do backend retornando o erro
    setCodeStatusMessage({
      status: error.response.status,
      message: error.response.data.message
    });
  }
  };

  const handleCloseEdtor = () => {
    setDescript('');
    setDate('');
    setLogoEmoji('');
    setDateTime('');
    setEdtorTrue({
      id: 0,
      data: [],
    });
  };

  return (
    <>
      <p>{exibirMsgs()}</p>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        width: 'auto' }}
      >
      <EmojisTasck />
      <form>
          {edtorTrue?.id === 0
          ? <div>Modo Criação</div>
          : <div>Modo edição da task id #{edtorTrue?.id}
              <button type="button" onClick={handleCloseEdtor}>X</button>
            </div>
          }
          <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'flex-start',  }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
              <label htmlFor="subtitle">
                <input
                  style={{
                    width: '110px',
                    padding: '2px',
                    margin: '2px',
                    opacity: edtorTrue?.id > 0 ? 0.4 : 1,
                  }}
                  type="date"
                  name="date"
                  id="date"
                  disabled={edtorTrue?.id > 0}
                  onChange={(e) => hendleForm(e)} />
              </label>
              <label htmlFor="horaMinutes">
                <input
                  style={{ width: '110px', padding: '2px', margin: '2px' }}
                  type="time"
                  name="horaMinutes"
                  id="horaMinutes"
                  placeholder="00:00"
                  onChange={(e) => hendleForm(e)} />
              </label>
            </div>
            <label htmlFor="descript">
            <textarea
              style={{ width: 'auto', height: 'auto', padding: '2px', margin: '2px' }}
              name="descript"
              id="descript"
              cols={30}
              rows={6}
              wrap="true"
              value={descript}
              maxLength={200}
              placeholder={'Descript tasck'}
              onChange={(e) => hendleForm(e)} />
          </label>

          {edtorTrue?.id === 0
          ? <button
              style={{ width: 'auto', height: '40px', padding: '2px'}}
              type="button"
              onClick={hendleCreateTasck}
              >
              Create Tasck
            </button>
          : <button
              style={{ width: 'auto', height: '40px', padding: '2px'}}
              type="button"
              onClick={hendleUpdateTasck}
              >
              Edit Tasck
            </button>
        }


          </div>
      </form>
      <PrevewTasck
        date={date}
        dateTime={dateTime}
        descript={descript}
      />
      </div>
      {history.location.pathname === '/home/calendar' && <ListCalendar />}
      {history.location.pathname === '/home/simple' && <ToDuListSimple />}
      {history.location.pathname === '/home/listdetal' && <ListDetal />}
    </>
  );
}

export default CreateTasck;
