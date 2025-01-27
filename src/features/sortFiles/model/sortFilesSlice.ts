import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  files: [] as File[],
}

export const sortFilesSlice = createSlice({
  name: 'sortFiles',
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<{ files: File[] }>) => {
      state.files = [...action.payload.files]
    },
    setInitialState: () => initialState,
  },
})

export const sortFilesActions = sortFilesSlice.actions
