import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from "./pages/Home";

export const TestContext = createContext({});

function App() {
  const [value, setValue] = useState('Teste')

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </TestContext.Provider>

    </BrowserRouter>
  );
}

export default App;
