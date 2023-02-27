import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../context/Context";
import { arrmonths2023 } from "../../services/anos";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

function ListCalendar(): JSX.Element {
  const history = useHistory();
  const [nameMonthds, setNameMonthds] = useState('');
  const [nameMonthdsId, setNameMonthdsId] = useState(0);
  const {contents, setContents} = useContext(Context);

  const openCalendar = (e: any) => {
     const {name, value} = e.target;
     setNameMonthds(name);
     setNameMonthdsId(value);
  };
  
  useEffect(() => {
    const getTypeBd = async () => {
      if(await getLocalStorage('token') && await getLocalStorage('idUser')){
        const data = await getLocalStorage('idUser');
        let dataContents = await requestDataId('/contents', {idUser: data.idUser});
        if (history.location.pathname === '/home/calendar') {
          dataContents = dataContents.filter((content: any) => content.type === 'simple');
          setContents(dataContents);
        }
      }
    };
    getTypeBd();
  }, [history.location.pathname, setContents, contents]);

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
        {contents && arrmonths2023.filter((filDays) => filDays.name === nameMonthds)
          .map((days, index) =>
            <div key={index} style={{
              border: '1px solid #ccc',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'space-between',
              margin: '10px',
              padding: '7px',
            }}
            >
            <div style={{
              fontSize: '26px'
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
              }}>
                {index + 1}
                <div>{contents.find((fin: { date: string }) => index + 1 === Number(fin.date.split('-')[2])
                && Number(nameMonthdsId) === Number(fin.date.split('-')[1]))
                && 'ok'}</div>
              </div>)
            }
            </div>
          </div>)}
    </>
    );
  
}

export default ListCalendar;