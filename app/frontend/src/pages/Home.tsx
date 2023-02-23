import Navbar from '../components/Navbar';
import ToDuListSimple from '../components/typesToDuList/ToDuListSimple';
import TypesToDoList from '../components/typesToDuList/TypesToDoList';

function Home() {
  return(
    <div>
      <Navbar />
      <TypesToDoList />
      <ToDuListSimple />
    </div>
  );
}

export default Home;

