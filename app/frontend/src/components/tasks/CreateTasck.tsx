import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestCreate } from "../../services/requests";
import codeMenssage from "../../services/status";
import getLocalStorage from "../../utils/getLocalStorage";
import ListCalendar from "../calendar/ListCalendar";
import ToDuListSimple from "../simple/ListSimple";
import EmojisTasck from "./emojis/EmojisTasck";
import PrevewTasck from "./PreviewTasck";

function CreateTasck() {  
  const [date, setDate] = useState('');
  const [dateTime, setDateTime] = useState('');
  const {
    descript,
    setDescript,
    setLogoEmoji,
    logoEmoji,
    setCodeStatusMessage,
    codeStatusMessage
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
    if (codeStatusMessage.status !== 0 && codeStatusMessage.message !== '') {
      return `${codeMenssage(codeStatusMessage.status)}, ${codeStatusMessage.message}`;
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

      setCodeStatusMessage({
        status: 200,
        message: returnData.message
      });

      setDescript('');
      setDate('');
      setLogoEmoji('');
      setDateTime('');

  } catch (error: any) {
    // Salva o status e a messagem vinda do backend retornando o erro
    setCodeStatusMessage({
      status: error.response.status,
      message: error.response.data.message
    });
  }
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
          <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'flex-start',  }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
              <label htmlFor="subtitle">
                <input
                  style={{ width: '110px', padding: '2px', margin: '2px' }}
                  type="date"
                  name="date"
                  id="date"
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
              placeholder="Descript tasck"
              onChange={(e) => hendleForm(e)} />
          </label>
          <button
            style={{ width: 'auto', height: '40px', padding: '2px'}}
            type="button"
            onClick={hendleCreateTasck}
            >
            Create Tasck
          </button>
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
    </>
  );
}

export default CreateTasck;
