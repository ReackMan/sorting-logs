import { AddCookieObj, useActions, useAppDispatch, useAppSelector } from '@/common'
import {
  selectCookFiles,
  selectCookies,
  selectCookiesUrls,
  sortCookiesActions,
  sortCookiesThunks,
} from '@/features'

export const useSortCookiesOptions = () => {
  const dispatch = useAppDispatch()
  const urls = useAppSelector(selectCookiesUrls)
  const cookiesObjects = useAppSelector(selectCookFiles)
  const cookies = useAppSelector(selectCookies)
  const onSetCookiesInitialState = () => {
    dispatch(sortCookiesActions.setInitialState())
  }
  const onAddCookie = ({ url, id }: AddCookieObj) => {
    dispatch(sortCookiesActions.addCookie({ url, id }))
  }
  const { readCookies } = useActions(sortCookiesThunks)
  return {
    onSetCookiesInitialState,
    onAddCookie,
    urls,
    cookiesObjects,
    cookies,
    readCookies,
  }
}
