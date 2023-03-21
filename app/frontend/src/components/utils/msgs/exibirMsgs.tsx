import codeMenssage from "../../../services/status";

// Função que retorna uma mensagem de acordo com o status da requisição
export const exibirMsgs = (codeStatusMessage: { status: number; message: any; }) => {
  if (codeStatusMessage) {
    return `${codeMenssage(codeStatusMessage.status)} ${codeStatusMessage.message}`;
  }return '';
};