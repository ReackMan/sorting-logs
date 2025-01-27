import List from '@mui/material/List'
import { Password } from '@components/ui/passwords/list/Password.tsx'
import { ReadPasswordsFile, UrlType } from '@/common'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItemButton from '@mui/material/ListItemButton'
import Collapse from '@mui/material/Collapse'
import { useState } from 'react'

type Props = {
  file: ReadPasswordsFile
  urls: UrlType[]
}

export const PasswordsList = ({ file, urls }: Props) => {
  const [open, setOpen] = useState(false)

  if (Object.keys(file.passObj).length === 0) return

  const handleClick = () => {
    setOpen(!open)
  }

  const style = {
    py: 0,
    borderRadius: 2,
    border: '2px solid',
    borderColor: 'divider',
    pl: 4,
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={`File name: ${file.name} | ${Math.ceil(file.size / 1024)} KB`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={style} component="div" disablePadding>
          {urls.map(u => {
            return <Password url={u.name} passwordsObj={file.passObj} />
          })}
        </List>
      </Collapse>
    </>
  )
}
