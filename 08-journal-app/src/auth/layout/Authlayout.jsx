import { Grid, Typography } from "@mui/material"

export const Authlayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

      <Grid
        item
        className="animate__animated animate__fadeInRightBig animate__faster box-shadow"
        xs={0}
        sx={{ width: {md:450}, backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }} >{ title }</Typography>

        { children }
        
      </Grid>
    </Grid>
  )
}
