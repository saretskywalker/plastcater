import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import StatsSection from './components/StatsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <StatsSection />
      {/* Остальной контент страницы */}
      <main className="main-content">
        <section className="hero">
          <h2>Welcome to Plastcater</h2>
          <p>Your music store</p>
        </section>
      </main>
    </div>
  );
}

export default App;