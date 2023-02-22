interface Itoken {
  token: string;
}

interface Ilogin {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: string;  
  token?: string;
}

export default Ilogin;
export { Itoken };