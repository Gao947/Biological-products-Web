import React from 'react';
import styles from "./App.module.css";
import CarouselComponent from './components/Carousel/Carousel';
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <CarouselComponent />
        Content
      </div>
      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
