import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { Password } from '@components/ui/passwords/list/Password.tsx'
import { PasswordsObject, UrlType } from '@/components'

type Props = {
  passwordsObj: PasswordsObject
  urls: UrlType[]
}

export const PasswordsList = ({ urls, passwordsObj }: Props) => {
  if (Object.keys(passwordsObj).length === 0) return

  return (
    <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          color="default"
          sx={{ borderRadius: 2 }}
        >
          Passwords List
        </ListSubheader>
      }
    >
      {urls.map(u => {
        return <Password url={u.name} passwordsObj={passwordsObj} />
      })}
    </List>
  )
}
