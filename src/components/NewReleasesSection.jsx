import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReleaseModal from './ReleaseModal';
import './NewReleasesSection.css';

const NewReleasesSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newReleases = [
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
    }
  ];

  const backInStockReleases = [
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
    },
    {
      id: 103,
      title: 'Synthetic Dreams',
      artist: 'Depeche Mode',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      label: 'Mute Records',
      format: 'Vinyl LP'
    },
    {
      id: 104,
      title: 'Underground',
      artist: 'Joy Division',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      label: 'Factory Records',
      format: 'Limited Edition'
    },
    {
      id: 105,
      title: 'Minimal Future',
      artist: 'Kraftwerk',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
      label: 'Philips Records',
      format: 'Vinyl LP'
    },
    {
      id: 106,
      title: 'House Classics',
      artist: 'Various Artists',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      label: 'Trax Records',
      format: 'Digital + Vinyl'
    },
    {
      id: 107,
      title: 'Ambient Masterpiece',
      artist: 'Brian Eno',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
      label: 'Polydor Records',
      format: 'Vinyl LP'
    },
    {
      id: 108,
      title: 'Techno Revolution',
      artist: 'Various',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      label: 'Warp Records',
      format: 'Limited Edition'
    }
  ];

  const handleOpenModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRelease(null);
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