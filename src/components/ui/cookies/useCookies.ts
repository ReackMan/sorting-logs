import { AddCookieObj, FileReaderResult, UrlType } from '@/common'

export const useCookies = () => {
  const sortCookie = (
    data: FileReaderResult,
    urls: UrlType[],
    onAddCookie: ({ url, id }: AddCookieObj) => void,
    id: number
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const sort1 = data.split('\r\n')
    const sort2: string[] = []
    for (let i = 0; i < sort1.length; i++) {
      const url = sort1[i].split('\t')[0]
      sort2.push(url)
    }
    const checker = (urls: string[], url: string) => {
      let counter = 0

      for (let i = 0; i < urls.length; i++) {
        if (url.includes(urls[i])) {
          counter++
        }
      }

      if (counter > 0) {
        onAddCookie({ url: urls[0], id })
        return true
      }
    }

    const updatedChecker = (url: string) => {
      for (let i = 0; i < urls.length; i++) {
        if (checker(urls[i].urls, url)) return true
      }
    }

    sort2.forEach(url => {
      if (!updatedChecker(url)) onAddCookie({ url: 'other', id })
    })
  }
  return {
    sortCookie,
  }
}
