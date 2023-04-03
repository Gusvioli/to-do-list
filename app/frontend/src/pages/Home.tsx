import Navbar from '../components/Navbar';
import '../styles/pages/home.css'
import CreateTask from '../components/create/CreateAndEditTask';
import ControlLists from '../components/control/ControlLists';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getLocalStorage from '../utils/getLocalStorage';
import { useQuery } from 'react-query';
import Footer from '../components/footer/Footer';

function Home() {
  const history = useHistory();

  // Função para pegar o token, id e nome do usuário no localStorage
  useQuery('tokenUserName', async () => {
    return {
      token: await getLocalStorage('token'),
      idUser: await getLocalStorage('idUser'),
      nameUser: await getLocalStorage('nameUser'),
    };
  },{
    refetchOnWindowFocus: false,
  });

  // Verifica se o usuário está logado atravez do token, id e nome
  useEffect(() => {
    const controlAcess = async () => {
      if (
          !await getLocalStorage('token')
          && !await getLocalStorage('idUser')
          && !await getLocalStorage('nameUser')
        ) {
        history.push('/login');
      }
    };
    controlAcess();
  }, [history]);

  return(
    <>
      <Navbar />
      <CreateTask />
      <ControlLists />
      <Footer />
    </>
  );
}

export default Home;

