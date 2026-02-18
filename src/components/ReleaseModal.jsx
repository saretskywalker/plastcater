import React, { useState, useEffect } from 'react';
import { X, Play, ShoppingCart, Heart } from 'lucide-react';
import './ReleaseModal.css';

const ReleaseModal = ({ release, isOpen, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    if (release) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const isFav = favorites.some(fav => fav.id === release.id);
      setIsFavorite(isFav);

      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const inCart = cart.some(item => item.id === release.id);
      setIsInCart(inCart);
    }
  }, [release, isOpen]);

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

    if (!isInCart) {
      const cartItem = {
        ...release,
        price: 29.99,
        quantity: 1
      };
      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsInCart(true);
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  if (!isOpen || !release) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-body">
          {/* Левая часть - изображение */}
          <div className="modal-image-section">
            <div className="modal-image-wrapper">
              <img
                src={release.image}
                alt={release.title}
                className="modal-image"
              />
            </div>
          </div>

          {/* Правая часть - информация */}
          <div className="modal-info-section">
            <div className="modal-info-content">
              <h2 className="modal-title">{release.title}</h2>
              <p className="modal-artist">{release.artist}</p>

              <div className="modal-meta">
                <div className="meta-item">
                  <span className="meta-label">Label</span>
                  <span className="meta-value">{release.label}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Format</span>
                  <span className="meta-value">{release.format}</span>
                </div>
              </div>

              <div className="modal-description">
                <h3>Description</h3>
                <p>
                  High-quality vinyl release featuring premium audio mastering and 
                  beautiful artwork. Limited stock available.
                </p>
              </div>

              <div className="modal-price-section">
                <span className="modal-price">$29.99</span>
                <span className="modal-in-stock">In Stock</span>
              </div>

              <div className="modal-actions">
                <button 
                  className={`action-btn primary-btn ${isInCart ? 'added' : ''}`}
                  onClick={handleAddToCart}
                  disabled={isInCart}
                >
                  <ShoppingCart size={18} />
                  <span>{isInCart ? 'Added to Cart' : 'Add to Cart'}</span>
                </button>
                <button className="action-btn secondary-btn">
                  <Play size={18} fill="currentColor" />
                  <span>Preview</span>
                </button>
                <button 
                  className={`action-btn icon-btn ${isFavorite ? 'favorite-active' : ''}`}
                  onClick={handleAddToFavorites}
                  title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="modal-details">
                <h3>Additional Details</h3>
                <ul className="details-list">
                  <li>
                    <span className="detail-key">Release Date:</span>
                    <span className="detail-value">January 2024</span>
                  </li>
                  <li>
                    <span className="detail-key">Catalog #:</span>
                    <span className="detail-value">PLT-2024-001</span>
                  </li>
                  <li>
                    <span className="detail-key">Genre:</span>
                    <span className="detail-value">Techno / Electronic</span>
                  </li>
                  <li>
                    <span className="detail-key">Pressing:</span>
                    <span className="detail-value">180g Vinyl</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseModal;