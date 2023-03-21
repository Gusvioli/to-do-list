// import { ChangeEvent, useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Context from "../../context/Context";
// import { requestCreate, requestDataId, requestUpdate } from "../../services/requests";
// import codeMenssage from "../../services/status";
// import getLocalStorage from "../../utils/getLocalStorage";
// import ListCalendar from "../calendar/ListCalendar";
// import Search from "../search/ListSearch";
// import ToDuListSimple from "../simple/ListSimple";
// import EmojisTasck from "./emojis/EmojisTasck";
// import ListDetal from "./ListDetal";
// import CreateTasckEnum from "./utils/enums/CreateTasckEnum";
// import '../../styles/components/task/createTask.css';
// import '../../styles/lists/lists.css';

function CreateTasck(): JSX.Element {
  return(<></>);
//   const {
//     descript,
//     setDescript,
//     setLogoEmoji,
//     logoEmoji,
//     setCodeStatusMessage,
//     codeStatusMessage,
//     edtorTrue,
//     setEdtorTrue,
//     date,
//     setDate,
//     dateTime,
//     setDateTime,
//     setDateListDetal,
//     search,
//     setContents,
//     emojis,
//     isEmojisTasck,
//     setIsEmojisTasck,
//     setEmojis,
//     caracters,
//     setCaracters,
//   } = useContext(Context);
//   const history = useHistory();

//   // Função para pegar os dados do input
//   const hendleForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
//     e.preventDefault();
//     const { id, value } = e.target;
//       if (id === 'descript'){
//         setDescript(value);
//         setCaracters(value.length);
//       }
//       if (id === 'date') setDate(value);
//       if (id === 'horaMinutes') setDateTime(value);
//   };

//   // Função para exibir as mensagens de erro ou sucesso
//   const exibirMsgs = () => {
//     if (codeStatusMessage) {
//       return `${codeMenssage(codeStatusMessage.status)} ${codeStatusMessage.message}`;
//     } else {
//       return '';
//     }
//   };

//   const hendleCreateTasck = async () => {
//     try{
//       const getIdUser = await getLocalStorage('idUser');
//       const returnData = await requestCreate('/newContents', {
//         idUser: getIdUser.idUser,
//         type: 'simple',
//         emoji: logoEmoji,
//         date,
//         time: dateTime,
//         description,
//         status: 'Pendente',
//       });

//       console.log('dateListDetal', returnData.newContents.data);

//       setDateListDetal(returnData);

//       setCodeStatusMessage({
//         status: 200,
//         message: returnData.message
//       });

//       setDescript('');
//       setDate('');
//       setLogoEmoji('');
//       setDateTime('');
//       setEdtorTrue({
//         id: 0,
//         data: [],
//       });

//   } catch (error: any) {
//     // Salva o status e a messagem vinda do backend retornando o erro
//       setCodeStatusMessage({
//         status: error.response.status,
//         message: error.response.data.message
//       })
//   }
//   };

//   const hendleUpdateTasck = async () => {
//     try{
//       const getIdUser = await getLocalStorage('idUser');

//       const returnData = await requestUpdate('/contentsEditUpdate', {
//         id: edtorTrue.data[0].id,
//         idUser: getIdUser,
//         type: 'simple',
//         emoji: logoEmoji,
//         date,
//         time: dateTime,
//         descript,
//         status: 'Pendente',
//       });

//       setDateListDetal(returnData.data);

//       setCodeStatusMessage({
//         status: 200,
//         message: returnData.message
//       });

//       setDescript('');
//       setDate('');
//       setLogoEmoji('');
//       setDateTime('');
//       setCaracters(0);
//       setEdtorTrue({
//         id: 0,
//         data: [],
//       });

//   } catch (error: any) {
//     // Salva o status e a messagem vinda do backend retornando o erro
//     setCodeStatusMessage({
//       status: error.response.status,
//       message: error.response.data.message
//     });
//   }
//   };

//   useEffect(() => {
//     const getTypeBd = async () => {
//       if(await getLocalStorage('token') && await getLocalStorage('idUser')){
//         const data = await getLocalStorage('idUser');
//         let dataContents = await requestDataId('/contents', {idUser: data.idUser});
//         if (history.location.pathname === '/home') {
//           dataContents = dataContents.filter((content: any) => content.type === 'simple');
//           setContents(dataContents);
//         }
//       }
//     };
//     getTypeBd();
//   }, [history.location.pathname, setContents]);

//   useEffect(() => {
//     if(emojis.length === 0){
//       const fetchEmojis = async () => {
//         const response = await fetch('https://api.github.com/emojis');
//         const data = await response.json();
//         const responseEmojis: any[] | any = Object.keys(data).map((key) => ({
//           name: key,
//           url: data[key],
//         }));
//         setEmojis(responseEmojis);
//       };
//       fetchEmojis();
//     }
//   }, [emojis.length, setEmojis]);

//   const hendleEmojisTasck = () => {
//     setIsEmojisTasck(!isEmojisTasck);
//   };

//   const hendleCloseEditor = () => {
//     setEdtorTrue({
//       id: 0,
//       data: [],
//     });
//     setDescript('');
//     setDate('');
//     setLogoEmoji('');
//     setDateTime('');
//     setCaracters(0);
//   };

//   const hendleClearDescription = () => {
//     setDescript('');
//     setCaracters(0);
//   };

//   return (
//     <>
//       <div className="div-0-createTask">
//         <div className="div-createTask">
//         { !isEmojisTasck ? '' : <EmojisTasck /> }
//         <form>
//           <div className="form-div-date-time-description">
//               <div className="form-div-date-time-description-div">
//                 <button
//                   type="button"
//                   onClick={hendleEmojisTasck}
//                   className="button-prevew-tasck"
//                 >
//                  {
//                     logoEmoji !== ''
//                     ? <div>
//                         <img
//                             src={emojis?.filter((emoji: any) => emoji.name === logoEmoji)
//                               ?.map((emoji: any) => emoji)[0].url}
//                             alt={logoEmoji}
//                             width="30px"
//                             height="30px"
//                           />
//                           <img
//                             src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png?v8"
//                             alt="Checked"
//                             width="15px"
//                             height="15px"
//                             className="img-checked"
//                           />
//                     </div>
//                     : <img
//                         src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f642.png"
//                         alt="slightly_smiling_face"
//                         width="30px"
//                         height="30px"
//                       />
//                  }
//                 </button>
//                 <label htmlFor="subtitle">
//                   <input
//                     className="label-input-date"
//                     type="date"
//                     name="date"
//                     id="date"
//                     disabled={edtorTrue?.id > 0}
//                     onChange={(e) => hendleForm(e)} />
//                 </label>
//                 <label htmlFor="horaMinutes">
//                   <input
//                     className="label-input-time"
//                     type="time"
//                     name="horaMinutes"
//                     id="horaMinutes"
//                     placeholder="00:00"
//                     onChange={(e) => hendleForm(e)} />
//                 </label>
//                 <button
//                   className="div-1-criacao-edicao-button"
//                   type="button"
//                   onClick={
//                     edtorTrue !== undefined
//                     ? edtorTrue?.id === 0
//                       ? hendleCreateTasck
//                         : hendleUpdateTasck
//                           : hendleCreateTasck
//                   }
//                 >
//                     {
//                       edtorTrue !== undefined
//                         ? edtorTrue?.id === 0
//                           ? 'Create Tasck'
//                             : 'Edit Tasck'
//                               : 'Create Tasck'
//                     }
//               </button>
//               {
//               edtorTrue !== undefined
//                 ? edtorTrue?.id === 0
//                 ? ''
//                 : <button
//                     type="button"
//                     className="div-1-criacao-edicao-button"
//                     onClick={hendleCloseEditor}
//                   >
//                     Close edit
//                   </button>
//                   : ''
//               }
//               </div>
//               <div
//                 className="div-1-criacao-edicao-button-div-clear"
//               >
//                 {caracters}/200
//                 <button
//                     type="button"
//                     className="div-1-criacao-edicao-button-clear"
//                     onClick={hendleClearDescription}
//                 >
//                   Clear
//                 </button>
//               </div>
//               <label htmlFor="descript">
//                 <textarea
//                   name="descript"
//                   id="descript"
//                   cols={55}
//                   rows={5}
//                   wrap="true"
//                   value={descript}
//                   minLength={CreateTasckEnum.MIN}
//                   maxLength={CreateTasckEnum.MAX}
//                   placeholder={'Descript tasck'}
//                   onChange={(e) => hendleForm(e)}
//                 />
//               </label>
//             </div>
//         </form>
//         </div>
//         <p className={"exibir-msgs"}>{exibirMsgs()}</p>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <div className="list-0">
//           {history.location.pathname === '/home' && search.length > 0 && <Search />}
//           {history.location.pathname === '/home/calendar'
//           ? search.length === 0 ? <ListCalendar /> : <Search /> : ''}
//           {history.location.pathname === '/home/simple'
//           ? search.length === 0 ? <ToDuListSimple /> : <Search /> : ''}
//           {history.location.pathname === '/home/listdetal'
//           ? search.length === 0 ? <ListDetal /> : <Search /> : ''}
//         </div>
//       </div>
//     </>
//   );
}

export default CreateTasck;
