import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import ListCalendar from '../calendar/ListCalendar';
import ListSimple from '../simple/ListSimple';
import '../../styles/lists/lists.css'
import { GithubApi } from '../apis/GithubApi';
import { RequestDataContentsApi } from '../apis/RequestDataContentsApi';

function ControlLists() {
  const {setEmojis, emojis} = useContext(Context);
  const history = useHistory();

  GithubApi(emojis, setEmojis);
  RequestDataContentsApi();

  return (
    <>
      <div className="list-0">
        {
          history.location.pathname === '/home/simple'
          ? <ListSimple />
          : ''
        }
        {
          history.location.pathname === '/home/calendar'
          ? <ListCalendar />
          : ''
        }
      </div>
    </>
  );
}

export default ControlLists;