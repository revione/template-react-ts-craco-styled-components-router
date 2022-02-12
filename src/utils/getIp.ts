import publicIp from "public-ip"

export const getIp = async () => {
  let ipAddress = null
  try {
    ipAddress = await publicIp.v4()
    if (!ipAddress) ipAddress = await publicIp.v6()
  } catch (error) {
    console.log(error)
  }

  return ipAddress
}
