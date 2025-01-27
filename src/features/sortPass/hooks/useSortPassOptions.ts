import { AddPasswordObj, useActions, useAppDispatch, useAppSelector } from '@/common'
import {
  selectPassFiles,
  selectPasswords,
  selectPasswordsUrls,
  sortPassActions,
  sortPassThunks,
} from '@/features'

export const useSortPassOptions = () => {
  const dispatch = useAppDispatch()
  const urls = useAppSelector(selectPasswordsUrls)
  const passwordsObjects = useAppSelector(selectPassFiles)
  const passwords = useAppSelector(selectPasswords)
  const onSetPassInitialState = () => {
    dispatch(sortPassActions.setInitialState())
  }
  const onAddPassword = ({ obj, url, id }: AddPasswordObj) => {
    dispatch(sortPassActions.addPassword({ obj, url, id }))
  }
  const onClearPasswords = () => {
    dispatch(sortPassActions.clearPasswords())
  }
  const { readPasswords } = useActions(sortPassThunks)

  return {
    readPasswords,
    urls,
    passwordsObjects,
    onSetPassInitialState,
    onAddPassword,
    onClearPasswords,
    passwords,
  }
}
