import React from "react";
import "./App.css";
import Header from './Header';
import CodeInput from './CodeInput';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
      <div>
        <div>
        <a href="/"><Header /></a>
        </div>
        <br />
        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <CodeInput />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;