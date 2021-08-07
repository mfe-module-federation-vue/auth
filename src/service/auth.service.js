import firebase from "./firebase.service";

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        resolve(userCredential.user.refreshToken);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
