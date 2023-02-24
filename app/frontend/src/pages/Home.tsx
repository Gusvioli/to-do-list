import Navbar from '../components/Navbar';
import CreateTasck from '../components/tasks/CreateTasck';
import ToDuListSimple from '../components/typesToDuList/ToDuListSimple';
import TypesToDoList from '../components/typesToDuList/TypesToDoList';
import { useContext } from 'react';
import Context from '../context/Context';

function Home() {
  const {isTokenTrue} = useContext(Context);

  return(
    <div>
      <Navbar />
      { isTokenTrue && <TypesToDoList />}
      { isTokenTrue && <CreateTasck />}
      { isTokenTrue && <ToDuListSimple />}
    </div>
  );
}

export default Home;

