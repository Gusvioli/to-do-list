import { useContext, useDeferredValue, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { arrmonths2023, arryears } from "../../services/anos";
import {links} from "../../services/links";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

function ListCalendar(): JSX.Element {
  const history = useHistory();
  const [nameMonthds, setNameMonthds] = useState('');
  const [nameMonthdsId, setNameMonthdsId] = useState(0);
  const [isTask, setIsTask] = useState(0);
  const [qtdsTascks, setQtdsTascks] = useState([]);
  const [allMonthds, setAllMonthdsd] = useState(false);
  const [monthds, setMonthdsd] = useState(false);
  const {contents, setContents} = useContext(Context);
  const deferredQtdsTascks = useDeferredValue(qtdsTascks);
  const deferredAllMonthds = useDeferredValue(allMonthds);

  const openCalendar = (e: any) => {
     const {name, value} = e.target;
     setNameMonthds(name);
     setNameMonthdsId(value);
     if (name === 'all') setAllMonthdsd(!allMonthds);
     if (name !== 'all'){
      setAllMonthdsd(false);
      setMonthdsd(!monthds);
    };
  };
  
  const hendleTasks = (e: any) => {
    const { value } = e.target;
    // console.log(value);
  };
  
  // Função para verificar se o dia do mês tem tarefa e direciona para o dia e suas tarefas
  const daysAtved = (contents: any[], arr: any, index: number) => {
    const getQtdsTascks = deferredQtdsTascks.filter((fil: any) => fil.mes === arr)
    .filter((fil2: any) => fil2.dia === index + 1).length;
    return contents.find((fin: { date: string }) => index + 1 === Number(fin.date.split('-')[2])
    && arr === Number(fin.date.split('-')[1])) && 
      <div style={{
          width: '98px',
          height: '82px',
          backgroundImage: links[0].tasks,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}>
        <form style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button" 
            style={{ marginTop: '60%', width: '100px'}}
            onClick={(e) => hendleTasks(e)}
            value={`${arryears}-${arr < 10
              ? `0${arr}` : arr}-${index + 1 < 10
                ? `0${index + 1}` : index + 1}`}//return ex:. 2021-01-01
          >
              {getQtdsTascks} Tasks
          </button>
        </form>
      </div>
  };
  
  useEffect(() => {
    const getTypeBd = async () => {
      if(await getLocalStorage('token') && await getLocalStorage('idUser')){
        const data = await getLocalStorage('idUser');
        let dataContents = await requestDataId('/contents', {idUser: data.idUser});
        if (history.location.pathname === '/home/calendar') {
          dataContents = dataContents.filter((content: any) => content.type === 'simple');
          setContents(dataContents);
          setQtdsTascks(dataContents.map((content: any) => ({
              mes: Number(content.date.split('-')[1]),
              dia: Number(content.date.split('-')[2]),
            })
          ));
        }
      }
    };
    getTypeBd();
  }, [history.location.pathname, setContents, setQtdsTascks]);

  return (
    <>
      {contents && arrmonths2023.map((month: any, index: number) => {
        return <button
          key={index}
          id={month.days}
          name={month.name}
          value={month.id}
          onClick={(e) => openCalendar(e)}
        >
          {month.name}
        </button>
      })}
      <button
        id="all"
        name="all"
        value="all"
        onClick={(e) => openCalendar(e)}
      >
        All calendar
      </button>
        {deferredAllMonthds && arrmonths2023
          .map((days, index) =>
            <div key={index} style={{
              border: '1px solid #ccc',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'space-between',
              margin: '10px',
              padding: '7px',
              backgroundColor: '#f1f4f5',
              opacity: qtdsTascks
                .find((fil: any) => fil.mes === arrmonths2023[index].id)
                  ? 1
                  : 0.3,
            }}
            >
            <div style={{
              fontSize: '26px'
              }}
            >
                {arrmonths2023[index].name}
            </div>
            <div style={{
              width: 'auto',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'start',
              alignItems: 'space-between',
              margin: '10px',
              padding: '7px',
            }}
            >
            {new Array(days.days).fill('').map((_, i) =>
              <div
              key={i}
              style={{
                border: '1px solid #ccc',
                width: '100px',
                height: '100px',
                margin: '1px',
                padding: '7px 5px',
                backgroundColor: '#ffffff',
              }}>
                <div style={{ fontSize: '20px' }}>{i + 1}</div>
                {daysAtved(contents, arrmonths2023[index].id, i)}
              </div>)
            }
            </div>
          </div>)}
        {contents && arrmonths2023
          .filter((filDays) => filDays.name === nameMonthds)
          .map((days, index) =>
            <div key={index} style={{
              border: '1px solid #ccc',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'space-between',
              margin: '10px',
              padding: '7px',
              backgroundColor: '#f1f4f5',
              opacity: qtdsTascks
                .find((fil: any) => fil.mes === Number(nameMonthdsId))
                  ? 1
                  : 0.3,
            }}
            >
            <div style={{
              fontSize: '28px',
              }}
            >
                {nameMonthds}
            </div>
            <div style={{
              width: 'auto',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'start',
              alignItems: 'space-between',
              margin: '10px',
              padding: '7px',
            }}
            >
            {new Array(days.days).fill('').map((_, index) =>
              <div
              key={index}
              style={{
                border: '1px solid #ccc',
                width: '100px',
                height: '100px',
                margin: '1px',
                padding: '7px 5px',
                backgroundColor: '#ffffff',
              }}>
                {index + 1}
                <div>
                  {daysAtved(contents, Number(nameMonthdsId), index)}
                </div>
              </div>)
            }
            </div>
          </div>)}
    </>
    );
  
}

export default ListCalendar;