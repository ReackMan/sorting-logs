import { useEffect } from 'react'
import { useSortPassOptions } from '@/features'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { PasswordsList } from '@components/ui/passwords/list/PasswordsList.tsx'

export const Passwords = () => {
  const { onSetPassInitialState, passwordsObjects, urls } = useSortPassOptions()

  useEffect(() => {
    onSetPassInitialState()
  }, [])

  // const { passwordsObjects, urls } = useSortPassOptions()
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
      {passwordsObjects.map(f => {
        return <PasswordsList urls={urls} file={f} />
      })}
    </List>
  )
}
