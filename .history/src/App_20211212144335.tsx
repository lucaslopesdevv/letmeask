import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />}/>
    </BrowserRouter>
  );
}

export default App;
