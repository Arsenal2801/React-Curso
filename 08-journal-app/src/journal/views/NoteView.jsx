import { Grid, Typography, Button, TextField } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid item >
        <Typography fontSize={39} fontWeight='light'>
          28 de agosto de 2021
        </Typography>
      </Grid>
      <Grid item >
        <Button color="primary" sx={{ padding: 2 }} >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container >
        <TextField
          variant="filled"
          type="text"
          label="Titulo"
          placeholder="Ingrese un titulo"
          fullWidth
          sx={{ border: 'none', mb: 1 }}
        >
        </TextField>
        <TextField
          variant="filled"
          type="text"
          multiline
          placeholder="¿Que paso hoy? ¿Como te sentiste? ¿Que te gustaria hacer mañana?"
          fullWidth
          minRows={5}
        >
        </TextField>
      </Grid>

      {/* Image gallery */}
      <ImageGallery />

    </Grid>
  )
}
