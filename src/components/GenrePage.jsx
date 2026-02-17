import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './GenrePage.css';

const GenrePage = () => {
  const { genreId } = useParams();

  const genreData = {
    techno: {
      name: 'TECHNO',
      subgenres: ['RAW', 'DEEP'],
      releases: 1248,
      updated: '09:42 UTC'
    },
    house: {
      name: 'HOUSE',
      subgenres: ['DEEP', 'TECH'],
      releases: 892,
      updated: '08:15 UTC'
    },
    'drum-bass': {
      name: 'DRUM & BASS',
      subgenres: ['LIQUID', 'NEUROFUNK'],
      releases: 756,
      updated: '10:30 UTC'
    },
    dubstep: {
      name: 'DUBSTEP',
      subgenres: ['BROSTEP', 'RIDDIM'],
      releases: 645,
      updated: '07:45 UTC'
    },
    minimal: {
      name: 'MINIMAL',
      subgenres: ['TECH', 'ABSTRACT'],
      releases: 534,
      updated: '11:20 UTC'
    },
    electro: {
      name: 'ELECTRO',
      subgenres: ['ELECTRO HOUSE', 'PROGRESSIVE'],
      releases: 823,
      updated: '09:10 UTC'
    },
    acid: {
      name: 'ACID',
      subgenres: ['ACID HOUSE', 'ACID FUNK'],
      releases: 412,
      updated: '06:55 UTC'
    },
    ambient: {
      name: 'AMBIENT',
      subgenres: ['DARK AMBIENT', 'ATMOSPHERIC'],
      releases: 678,
      updated: '08:40 UTC'
    },
    experimental: {
      name: 'EXPERIMENTAL',
      subgenres: ['NOISE', 'AVANT-GARDE'],
      releases: 523,
      updated: '10:15 UTC'
    },
    sale: {
      name: 'SALE',
      subgenres: ['HOT DEALS', 'LIMITED OFFERS'],
      releases: 2150,
      updated: '12:00 UTC'
    }
  };

  const genre = genreData[genreId] || genreData.techno;

  return (
    <div className="genre-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">HOME</a>
        <span>/</span>
        <a href="/catalog">CATALOG</a>
        <span>/</span>
        <span className="current">{genre.name}</span>
      </div>

      {/* Заголовок жанра */}
      <div className="genre-header-section">
        <div className="genre-title-wrapper">
          <h1 className="genre-title">{genre.name}</h1>
          <div className="genre-subtitle">
            {genre.subgenres.map((sub, idx) => (
              <span key={idx}>
                {sub}
                {idx < genre.subgenres.length - 1 && <span className="separator">/</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="genre-stats">
          <div className="stat-pill">
            <span className="stat-number">{genre.releases.toLocaleString()}</span>
            <span className="stat-label">RELEASES</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">UPDATED:</span>
            <span className="stat-time">{genre.updated}</span>
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="genre-content">
        <div className="content-placeholder">
          {/* Здесь будет список релизов */}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;