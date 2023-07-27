import { Grid, Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Grid
        className='animate__pulse animate__animated animate__infinite'
        item
        xs={12}
      >
        <StarOutline
          sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          Selecciona una entrada o crea una nueva
        </Typography>
      </Grid>
    </Grid>
  )
}
