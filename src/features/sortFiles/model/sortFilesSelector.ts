import { RootState } from '@/app'

export const selectFiles = (state: RootState) => state.sortFiles.files
