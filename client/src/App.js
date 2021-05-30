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
        <div>
          <CodeInput />
        </div>
      </div>
  );
}

export default App;