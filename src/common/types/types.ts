export type PasswordType = {
  url: string
  login: string
  password: string
}

export type PasswordsObject = {
  google: PasswordType[]
  riot: PasswordType[]
  epic: PasswordType[]
  steam: PasswordType[]
  microsoft: PasswordType[]
  yahoo: PasswordType[]
  wargaming: PasswordType[]
  roblox: PasswordType[]
  origin: PasswordType[]
  warface: PasswordType[]
  battle: PasswordType[]
  rockstar: PasswordType[]
  genshin: PasswordType[]
  instagram: PasswordType[]
  facebook: PasswordType[]
  supercell: PasswordType[]
  minecraft: PasswordType[]
  tiktok: PasswordType[]
  spotify: PasswordType[]
  ubisoft: PasswordType[]
  discord: PasswordType[]
  twitch: PasswordType[]
  netflix: PasswordType[]
  amazon: PasswordType[]
  other: PasswordType[]
}

export type CookiesObject = {
  google: { count: number }
  riot: { count: number }
  epic: { count: number }
  steam: { count: number }
  microsoft: { count: number }
  yahoo: { count: number }
  wargaming: { count: number }
  roblox: { count: number }
  origin: { count: number }
  warface: { count: number }
  battle: { count: number }
  rockstar: { count: number }
  genshin: { count: number }
  instagram: { count: number }
  facebook: { count: number }
  supercell: { count: number }
  minecraft: { count: number }
  tiktok: { count: number }
  spotify: { count: number }
  ubisoft: { count: number }
  discord: { count: number }
  twitch: { count: number }
  netflix: { count: number }
  amazon: { count: number }
  other: { count: number }
}

export type UrlType = {
  name: string
  urls: string[]
}

export type AddPasswordObj = {
  obj: PasswordType
  url: string
  id: number
}

export type AddCookieObj = {
  url: string
  id: number
}

export type ReadPasswordsFile = {
  name: string
  passString: FileReaderResult
  passObj: PasswordsObject
}

export type ReadCookiesFile = {
  name: string
  cookiesString: FileReaderResult
  cookiesObj: CookiesObject
}

export type FileReaderResult = string | ArrayBuffer | null

export type FileReaderResponse = {
  result: FileReaderResult
  name: string
}
