import React, { useState, useEffect } from 'react';
import { Play, Eye } from 'lucide-react';
import ReleaseModal from './ReleaseModal';
import './SearchResults.css';

const SearchResults = ({ searchQuery, onClose }) => {
  const [results, setResults] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Все доступные пластинки
  const allReleases = [
    {
      id: 1,
      title: 'Electric Dreams',
      artist: 'Synthetic Wave',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      label: 'Digital Records',
      format: 'Vinyl LP'
    },
    {
      id: 2,
      title: 'Neon Nights',
      artist: 'Dark Matter',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
      label: 'Techno Collective',
      format: 'Digital + Vinyl'
    },
    {
      id: 3,
      title: 'Acid Rain',
      artist: 'Cyber Rhythm',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      label: 'Underground Sound',
      format: 'Limited Edition'
    },
    {
      id: 4,
      title: 'Bass Foundation',
      artist: 'Dubstep Masters',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      label: 'Heavy Bass Records',
      format: 'Vinyl LP'
    },
    {
      id: 5,
      title: 'Minimal Space',
      artist: 'Void Echo',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
      label: 'Minimal Vibes',
      format: 'Digital + Vinyl'
    },
    {
      id: 6,
      title: 'Deep House',
      artist: 'Echo Waves',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      label: 'House Records',
      format: 'Vinyl LP'
    },
    {
      id: 7,
      title: 'Ambient Journey',
      artist: 'Sonic Dreams',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
      label: 'Atmospheric Sound',
      format: 'Digital'
    },
    {
      id: 8,
      title: 'Techno Pulse',
      artist: 'Future Beats',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      label: 'Tech Motion',
      format: 'Vinyl LP'
    },
    {
      id: 101,
      title: 'Classics Vol. 1',
      artist: 'Various',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      label: 'Vintage Records',
      format: 'Vinyl LP'
    },
    {
      id: 102,
      title: 'Blue Monday',
      artist: 'New Order',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
      label: 'Factory Records',
      format: 'Digital + Vinyl'
    }
  ];

  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length === 0) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = allReleases.filter(
      release =>
        release.title.toLowerCase().includes(query) ||
        release.artist.toLowerCase().includes(query) ||
        release.label.toLowerCase().includes(query)
    );

    setResults(filtered);
  }, [searchQuery]);

  const handleOpenModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRelease(null);
  };

  if (!searchQuery || searchQuery.trim().length === 0) {
    return null;
  }

  return (
    <>
      <div className="search-results-overlay" onClick={onClose} />
      <div className="search-results-container">
        <div className="search-results-header">
          <h3>Search Results for "{searchQuery}"</h3>
          <span className="results-count">{results.length} results found</span>
        </div>

        {results.length > 0 ? (
          <div className="search-results-list">
            {results.map((release) => (
              <div
                key={release.id}
                className="search-result-item"
                onMouseEnter={() => setHoveredId(release.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="result-image">
                  <img src={release.image} alt={release.title} />
                  
                  {hoveredId === release.id && (
                    <div className="result-overlay"></div>
                  )}

                  {hoveredId === release.id && (
                    <div className="result-actions">
                      <button
                        className="result-action-btn play-btn"
                        title="Play"
                      >
                        <Play size={20} fill="currentColor" />
                      </button>
                      <button
                        className="result-action-btn view-btn"
                        title="View"
                        onClick={() => handleOpenModal(release)}
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className="result-info"
                  onClick={() => handleOpenModal(release)}
                >
                  <h4 className="result-title">{release.title}</h4>
                  <p className="result-artist">{release.artist}</p>
                  <p className="result-meta">{release.label}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="search-results-empty">
            <p>No results found for "{searchQuery}"</p>
            <span>Try searching with different keywords</span>
          </div>
        )}
      </div>

      <ReleaseModal
        release={selectedRelease}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SearchResults;