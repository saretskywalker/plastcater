import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReleaseModal from './ReleaseModal';
import { getNewReleases, getBackInStockReleases } from '../data/releases';
import './NewReleasesSection.css';

const NewReleasesSection = () => {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Получаем данные из базы данных
  const newReleases = getNewReleases();
  const backInStockReleases = getBackInStockReleases();

  const handleOpenModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRelease(null);
  };

  // Компонент карточки с CSS-анимациями
  const ReleaseCard = ({ release }) => (
    <div className="release-card">
      <div className="release-image-wrapper">
        <img
          src={release.image}
          alt={release.title}
          className="release-image"
          onClick={() => handleOpenModal(release)}
        />

        {/* Элементы всегда в DOM для плавной анимации */}
        <div className="release-overlay"></div>

        <div className="release-actions">
          <button className="action-btn play-btn" title="Play">
            <Play size={28} fill="currentColor" />
          </button>
          <button 
            className="action-btn view-btn" 
            title="View"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenModal(release);
            }}
          >
            <Eye size={24} />
          </button>
        </div>
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

      {/* Modal */}
      <ReleaseModal 
        release={selectedRelease} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </>
  );
};

export default NewReleasesSection;