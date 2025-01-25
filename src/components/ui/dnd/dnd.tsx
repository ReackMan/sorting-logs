import s from './dnd.module.css'
import { DndContainer } from './dndContainer'

type Props = {
  handleFilesDrop: (files: File[]) => void
  title?: string
}
export const DnD = (props: Props) => {
  const { handleFilesDrop, title = 'Перетащите сюда медиафайлы' } = props

  const shouldBeDisabled = false

  return (
    <div className={s.dnd}>
      <DndContainer title={title} onDrop={handleFilesDrop} disabled={shouldBeDisabled} />
    </div>
  )
}
