import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { Divider, ListItem } from '@mui/material'
import { PasswordsObject, PasswordType } from '../Passwords.tsx'
import LinkIcon from '@mui/icons-material/Link'
import ListItemIcon from '@mui/material/ListItemIcon'
import LoginIcon from '@mui/icons-material/Login'
import PasswordIcon from '@mui/icons-material/Password'
import LockOpenIcon from '@mui/icons-material/LockOpen'

type Props = {
  passwordsObj: PasswordsObject
  url: string
}

export const Password = ({ url, passwordsObj }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  //@ts-ignore
  const passObj = passwordsObj[url]

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={`${url} ${passObj.length} pass`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {passObj.map((url: PasswordType) => {
        const textToCopy = `${url.login}:${url.password}`
        const style = {
          py: 0,
          borderRadius: 2,
          border: '2px solid',
          borderColor: 'divider',
        }

        return (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List sx={style} component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={`URL: ${url.url}`} />
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={`LOGIN: ${url.login}`} />
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PasswordIcon />
                </ListItemIcon>
                <ListItemText primary={`PASSWORD: ${url.password}`} />
              </ListItem>
              <Divider component="li" />
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  navigator.clipboard.writeText(textToCopy)
                }}
              >
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary={`${url.login}:${url.password}`} />
              </ListItemButton>
            </List>
          </Collapse>
        )
      })}
    </>
  )
}
