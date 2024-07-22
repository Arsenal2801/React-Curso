import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Typography, Button, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  );

  const { body, title, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "Guardado",
        text: "La nota se guardo correctamente",
        icon: "success",
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          variant="filled"
          type="text"
          label="Titulo"
          placeholder="Ingrese un titulo"
          fullWidth
          name="title"
          onChange={onInputChange}
          value={title}
          sx={{ border: "none", mb: 1 }}
        ></TextField>
        <TextField
          variant="filled"
          type="text"
          multiline
          placeholder="¿Que paso hoy? ¿Como te sentiste? ¿Que te gustaria hacer mañana?"
          fullWidth
          minRows={5}
          name="body"
          onChange={onInputChange}
          value={body}
        ></TextField>
      </Grid>

      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  );
};
