import React from 'react';
import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        Content
      </div>
      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
