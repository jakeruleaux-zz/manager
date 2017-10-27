import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passWordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const LoginUser = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};
