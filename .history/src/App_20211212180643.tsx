import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from "./pages/Home";
import {auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState();

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
        
        auth.signInWithPopup(provider).then(result => {
          if (result.user){
            const { displayName, photoURL } = result.user
          }          
        })        
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContext.Provider>

    </BrowserRouter>
  );
}

export default App;
