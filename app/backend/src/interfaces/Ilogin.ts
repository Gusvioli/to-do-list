interface Itoken {
  token: string;
}

interface Ilogin {
  name: string;
  email: string;
  password: string;
  role: string;
}

export default Ilogin;
export { Itoken };