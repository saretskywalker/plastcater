import React, { useState, useEffect } from 'react';
import { Play, Eye } from 'lucide-react';
import './ReleaseCard.css';

const ReleaseCard = ({ release, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  // ✅ НОВОЕ: State для отключения анимаций при загрузке
  const [isLoading, setIsLoading] = useState(true);

  // ✅ НОВОЕ: Отключаем режим загрузки после монтирования
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div
      className={`release-card ${isLoading ? 'no-animation' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(release)}
    >
      <div className="release-image-wrapper">
        <img
          src={release.image}
          alt={release.title}
          className="release-image"
        />
        
        {isHovered && <div className="release-overlay"></div>}
        
        {isHovered && (
          <div className="release-buttons">
            <button
              className="circle-btn play-btn"
              title="Play"
              onClick={(e) => e.stopPropagation()}
            >
              <Play size={24} fill="currentColor" />
            </button>
            <button
              className="circle-btn view-btn"
              title="View Details"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(release);
              }}
            >
              <Eye size={24} />
            </button>
          </div>
        )}
      </div>

      <div className="release-info">
        <h3 className="release-title">{release.title}</h3>
        <p className="release-artist">{release.artist}</p>
        <p className="release-meta">{release.label} • {release.format}</p>
      </div>
    </div>
  );
};

export default ReleaseCard;