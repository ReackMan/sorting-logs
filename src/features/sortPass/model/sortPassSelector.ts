import { RootState } from '@/app'

export const selectPasswordsUrls = (state: RootState) => state.sortPass.urls
export const selectPasswords = (state: RootState) => state.sortPass.passwords
export const selectPassFiles = (state: RootState) => state.sortPass.files
