import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Authlayout } from "../layout/Authlayout"
import { useForm } from "../../hooks"
import { startCreateUserWithEmailAndPassword } from "../../store/auth"

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [(value) => value.length >= 1, 'Name is obligatory'],
  email: [(value) => value.includes('@'), 'Email is not valid'],
  password: [(value) => value.length > 5, 'Password is not valid'],
}

export const RegisterPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const isChecking = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState();

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreateUserWithEmailAndPassword(formState));
  }

  return (
    <Authlayout title="Sign Up">
      <form onSubmit={onSubmit}>
        <Grid container >

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Name'
              type={'text'}
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type={'email'}
              placeholder="algo@algo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type={'password'}
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} justifyContent='center'>

            <Grid 
            item xs={12}
            sx={!!errorMessage ? '' : { display: 'none' } }
            >
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12} >
              <Button
                disabled={isChecking}
                type='submit'
                variant="contained"
                fullWidth
              >
                Sign Up
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>
              Are you redy have an acount?
            </Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login' >
              Login
            </Link>

          </Grid>

        </Grid>
      </form>
    </Authlayout>

  )
}
