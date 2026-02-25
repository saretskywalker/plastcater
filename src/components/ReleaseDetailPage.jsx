import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Play, ShoppingCart, Heart } from 'lucide-react';
import { getReleaseById } from '../data/releases';
import './ReleaseDetailPage.css';

const ReleaseDetailPage = () => {
  const { releaseId } = useParams();
  const navigate = useNavigate();
  const [release, setRelease] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const foundRelease = getReleaseById(parseInt(releaseId));
    setRelease(foundRelease);

    if (foundRelease) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const isFav = favorites.some(fav => fav.id === foundRelease.id);
      setIsFavorite(isFav);

      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const inCart = cart.some(item => item.id === foundRelease.id);
      setIsInCart(inCart);
    }

    window.scrollTo(0, 0);
  }, [releaseId]);

  const handleAddToFavorites = () => {
    if (!release) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      const filtered = favorites.filter(fav => fav.id !== release.id);
      localStorage.setItem('favorites', JSON.stringify(filtered));
    } else {
      favorites.push(release);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const handleAddToCart = () => {
    if (!release) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (isInCart) {
      const filtered = cart.filter(item => item.id !== release.id);
      localStorage.setItem('cart', JSON.stringify(filtered));
    } else {
      cart.push(release);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    setIsInCart(!isInCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  if (!release) {
    return (
      <div className="release-detail-page">
        <div className="release-detail-container">
          <button className="close-btn" onClick={() => navigate(-1)}>
            <X size={24} />
          </button>
          <p>Release not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="release-detail-page">
      <button className="close-btn" onClick={() => navigate(-1)}>
        <X size={24} />
      </button>

      <div className="release-detail-container">
        {/* ✅ ИСПРАВЛЕНО: Название и артист сверху вместе */}
        <div className="release-detail-title-wrapper">
          <h1 className="release-detail-title">{release.title}</h1>
          <p className="release-detail-artist">{release.artist}</p>
        </div>

        <div className="release-detail-content">
          {/* Левая часть - картинка */}
          <div className="detail-image-section">
            <div className="detail-image-wrapper">
              <img
                src={release.image}
                alt={release.title}
                className="detail-image"
              />
            </div>
          </div>

          {/* Правая часть - информация */}
          <div className="detail-info-section">
            {/* Плашки Label и Format */}
            <div className="detail-meta">
              <div className="meta-item">
                <span className="meta-label">Label</span>
                <span className="meta-value">{release.label}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Format</span>
                <span className="meta-value">{release.format}</span>
              </div>
            </div>

            {/* Описание */}
            <div className="detail-description">
              <h3>Description</h3>
              <p>
                This is an outstanding release featuring cutting-edge production
                and innovative sound design. Perfect for collectors and enthusiasts
                of electronic music. Limited pressing with premium packaging.
              </p>
            </div>

            {/* Дополнительные детали в плашках */}
            <div className="detail-details">
              <h3>Additional Details</h3>
              <ul className="details-list">
                <li>
                  <span className="detail-key">Release Date</span>
                  <span className="detail-value">January 2024</span>
                </li>
                <li>
                  <span className="detail-key">Catalog #</span>
                  <span className="detail-value">PLT-2024-{release.id}</span>
                </li>
                <li>
                  <span className="detail-key">Genre</span>
                  <span className="detail-value">Techno / Electronic</span>
                </li>
                <li>
                  <span className="detail-key">Pressing</span>
                  <span className="detail-value">180g Vinyl</span>
                </li>
              </ul>
            </div>

            {/* ✅ ИСПРАВЛЕНО: Новая компоновка кнопок */}
            <div className="detail-actions-wrapper">
              <div className="detail-actions">
                <button className="action-play">
                  <Play size={18} fill="currentColor" />
                  Play Preview
                </button>
                <button 
                  className={`action-cart ${isInCart ? 'active' : ''}`}
                  onClick={handleAddToCart}
                  title={isInCart ? 'Remove from cart' : 'Add to cart'}
                >
                  <ShoppingCart size={18} />
                  {isInCart ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
              
              <button 
                className={`action-favorites ${isFavorite ? 'active' : ''}`}
                onClick={handleAddToFavorites}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Цена в плашке */}
            <div className="detail-price">
              <span>Price</span>
              <span className="price">€{release.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseDetailPage;