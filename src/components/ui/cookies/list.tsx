import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import { useSortPassOptions } from '@/features'
import { PasswordsList } from '@components/ui/passwords/list/PasswordsList.tsx'

export const ListCookies = () => {
  const { passwordsObjects, urls } = useSortPassOptions()
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
          Cookies List
        </ListSubheader>
      }
    >
      {passwordsObjects.map(f => {
        return <PasswordsList urls={urls} file={f} />
      })}
    </List>
  )
}
