import Navbar from '../components/Navbar';
import CreateTasck from '../components/tasks/CreateTasck';
import TypesToDoList from '../components/typesToDuList/TypesToDoList';
import { useContext } from 'react';
import Context from '../context/Context';
import '../styles/pages/home.css'

function Home() {
  const {isTokenTrue} = useContext(Context);

  return(
    <div>
      <Navbar />
      { isTokenTrue && <TypesToDoList />}
      { isTokenTrue && <CreateTasck />}
    </div>
  );
}

export default Home;

