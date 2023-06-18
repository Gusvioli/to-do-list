const getLocalStorage = async (key: string) => {
  const token = localStorage.getItem(key)
  return token ? await JSON.parse(token) : ''
}

export default getLocalStorage
