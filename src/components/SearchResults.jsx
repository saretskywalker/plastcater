import React, { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllReleases } from '../data/releases';
import './SearchResults.css';

const SearchResults = ({ searchQuery, onClose }) => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length === 0) {
      setResults([]);
      return;
    }

    // Получаем все релизы из базы данных
    const allReleases = getAllReleases();
    
    const query = searchQuery.toLowerCase();
    const filtered = allReleases.filter(
      release =>
        release.title.toLowerCase().includes(query) ||
        release.artist.toLowerCase().includes(query) ||
        release.label.toLowerCase().includes(query)
    );

    setResults(filtered);
  }, [searchQuery]);

  // ✅ Открытие карточки товара
  const handleViewDetails = (releaseId) => {
    onClose();
    navigate(`/release/${releaseId}`);
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
          <button className="close-results-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {results.length > 0 ? (
          <div className="search-results-list">
            {results.map((release) => (
              <div
                key={release.id}
                className="search-result-item"
                onClick={() => handleViewDetails(release.id)}
              >
                <div className="result-image">
                  <img src={release.image} alt={release.title} />
                </div>

                <div className="result-info">
                  <h4 className="result-title">{release.title}</h4>
                  <p className="result-artist">{release.artist}</p>
                  <p className="result-meta">{release.label}</p>
                </div>

                {/* ✅ НОВОЕ: Иконка глазика без анимации */}
                <button 
                  className="result-view-btn"
                  title="View Details"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewDetails(release.id);
                  }}
                >
                  <Eye size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="search-results-empty">
            <p>No results found for "{searchQuery}"</p>
            <span className="empty-suggestion">Try searching for artist name, album title, or label</span>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;