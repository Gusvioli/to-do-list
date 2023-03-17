import { useContext, useDeferredValue, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { arrmonths2023, arryears } from "../../services/anos";
import {links} from "../../services/links";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

function ListCalendar(): JSX.Element {
  const history = useHistory();
  const [nameMonthds, setNameMonthds] = useState<string>();
  const [nameMonthdsId, setNameMonthdsId] = useState<number>();
  const [qtdsTascks, setQtdsTascks] = useState<[object]>([{}] as [object]);
  const [allMonthds, setAllMonthdsd] = useState<boolean>();
  const [monthds, setMonthdsd] = useState<boolean>();
  const deferredQtdsTascks = useDeferredValue(qtdsTascks);
  const deferredAllMonthds = useDeferredValue(allMonthds);
  const {
    contents,
    setContents,
    setDateListDetal,
  } = useContext(Context);

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

  const hendleTasks = async (e: any) => {
    const { value } = e.target;
    const idUserGet = await getLocalStorage('idUser');
    const obj = {
      idUser: idUserGet.idUser,
      data: contents.filter((content: any) => content.date === value),
      date: `${value.split('-')[0]}-${value.split('-')[1]}-${value.split('-')[2]}`,
    };
    setDateListDetal(obj);
    history.push(`/home/listdetal`);
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

  const countListCalendar = (month: any) => {
    return contents.filter((fil: any) => Number(fil.date.split('-')[1]) === month.id).length
  };

  return (
    <>
      {contents
      && !arrmonths2023 ? 'Carregando' : arrmonths2023.map((month: any, index: number) => {
        return <button
          key={index}
          id={month.days}
          name={month.name}
          value={month.id}
          onClick={(e) => openCalendar(e)}
          style={{ width: '100px', margin: '1px', padding: '5px' }}
        >
            {month.name}
            { ' ' }
            <span>
              {countListCalendar(month)}
            </span>
        </button>
      })}
      <button
        id="all"
        name="all"
        value="all"
        onClick={(e) => openCalendar(e)}
        style={{ width: '100px', margin: '1px', padding: '5px' }}
      >
        All calendar
        { ' ' }
        {contents.length}
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