const IS_DOM = typeof window !== "undefined"

export const setToken = (token: string) =>
  IS_DOM && localStorage.setItem("access_token", token)

export const getToken = () => IS_DOM && localStorage.getItem("access_token")

export const deleteToken = () =>
  IS_DOM && localStorage.removeItem("access_token")
