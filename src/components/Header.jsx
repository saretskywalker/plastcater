import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn, Search, Globe, Heart } from 'lucide-react';
import SearchResults from './SearchResults';
import './Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [language, setLanguage] = useState('en');
  const [searchValue, setSearchValue] = useState('');
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    loadCounts();

    const handleCartUpdated = () => {
      loadCounts();
    };

    const handleFavoritesUpdated = () => {
      loadCounts();
    };

    window.addEventListener('cartUpdated', handleCartUpdated);
    window.addEventListener('favoritesUpdated', handleFavoritesUpdated);
    window.addEventListener('storage', handleCartUpdated);
    window.addEventListener('storage', handleFavoritesUpdated);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdated);
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdated);
      window.removeEventListener('storage', handleCartUpdated);
      window.removeEventListener('storage', handleFavoritesUpdated);
    };
  }, []);

  const loadCounts = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setCartCount(cart.length);
    setFavoriteCount(favorites.length);
  };

  const genres = [
    { id: 'techno', name: 'house' },
    { id: 'drum-bass', name: 'drum & bass' },
    { id: 'dubstep', name: 'dubstep' },
    { id: 'minimal', name: 'minimal' },
    { id: 'electro', name: 'electro' },
    { id: 'acid', name: 'acid' },
    { id: 'ambient', name: 'ambient' },
    { id: 'experimental', name: 'experimental' }
  ];

  const languages = ['EN', 'RU', 'DE', 'FR'];

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setShowSearchResults(e.target.value.trim().length > 0);
  };

  const handleSearchClose = () => {
    setShowSearchResults(false);
  };

  return (
    <header className="header">
      {/* Основной хедлер */}
      <div className="header-top">
        {/* Левая часть - Логотип и название */}
        <div className="header-left">
          <div className="logo-section">
            <Link to="/" className="logo">
              <span className="logo-icon">♫</span>
            </Link>
            <Link to="/" className="site-title">plastcater</Link>
          </div>
        </div>

        {/* Центр - Строка поиска */}
        <div className="header-center">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search artist, label, catalog number..."
              value={searchValue}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Правая часть - Язык, избранное, корзина, логин */}
        <div className="header-right">
          <div className="language-switcher">
            <Globe size={18} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <Link to="/favorites" className="favorites-icon-wrapper" title="Favorites">
            <Heart size={24} />
            {favoriteCount > 0 && (
              <span className="favorites-badge">{favoriteCount}</span>
            )}
          </Link>

          <Link to="/cart" className="cart-icon-wrapper" title="Cart">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          <button className="login-btn">
            <LogIn size={20} />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Меню жанров */}
      <nav className="genres-menu">
        <div className="genres-wrapper">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genre/${genre.id}`}
              className="genre-link"
            >
              {genre.name}
            </Link>
          ))}
          <Link
            to="/sale"
            className="genre-link sale-link"
          >
            sale
          </Link>
        </div>
      </nav>

      {/* Результаты поиска */}
      {showSearchResults && (
        <SearchResults
          searchQuery={searchValue}
          onClose={handleSearchClose}
        />
      )}
    </header>
  );
};

export default Header;