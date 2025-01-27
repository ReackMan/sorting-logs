import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { CookiesObject } from '@/common'

type Props = {
  cookiesObj: CookiesObject
  url: string
}

export const Cookie = ({ url, cookiesObj }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  //@ts-ignore
  const cookObj = cookiesObj[url]

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={`${url} ${cookObj.count} cookies`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </>
  )
}
