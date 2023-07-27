import { loginWithGoogle, registerWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/provider";
import { checkingCredentials, logout, login } from "./";

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await loginWithGoogle();
    if (!res.ok) return dispatch(logout(res.error));
    dispatch(login(res));
  };
};

export const startCreateUserWithEmailAndPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, error } = await registerWithEmailPassword({ email, password, displayName });

    if (!ok) return dispatch(logout({ error }));
    

    dispatch(login({ displayName, email, photoURL, uid }));
  };
};


export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, error, displayName } = await loginWithEmailPassword({ email, password });

    if (!ok) return dispatch(logout({ error }));
    

    dispatch(login({ displayName, email, photoURL, uid }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};