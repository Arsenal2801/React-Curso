import { useMemo } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store'


export const SideBarItem = ({ title, body, date, id, imageUrl=[] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch( setActiveNote({ title, body, date, id, imageUrl }) );
  };

  const newTitle = useMemo(()=> {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title

  }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid
          container
        >
          <Grid item xs={12}>
            <ListItemText primary={newTitle} />
          </Grid>
          <Grid item xs={12}>
            <ListItemText secondary={date} />
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
