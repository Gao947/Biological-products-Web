import React from 'react';
import styles from "./App.module.css";
import BookComponent from './components/Book/Book';
import CarouselComponent from './components/Carousel/Carousel';
import FooterComponent from './components/footer/Footer';
import Header from "./components/Header/Header";
import NewsComponent from './components/News/News';
import PartnerComponent from './components/Partner/Partner.module';
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
      <BookComponent />
      <NewsComponent />
      <PartnerComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
