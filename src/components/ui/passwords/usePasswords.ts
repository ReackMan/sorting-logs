import { PasswordType, UrlType } from '@/components'

export type AddPasswordObj = {
  obj: PasswordType
  url: string
}

export const usePasswords = () => {
  const sortPass = (
    data: string,
    urls: UrlType[],
    onAddPassword: ({ obj, url }: AddPasswordObj) => void
  ) => {
    const sort1 = data.split('\n').filter(str => str != '')
    const sort2: PasswordType[] = []
    for (let i = 0; i < sort1.length; ) {
      sort2.push({
        url: sort1[i].split(' ')[1],
        login: sort1[i + 1].split(' ')[1],
        password: sort1[i + 2].split(' ')[1],
      })
      i += 3
    }

    const checker = (text: string, words: string[], obj: PasswordType) => {
      let counter = 0

      for (let i = 0; i < words.length; i++) {
        if (text.includes(words[i])) counter++
      }

      if (counter > 0) {
        onAddPassword({ obj, url: words[0] })
        return true
      }
    }

    const updatedChecker = (passwordUrl: string, obj: PasswordType) => {
      for (let i = 0; i < urls.length; i++) {
        if (checker(passwordUrl, urls[i].urls, obj)) return true
      }
    }

    sort2.forEach(obj => {
      const passwordUrl = obj.url
      if (!updatedChecker(passwordUrl, obj)) onAddPassword({ obj, url: 'other' })
    })
  }
  return {
    sortPass,
  }
}
