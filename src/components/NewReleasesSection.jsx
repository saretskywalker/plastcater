import React, { useState, useEffect } from 'react';
import { Play, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getNewReleases, getBackInStockReleases } from '../data/releases';
import './NewReleasesSection.css';

const NewReleasesSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const newReleases = getNewReleases();
  const backInStockReleases = getBackInStockReleases();

  useEffect(() => {
    setIsLoading(false);
    loadCart();

    // Слушаем обновления корзины
    const handleCartUpdated = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdated);
    return () => window.removeEventListener('cartUpdated', handleCartUpdated);
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart.map(item => item.id));
  };

  const isInCart = (releaseId) => {
    return cartItems.includes(releaseId);
  };

  const handleViewDetails = (e, releaseId) => {
    e.preventDefault();
    navigate(`/release/${releaseId}`);
  };

  // Компонент карточки с CSS-анимациями
  const ReleaseCard = ({ release }) => (
    <Link 
      to={`/release/${release.id}`}
      className={`release-card ${isLoading ? 'no-animation' : ''} ${isInCart(release.id) ? 'in-cart' : ''}`}
      style={{ textDecoration: 'none' }}
    >
      <div className="release-image-wrapper">
        <img
          src={release.image}
          alt={release.title}
          className="release-image"
        />

        <div className="release-overlay"></div>

        <div className="release-actions">
          <button 
            className="action-btn play-btn" 
            title="Play"
            onClick={(e) => e.preventDefault()}
          >
            <Play size={28} fill="currentColor" />
          </button>
          <button 
            className="action-btn view-btn" 
            title="View Details"
            onClick={(e) => handleViewDetails(e, release.id)}
          >
            <Eye size={24} />
          </button>
        </div>
      </div>

      <div className="release-info">
        <h3 className="release-title">{release.title}</h3>
        <p className="release-artist">{release.artist}</p>
        <p className="release-meta">
          {release.label} • {release.format}
        </p>
      </div>
    </Link>
  );

  return (
    <>
      {/* New This Week */}
      <section className="new-releases-section">
        <div className="new-releases-container">
          <div className="section-header">
            <h2 className="section-title">New This Week</h2>
            <Link to="/all-releases" className="view-all-link">View All Releases</Link>
          </div>

          <div className="releases-grid">
            {newReleases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        </div>
      </section>

      {/* Back In Stock */}
      <section className="back-in-stock-section">
        <div className="back-in-stock-container">
          <div className="section-header">
            <h2 className="section-title">Back In Stock</h2>
            <Link to="/all-releases" className="view-all-link">View All Releases</Link>
          </div>

          <div className="releases-grid">
            {backInStockReleases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewReleasesSection;