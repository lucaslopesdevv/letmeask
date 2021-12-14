import { BrowserRouter, Route } from 'react-router-dom';

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
    </BrowserRouter>
  );
}

export default App;
