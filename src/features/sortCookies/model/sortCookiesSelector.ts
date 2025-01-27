import { RootState } from '@/app'

export const selectCookiesUrls = (state: RootState) => state.sortCookies.urls
export const selectCookies = (state: RootState) => state.sortCookies.cookies
export const selectCookFiles = (state: RootState) => state.sortCookies.files
