

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/config';
import { logout, login, startLoadingNotes } from '../store';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ uid: null, displayName: null, photoURL: null, error: null}));

      const { uid, displayName, photoURL } = user;
      dispatch(login({ uid, displayName, photoURL, error: null }));
      dispatch( startLoadingNotes() );

    })
  }, [])

  return {  
    status
  };
}
