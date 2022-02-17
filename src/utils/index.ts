export * from "./printVersionApp"
export * from "./getIp"
export * from "./auth"
export * from "./inputFormat"
export * from "./printVersionApp"
export * from "./printVersionApp"

//

export const isEmpty = (obj: any) => {
  return (
    obj && // 👈 null and undefined check
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  )
}

//  check developm variable
export const isDevelopment = Boolean(process.env.NODE_ENV === "development")

// Copy a text
export const copy = (text: string) => navigator.clipboard.writeText(text)

// Copy a object as setring
export const copyObjectAsString = (obj: any) => {
  navigator.clipboard.writeText(JSON.stringify(obj, null, 2))
}
