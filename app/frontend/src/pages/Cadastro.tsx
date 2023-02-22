import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import getLocalStorage from '../utils/getLocalStorage';

function Home() {  
  const history = useHistory();
  useEffect(() => {
    getLocalStorage('token').then((token) => {
      if (token) history.push('/home');
    });
  }, [history]);

  return(
    <div>
      <Navbar />
      Cadastro
    </div>
  );
}

export default Home;

