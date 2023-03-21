import { useQuery } from "react-query";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";

type Contents = {
  id: number;
  type: string;
  emoji: string;
  date: string;
  time: string;
  description: string;
  status: string;
  idUser: number;
};

export function RequestDataContentsApi() {
  useQuery<Contents | void>(['contents'], async () => {
    if(
      await getLocalStorage('token')
      && await getLocalStorage('idUser')
    ){
      const data = await getLocalStorage('idUser');
      let dataContents = await requestDataId('/contents', {idUser: data.idUser});
      dataContents = dataContents.filter((content: any) => content.type === 'simple');
      return dataContents;
    }
  },{
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
}