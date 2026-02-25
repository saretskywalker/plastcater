import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Eye, ChevronRight } from 'lucide-react';
import ReleaseModal from './ReleaseModal';
import { releasesDatabase, getReleasesByGenre, getGenres } from '../data/releases';
import './AllReleasesPage.css';

const AllReleasesPage = () => {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Получаем все жанры из базы данных
  const genres = getGenres();

  const handleOpenModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRelease(null);
  };

  // Компонент карточки релиза
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

  // Маппинг названий жанров для отображения
  const genreNames = {
    techno: 'Techno',
    house: 'House',
    'drum-bass': 'Drum & Bass',
    dubstep: 'Dubstep'
  };

  return (
    <div className="all-releases-page">
      <div className="all-releases-header">
        <h1 className="all-releases-title">All Releases</h1>
        <p className="all-releases-subtitle">Browse our complete collection of electronic music</p>
      </div>

      <div className="all-releases-container">
        {genres.map((genreId) => {
          const releases = getReleasesByGenre(genreId);
          
          return (
            <section key={genreId} className="category-section">
              <div className="category-header">
                <h2 className="category-title">{genreNames[genreId] || genreId}</h2>
                <Link 
                  to={`/genre/${genreId}`}
                  className="category-view-all"
                >
                  View All
                  <ChevronRight size={18} />
                </Link>
              </div>

              <div className="category-releases-grid">
                {releases.map((release) => (
                  <ReleaseCard key={release.id} release={release} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal */}
      <ReleaseModal 
        release={selectedRelease} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AllReleasesPage;