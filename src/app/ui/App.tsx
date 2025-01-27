import { Provider } from 'react-redux'

import './App.css'
import { store } from '@/app'
import { FilesPage } from '@/pages'

export function App() {
  return (
    <Provider store={store}>
      <FilesPage />
    </Provider>
  )
}
