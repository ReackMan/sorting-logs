import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DropTarget } from './dropTarget'

export const DndContainer = (props: {
  onDrop: (files: File[]) => void
  disabled: boolean
  title?: string
  hoverTitle?: string
}) => {
  const {
    onDrop,
    disabled,
    title = 'Перетащите сюда файлы',
    hoverTitle = 'Отпустите для загрузки',
  } = props

  return (
    <DndProvider backend={HTML5Backend}>
      <DropTarget onDrop={onDrop} disabled={disabled} title={title} hoverTitle={hoverTitle} />
    </DndProvider>
  )
}
