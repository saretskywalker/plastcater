import React, { useState } from 'react';
import { ShoppingCart, LogIn, Search, Globe } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [language, setLanguage] = useState('en');
  const [searchValue, setSearchValue] = useState('');
  const [activeGenre, setActiveGenre] = useState('house');

  const genres = [
    'house',
    'drum & bass',
    'dubstep',
    'minimal',
    'electro',
    'acid',
    'ambient',
    'experimental'
  ];

  const languages = ['EN', 'RU', 'DE', 'FR'];

  return (
    <header className="header">
      {/* Основной хедлер */}
      <div className="header-top">
        {/* Левая часть - Логотип и название */}
        <div className="header-left">
          <div className="logo-section">
            <div className="logo">
              <span className="logo-icon">♫</span>
            </div>
            <h1 className="site-title">plastcater</h1>
          </div>
        </div>

        {/* Центр - Строка поиска */}
        <div className="header-center">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search artist, label, catalog number..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Правая часть - Язык, корзина, логин */}
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

          <div className="cart-icon-wrapper">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>

          <button className="login-btn">
            <LogIn size={20} />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Меню жанров */}
      <div className="genres-menu">
        <div className="genres-wrapper">
          {genres.map((genre) => (
            <a
              key={genre}
              href={`#${genre.toLowerCase()}`}
              className={`genre-link ${activeGenre === genre ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveGenre(genre);
              }}
            >
              {genre}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;