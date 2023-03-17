import { useContext, useDeferredValue } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import getLocalStorage from "../../utils/getLocalStorage";

function Search(): JSX.Element {
  const { search, contents, emojis, setSearch, setDateListDetal } = useContext(Context);
  const deferred = useDeferredValue(search);
  const deferredContents = useDeferredValue(contents);
  const history = useHistory();

  const getLength = (deferredContents: any) => {
    if (deferredContents.length === 0) {
      return 'Nenhum resultado encontrado';
    }
    return `${deferredContents.length} resultado(s) encontrado(s)`;
  };

  const hendleSend = async (e: any) => {
    const { value } = e.target;
    const idUserGet = await getLocalStorage('idUser');
    const obj = {
      idUser: idUserGet.idUser,
      data: contents.filter((content: any) => content.date === value),
      date: value,
    };
    console.log(obj);
    setDateListDetal(obj);
    setSearch('');
    history.push(`/home/listdetal`);
  };


  return (
    <>
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      {getLength(
        deferredContents
        .filter((fil: any) =>
        `${fil.date} ${fil.descript} ${fil.time} ${fil.emoji}}`
        .includes(search))
      )}
    </div>
    {deferred &&
    <div
      style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly' }}
    >
      {
        deferredContents
        .filter((fil: any) =>
        `${fil.id} ${fil.date} ${fil.descript} ${fil.time} ${fil.emoji}}`
        .includes(search))
        .map((fil: any, index: number) => (
          <div

            key={index}
            style={{
              border: '1px solid #ccc',
              width: '40%',
              height: '60px',
              margin: '5px',
              padding: '7px 5px',
              overflow: 'auto',
              borderRadius: '9px',
              backgroundColor: '#f1f4f5',
              cursor: 'pointer',
            }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  padding: '5px 15px',
                }}
              >
              <span>
                <span>id #{fil.id}</span>
                <img
                  src={!emojis.url
                    ? emojis.filter((emoji: any) => emoji.name === fil.emoji)[0].url
                    : ''}
                  alt={fil.emoji}
                  style={{ width: '20px', height: '20px' }} />
              </span>
              <span>{fil.date}</span> -
              <span>{fil.time}</span>{' '}
              <span>{fil.descript}</span>
              <button
                type="button"
                value={fil.date}
                onClick={(e) => hendleSend(e)}
              >  Abrir
              </button>
            </div>
          </div>
        ))
      }
    </div>}
    </>
  );
}

export default Search;

