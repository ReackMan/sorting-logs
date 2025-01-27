import s from '@app/ui/app.module.css'
import { Cookies, DnD, Passwords } from '@/components'
import { useSortFilesOptions } from '@features/sortFiles'
import { useFilesPage } from '@/app'
import { useEffect, useState } from 'react'
import { useSortCookiesOptions, useSortPassOptions } from '@/features'

export const FilesPage = () => {
  const { files, onSetFilesInitialState, onAddFiles } = useSortFilesOptions()
  const { readPasswords } = useSortPassOptions()
  const { readCookies } = useSortCookiesOptions()

  const { sortFiles } = useFilesPage({ files, readPasswords, readCookies })

  const [isUpload, setIsUpload] = useState(false)

  useEffect(() => {
    onSetFilesInitialState()
  }, [])

  const dnd = (data: File[]) => {
    onAddFiles(data)

    setIsUpload(true)
  }

  return (
    <div className={s.main}>
      <DnD handleFilesDrop={dnd} />
      {isUpload ? (
        <span className={s.uploadedSpan}>Files uploaded</span>
      ) : (
        <span className={s.notUploadedSpan}>Files not uploaded</span>
      )}
      <button onClick={sortFiles} disabled={!isUpload}>
        Sort Files
      </button>
      <div className={s.data}>
        <div className={s.cookies}>
          <Cookies />
        </div>
        <div className={s.passwords}>
          <Passwords />
        </div>
      </div>
    </div>
  )
}
