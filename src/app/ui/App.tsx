import { Provider } from 'react-redux'

import './App.css'
import s from './app.module.css'
import { Passwords } from '@/components'
import { store } from '@/app'

export function App() {
  return (
    <Provider store={store}>
      <div className={s.main}>
        {/*<div className={s.cookies}>*/}
        {/*  <textarea />*/}
        {/*  <button>Sort Cookie</button>*/}
        {/*</div>*/}
        <div className={s.passwords}>
          <Passwords />
        </div>
      </div>
    </Provider>
  )
}
