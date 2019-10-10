interface ParamInterface {
  [id: string]: string
}

export default (baseUrl: string) => (params: ParamInterface) => {
  const keys = Object.keys(params)

  if (!keys.length) return baseUrl

  const paramsAsString = keys.reduce((paramString: string, key: string) => {
    const keyValueAsString = `${key}=${params[key]}`

    if (!paramString.length) return keyValueAsString

    return `${paramString}&${keyValueAsString}`
  }, '')

  return `${baseUrl}?${paramsAsString}`
}
