import { useEffect, useState } from 'react'
import { useSortPassOptions } from '@/features'
import { PasswordsList } from './list/PasswordsList.tsx'
import { usePasswords } from '@components/ui/passwords/usePasswords.ts'
import { DnD } from '@components/ui/dnd/dnd.tsx'

import s from './passwords.module.css'

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

  const [pass, setPass] = useState<string | ArrayBuffer>('')
  const [isUpload, setIsUpload] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    return () => onSetInitialState()
  }, [])

  const sendPasswords = (data: string) => {
    onClearPasswords()
    if (data != '') {
      sortPass(data, urls, onAddPassword)
    }
  }

  const dnd = (files: File[]) => {
    const file = files[0]

    setName(file.name)

    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = () => {
      if (!reader.result) return
      setIsUpload(true)
      setPass(reader.result)
    }

    reader.onerror = () => {
      console.log(reader.error)
    }
  }

  return (
    <>
      <DnD handleFilesDrop={dnd} />
      {isUpload ? (
        <>
          <span className={s.uploadedSpan}>File uploaded</span>
          <span className={s.fileName}>File Name: {name}</span>
        </>
      ) : (
        <span className={s.notUploadedSpan}>File not uploaded</span>
      )}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*// @ts-expect-error*/}
      <button onClick={() => sendPasswords(pass)} disabled={!isUpload}>
        Sort Passwords
      </button>
      <PasswordsList urls={urls} passwordsObj={passwords} />
    </>
  )
}

export type UrlType = {
  name: string
  urls: string[]
}
