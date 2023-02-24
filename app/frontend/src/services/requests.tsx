import axios, { AxiosHeaders } from 'axios';
import IrequestBody from '../interfaces/IrequestBody';
import IrequestCreate from '../interfaces/IrequestCreate';
import IrequestIds from '../interfaces/IrequestIds';
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

export const requestDataToken = async (endpoint: string, body: IrequestToken) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestDataId = async (endpoint: string, body: IrequestIds ) => {
  const { data } = await api.post(endpoint, body);
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

export const requestCreate = async (endpoint: string, body: IrequestCreate) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
