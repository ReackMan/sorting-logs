import List from '@mui/material/List'
import { ReadCookiesFile, UrlType } from '@/common'
import { Cookie } from '@components/ui/cookies/list/Cookie.tsx'
import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'

type Props = {
  file: ReadCookiesFile
  urls: UrlType[]
}

export const CookiesList = ({ urls, file }: Props) => {
  const [open, setOpen] = useState(false)

  if (Object.keys(file.cookiesObj).length === 0) return

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
        <ListItemText primary={`File name: ${file.name}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={style} component="div" disablePadding>
          {urls.map(u => {
            return <Cookie url={u.name} cookiesObj={file.cookiesObj} />
          })}
        </List>
      </Collapse>
    </>
  )
}
