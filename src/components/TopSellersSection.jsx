import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopSellersThisMonth } from '../data/releases';
import './TopSellersSection.css';

const TopSellersSection = () => {
  const navigate = useNavigate();
  const topSellers = getTopSellersThisMonth();

  const handleViewRelease = (releaseId) => {
    navigate(`/release/${releaseId}`);
  };

  return (
    <section className="top-sellers-section">
      <div className="top-sellers-container">
        <h2 className="top-sellers-title">Top Sellers This Month</h2>

        <div className="top-sellers-list">
          {topSellers.map((release) => (
            <div 
              key={release.id}
              className="top-seller-item"
              onClick={() => handleViewRelease(release.id)}
            >
              {/* Номер ранга */}
              <div className="seller-rank">
                <span className="rank-number">
                  {String(release.rank).padStart(2, '0')}
                </span>
              </div>

              {/* Изображение */}
              <div className="seller-image-wrapper">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="seller-image"
                />
              </div>

              {/* Информация */}
              <div className="seller-info">
                <h3 className="seller-title">{release.title}</h3>
                <p className="seller-artist">{release.artist}</p>
              </div>

              {/* ✅ ОБНОВЛЕНО: Цена берется из базы */}
              <div className="seller-price">
                <span className="price-value">€{release.price.toFixed(2)}</span>
              </div>

              {/* Кнопка добавления */}
              <button 
                className="seller-add-btn"
                title="Add to cart"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewRelease(release.id);
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellersSection;