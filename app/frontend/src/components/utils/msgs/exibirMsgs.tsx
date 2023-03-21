import { useContext } from "react";
import Context from "../../../context/Context";
import codeMenssage from "../../../services/status";

// Função que retorna uma mensagem de acordo com o status da requisição
export const exibirMsgs = (codeStatusMessage: { status: number; message: any; }) => {
  const { setCodeStatusMessage } = useContext(Context);
  if (codeStatusMessage) {
    return `${codeMenssage(codeStatusMessage.status)} ${codeStatusMessage.message}`;
  }return '';
};