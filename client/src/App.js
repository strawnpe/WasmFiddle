import React from "react";
import "./App.css";
import Header from './Header';
import CodeInput from './CodeInput';

function App() {
  return (
      <div>
        <div>
          <Header />
        </div>
        <br />
        <div class="ui two column grid">
          <div class="row">
            <div class="column"><CodeInput /></div>
            <div class="column"><CodeOutput /></div>
          </div>
        </div>          
      </div>
  );
}

export default App;