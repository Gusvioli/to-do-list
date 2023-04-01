import { useContext } from "react";
import { useQuery } from "react-query";
import Context from "../../context/Context";
import { requestDataId } from "../../services/requests";
import getLocalStorage from "../../utils/getLocalStorage";
import { Contents } from "./types/ContentsType";


export function RequestDataContentsApi() {
  const {setContents} = useContext(Context)
  useQuery<Contents | void>(['contents'], async () => {
    if(
      await getLocalStorage('token')
      && await getLocalStorage('idUser')
    ){
      const data = await getLocalStorage('idUser');
      let dataContents = await requestDataId('/contents', {idUser: data.idUser});
      dataContents = dataContents.filter((content: any) => content.type === 'simple');
      setContents(dataContents);
      return dataContents;
    }
  },{
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 60 * 24,
    refetchInterval: 1000 * 60,
    refetchIntervalInBackground: true,
  });
}