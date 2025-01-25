import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { selectPasswords, selectPasswordsUrls, sortPassActions } from '@/features'
import { AddPasswordObj } from '@components/ui/passwords/usePasswords.ts'

export const useSortPassOptions = () => {
  const dispatch = useAppDispatch()
  const urls = useAppSelector(selectPasswordsUrls)
  const passwords = useAppSelector(selectPasswords)
  const onSetInitialState = () => {
    dispatch(sortPassActions.setInitialState())
  }
  const onAddPassword = ({ obj, url }: AddPasswordObj) => {
    dispatch(sortPassActions.addPassword({ obj, url }))
  }
  const onClearPasswords = () => {
    dispatch(sortPassActions.clearPasswords())
  }

  return {
    urls,
    onSetInitialState,
    onAddPassword,
    onClearPasswords,
    passwords,
  }
}
