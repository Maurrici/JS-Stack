import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from 'firebase/app';

function App() {
  const app = initializeApp({
    apiKey: "AIzaSyAgdnlNumcAmETBfGptPjlwFSGRpVrIcFg",
    authDomain: "qol-monitor.firebaseapp.com",
    projectId: "qol-monitor",
    storageBucket: "qol-monitor.appspot.com",
    messagingSenderId: "311703332078",
    appId: "1:311703332078:web:9e6846cd09526dfe9a3fff",
    measurementId: "G-3N8GM4JGE1"
  });

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("Entrou:", result);
      console.log("Credenciais:", credential);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("Error: ", error);
      console.log("Credenciais: ", credential);
    });
  };

  return (
    <div className="App">
      <button onClick={() => handleGoogleLogin()}>Login com o Google</button>
    </div>
  );
}

export default App;