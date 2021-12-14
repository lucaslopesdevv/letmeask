import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from "./pages/Home";

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState('Teste')

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContext.Provider>

    </BrowserRouter>
  );
}

export default App;
