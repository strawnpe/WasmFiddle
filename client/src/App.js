import React from "react";
import "./App.css";
import Header from './Header';
import CodeInput from './CodeInput';
import CodeOutput from './CodeOutput';

function App() {
  return (
      <div className="App ui container">
          <Header />
          <CodeInput />
          <CodeOutput />
      </div>
  );
}

export default App;