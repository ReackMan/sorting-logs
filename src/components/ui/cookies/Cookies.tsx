import { useEffect } from 'react'
import { useSortCookiesOptions } from '@/features'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import { CookiesList } from '@components/ui/cookies/list/CookiesList.tsx'

export const Cookies = () => {
  const { onSetCookiesInitialState, cookiesObjects, urls } = useSortCookiesOptions()

  useEffect(() => {
    onSetCookiesInitialState()
  }, [])

  return (
    <>
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
        {cookiesObjects.map(f => {
          return <CookiesList urls={urls} file={f} />
        })}
      </List>
    </>
  )
}
