import Navbar from '../components/Navbar';
import ToDuListGenerate from '../components/typesToDuList/ToDuListGenerate';
import TypesToDoList from '../components/typesToDuList/TypesToDoList';

function Home() {
  return(
    <div>
      <Navbar />
      <TypesToDoList />
      <ToDuListGenerate />
    </div>
  );
}

export default Home;

