import { configureStore } from '@reduxjs/toolkit'
import { sortCookiesSlice, sortFilesSlice, sortPassSlice } from '@/features'

export const store = configureStore({
  reducer: {
    [sortPassSlice.name]: sortPassSlice.reducer,
    [sortFilesSlice.name]: sortFilesSlice.reducer,
    [sortCookiesSlice.name]: sortCookiesSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
