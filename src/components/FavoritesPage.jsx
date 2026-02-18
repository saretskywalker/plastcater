import React, { useState, useEffect } from 'react';
import { Play, Eye, Trash2 } from 'lucide-react';
import ReleaseModal from './ReleaseModal';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadFavorites();

    const handleFavoritesUpdated = () => {
      loadFavorites();
    };

    window.addEventListener('favoritesUpdated', handleFavoritesUpdated);

    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdated);
    };
  }, []);

  const loadFavorites = () => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  };

  const handleOpenModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRelease(null);
  };

  const handleRemoveFavorite = (releaseId) => {
    const filtered = favorites.filter(fav => fav.id !== releaseId);
    setFavorites(filtered);
    localStorage.setItem('favorites', JSON.stringify(filtered));
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const ReleaseCard = ({ release }) => (
    <div
      className="release-card"
      onMouseEnter={() => setHoveredId(release.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="release-image-wrapper">
        <img
          src={release.image}
          alt={release.title}
          className="release-image"
          onClick={() => handleOpenModal(release)}
        />

        {hoveredId === release.id && (
          <div className="release-overlay"></div>
        )}

        {hoveredId === release.id && (
          <div className="release-actions">
            <button className="action-btn play-btn" title="Play">
              <Play size={28} fill="currentColor" />
            </button>
            <button 
              className="action-btn view-btn" 
              title="View"
              onClick={() => handleOpenModal(release)}
            >
              <Eye size={24} />
            </button>
            <button 
              className="action-btn delete-btn" 
              title="Remove from favorites"
              onClick={() => handleRemoveFavorite(release.id)}
            >
              <Trash2 size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="release-info" onClick={() => handleOpenModal(release)}>
        <h3 className="release-title">{release.title}</h3>
        <p className="release-artist">{release.artist}</p>
        <p className="release-meta">
          {release.label} • {release.format}
        </p>
      </div>
    </div>
  );

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="page-header">
          <h1 className="page-title">My Favorites</h1>
          <p className="page-subtitle">{favorites.length} items in your collection</p>
        </div>

        {favorites.length > 0 ? (
          <div className="releases-grid">
            {favorites.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">♫</div>
            <h2>No Favorites Yet</h2>
            <p>Start adding your favorite releases to build your collection!</p>
            <a href="/" className="back-to-home">Back to Home</a>
          </div>
        )}
      </div>

      <ReleaseModal 
        release={selectedRelease} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default FavoritesPage;