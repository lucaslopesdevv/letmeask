import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from "./pages/Home";
import { auth, firebase } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscripe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscripe();
    }

  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);


    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <AuthContextProvider>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </AuthContextProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
