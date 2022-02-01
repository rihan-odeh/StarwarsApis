import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./Components/Form";

import APIs from "./Components/APIs";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <h1>Star Wars API</h1>
      <Form />
      <Switch>
        <Route path="/:type/:id">
          <APIs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;