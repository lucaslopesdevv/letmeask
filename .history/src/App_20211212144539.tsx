import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
