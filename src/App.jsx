import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import StatsSection from './components/StatsSection';
import NewReleasesSection from './components/NewReleasesSection';
import TopSellersSection from './components/TopSellersSection';
import AllReleasesPage from './components/AllReleasesPage';
import ReleaseDetailPage from './components/ReleaseDetailPage';
import FavoritesPage from './components/FavoritesPage';
import CartPage from './components/CartPage';
import GenrePage from './components/GenrePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Главная страница */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <StatsSection />
                <NewReleasesSection />
                <TopSellersSection />
                <main className="main-content">
                  <section className="hero">
                    <h2>Welcome to Plastcater</h2>
                    <p>Your music store</p>
                  </section>
                </main>
              </>
            }
          />

          {/* Страница логина */}
          <Route path="/login" element={<LoginPage />} />

          {/* Страница регистрации */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Страница со всеми релизами */}
          <Route path="/all-releases" element={<AllReleasesPage />} />

          {/* Страница деталей пластинки */}
          <Route path="/release/:releaseId" element={<ReleaseDetailPage />} />

          {/* Страница избранного */}
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* Страница корзины */}
          <Route path="/cart" element={<CartPage />} />

          {/* Страница жанра */}
          <Route path="/genre/:genreId" element={<GenrePage />} />
          
          {/* Страница скидок */}
          <Route path="/sale" element={<GenrePage />} />
          
          {/* Каталог */}
          <Route path="/catalog" element={<GenrePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
