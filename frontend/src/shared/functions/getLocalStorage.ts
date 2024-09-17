const getLocalStorage = (key: string) => {
  const result = localStorage.getItem(key)
  if (!result) {
    return null
  }
  const user = JSON.parse(result)
  return user
}

export default getLocalStorage
