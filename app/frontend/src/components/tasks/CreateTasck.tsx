import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { requestCreate } from "../../services/requests";
import codeMenssage from "../../services/status";
import getLocalStorage from "../../utils/getLocalStorage";
import EmojisTasck from "./emojis/EmojisTasck";
import PrevewTasck from "./PreviewTasck";

function CreateTasck() {  
  const [date, setDate] = useState('');
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
      <form>
        <EmojisTasck />
        <label htmlFor="subtitle">
          Date:
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => hendleForm(e)} />
        </label>
        <label htmlFor="descript">
          Descript tasck:
          <textarea
            name="descript"
            id="descript"
            cols={50}
            rows={4}
            value={descript}
            maxLength={200}
            onChange={(e) => hendleForm(e)} />
        </label>
        <button
          type="button"
          onClick={hendleCreateTasck}
        >
          Create Tasck
        </button>
      </form>
      <PrevewTasck
        date={date}
        descript={descript}
      />
      <p>{exibirMsgs()}</p>
    </>
  );
}

export default CreateTasck;
