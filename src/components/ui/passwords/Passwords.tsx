import { useEffect, useState } from 'react'
import { useSortPassOptions } from '@/features'
import { PasswordsList } from './list/PasswordsList.tsx'
import { usePasswords } from '@components/ui/passwords/usePasswords.ts'

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

export const Passwords = () => {
  const { passwords, urls, onAddPassword, onClearPasswords, onSetInitialState } =
    useSortPassOptions()
  const { sortPass } = usePasswords()

  const [pass, setPass] = useState('')

  useEffect(() => {
    return () => onSetInitialState()
  }, [])

  const sendPasswords = (data: string) => {
    onClearPasswords()
    if (data != '') {
      sortPass(data, urls, onAddPassword)
    }
  }

  return (
    <>
      <textarea onChange={e => setPass(e.target.value)} />
      <button onClick={() => sendPasswords(pass)}>Sort Passwords</button>
      <PasswordsList urls={urls} passwordsObj={passwords} />
    </>
  )
}

export type UrlType = {
  name: string
  urls: string[]
}
