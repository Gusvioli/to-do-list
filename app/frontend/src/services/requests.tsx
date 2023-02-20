import axios, { AxiosHeaders } from 'axios';
import IrequestBody from '../interfaces/IrequestBody';
import IrequestToken from '../interfaces/IrequestToken';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const setTokenAuthorization = (token: IrequestToken | AxiosHeaders | any) => {
  api.defaults.headers.common.Authorization = token;
};

export const getTokenAuthorization = () => {
  return api.defaults.headers.common.Authorization;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestDataUser = async (endpoint: string, body: IrequestToken) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestLogin = async (endpoint: string, body: IrequestBody) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
