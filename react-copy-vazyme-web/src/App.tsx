import React from 'react';
import styles from "./App.module.css";
import CarouselComponent from './components/Carousel/Carousel';
import FooterComponent from './components/footer/Footer';
import Header from "./components/Header/Header";
import ProfileComponent from './components/Profile/Profile';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <CarouselComponent />
      <ProfileComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
