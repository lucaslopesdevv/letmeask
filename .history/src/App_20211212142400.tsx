import { BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Route path="/" Component={Home}/>
    </BrowserRouter>
  );
}

export default App;
