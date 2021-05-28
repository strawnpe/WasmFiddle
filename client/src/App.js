import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from './Header';
import CodeInput from './CodeInput';
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
        {/* <div class="ui two column grid">
          <div class="row">
            <div class="column"><CodeInput /></div>
            <div class="column"><CodeOutput /></div>
          </div>
        </div>           */}
      </div>
  );
}

export default App;