import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Authlayout } from "../layout/Authlayout"
import { useForm } from "../../hooks"
import { chekingAuthentication, startGoogleLogin, startLoginWithEmailAndPassword } from "../../store/auth"


const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Email is not valid'],
  password: [(value) => value.length > 5, 'Password is not valid'],
}

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);

  const [formSubmitted, setformSubmitted] = useState();

  const {
    formState, email, password, onInputChange,
    isFormValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if (!isFormValid) return;
    dispatch(startLoginWithEmailAndPassword(formState));
  }

  const onGoogleLogin = () => {
    console.log('Google');
    dispatch(startGoogleLogin());
  }


  return (
    <Authlayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container >

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='email'
              onChange={onInputChange}
              value={email}
              label='Email'
              type={'email'}
              placeholder="algo@algo.com"
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='password'
              onChange={onInputChange}
              value={password}
              label='Password'
              type={'password'}
              placeholder="Contraseña"
              fullWidth
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={ !!errorMessage ? { mt: 2 } : { mt: 2, display: 'none' }}>
            <Alert
              severity='error'
              >
              {errorMessage}
            </Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12} sm={6} >
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} >
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleLogin}
                variant="contained"
                fullWidth
              >
                <Google />

                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>

              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>

            <Link component={RouterLink} color='inherit' to='/auth/register' >
              Sign Up
            </Link>

          </Grid>

        </Grid>
      </form>
    </Authlayout>
  )
}
