import { useAppDispatch, useAppSelector } from '@/common'
import { selectFiles, sortFilesActions } from '@/features'

export const useSortFilesOptions = () => {
  const dispatch = useAppDispatch()
  const files = useAppSelector(selectFiles)
  const onSetFilesInitialState = () => {
    dispatch(sortFilesActions.setInitialState())
  }
  const onAddFiles = (data: File[]) => {
    dispatch(sortFilesActions.addFiles({ files: data }))
  }

  return {
    files,
    onSetFilesInitialState,
    onAddFiles,
  }
}
