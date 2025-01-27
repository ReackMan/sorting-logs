import { useSortCookiesOptions, useSortPassOptions } from '@/features'
import { usePasswords } from '@components/ui/passwords/usePasswords.ts'
import { useCookies } from '@components/ui/cookies/useCookies.ts'
import { PayloadAction } from '@reduxjs/toolkit'
import { CookiesObject, FileReaderResponse, PasswordsObject } from '@/common'

type Props = {
  files: File[]
  readPasswords: any
  readCookies: any
}

export const useFilesPage = ({ files, readPasswords, readCookies }: Props) => {
  const {
    onAddCookie,
    onSetCookiesInitialState,
    urls: cookieUrls,
    cookies: cookiesObj,
  } = useSortCookiesOptions()
  const {
    onAddPassword,
    onSetPassInitialState,
    urls: passUrls,
    passwords: passObj,
  } = useSortPassOptions()

  const { sortPass } = usePasswords()
  const { sortCookie } = useCookies()

  const sortFiles = () => {
    onSetCookiesInitialState()
    onSetPassInitialState()
    const cookies = files.filter(file => file.name.includes('Cookies'))
    const passwords = files.filter(file => file.name.includes('Passwords'))

    ////// PASSWORDS //////

    passwords.forEach((f, index) => {
      readPasswords({ file: f, passwords: passObj }).then(
        (value: PayloadAction<{ res: FileReaderResponse; passwords: PasswordsObject }>) => {
          const data = value.payload.res.result
          sortPass(data, passUrls, onAddPassword, index)
        }
      )
    })

    ////// COOKIES //////

    cookies.forEach((f, index) => {
      readCookies({ file: f, cookies: cookiesObj }).then(
        (value: PayloadAction<{ res: FileReaderResponse; cookies: CookiesObject }>) => {
          const data = value.payload.res.result
          sortCookie(data, cookieUrls, onAddCookie, index)
        }
      )
    })
  }

  return { sortFiles }
}
