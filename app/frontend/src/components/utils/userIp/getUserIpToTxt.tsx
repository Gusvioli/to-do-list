import { requestIp, requestIpUpdate } from '../../../services/requests'

const getUsewrIpToTxt = async () => {
  const pegaIp = await requestIp('https://api.ipify.org?format=json')
  await requestIpUpdate('/ip', pegaIp)
}
export default getUsewrIpToTxt
