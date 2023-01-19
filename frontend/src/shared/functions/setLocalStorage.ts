const setLocalStorage = (key: string, item: unknown) => {
  const itemJson = JSON.stringify(item)
  localStorage.setItem(key, itemJson)
}

export default setLocalStorage
