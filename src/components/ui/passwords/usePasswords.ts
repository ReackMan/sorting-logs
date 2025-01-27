import { AddPasswordObj, FileReaderResult, PasswordType, UrlType } from '@/common'

export const usePasswords = () => {
  const sortPass = (
    data: FileReaderResult,
    urls: UrlType[],
    onAddFiles: ({ obj, url, id }: AddPasswordObj) => void,
    id: number
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const sort1 = data.split('\r\n').filter(str => str != '')
    const sort2: PasswordType[] = []
    for (let i = 0; i < sort1.length; ) {
      sort2.push({
        url: sort1[i].split(' ')[1],
        login: sort1[i + 1].split(' ')[1],
        password: sort1[i + 2].split(' ')[1],
      })
      i += 3
    }

    const checker = (urls: string[], obj: PasswordType) => {
      let counter = 0

      for (let i = 0; i < urls.length; i++) {
        if (obj.url.includes(urls[i])) {
          counter++
        }
      }

      if (counter > 0) {
        onAddFiles({ obj, url: urls[0], id })
        return true
      }
    }

    const updatedChecker = (obj: PasswordType) => {
      for (let i = 0; i < urls.length; i++) {
        if (checker(urls[i].urls, obj)) return true
      }
    }

    sort2.forEach(obj => {
      if (!updatedChecker(obj)) onAddFiles({ obj, url: 'other', id })
    })
  }
  return {
    sortPass,
  }
}
