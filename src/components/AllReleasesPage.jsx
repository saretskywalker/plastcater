import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Eye, ChevronRight } from 'lucide-react';
import './AllReleasesPage.css';

const AllReleasesPage = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const allReleases = {
    techno: {
      name: 'Techno',
      genreId: 'techno',
      releases: [
        {
          id: 101,
          title: 'Electric Dreams',
          artist: 'Synthetic Wave',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'Digital Records',
          format: 'Vinyl LP'
        },
        {
          id: 102,
          title: 'Neon Nights',
          artist: 'Dark Matter',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Techno Collective',
          format: 'Digital + Vinyl'
        },
        {
          id: 103,
          title: 'Techno Pulse',
          artist: 'Future Beats',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Tech Motion',
          format: 'Vinyl LP'
        },
        {
          id: 104,
          title: 'Digital Motion',
          artist: 'Tech Wave',
          image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
          label: 'Motion Records',
          format: 'Digital'
        },
        {
          id: 105,
          title: 'Synthetic Soul',
          artist: 'Echo Lab',
          image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
          label: 'Lab Records',
          format: 'Vinyl LP'
        },
        {
          id: 106,
          title: 'Machine Dreams',
          artist: 'Robot Sound',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'Sound Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 107,
          title: 'Binary Beats',
          artist: 'Code Flow',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Code Records',
          format: 'Vinyl LP'
        },
        {
          id: 108,
          title: 'Circuit Vibes',
          artist: 'Wire Sound',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Wire Records',
          format: 'Limited Edition'
        }
      ]
    },
    house: {
      name: 'House',
      genreId: 'techno',
      releases: [
        {
          id: 201,
          title: 'Deep House Vibes',
          artist: 'Echo Waves',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'House Records',
          format: 'Vinyl LP'
        },
        {
          id: 202,
          title: 'House Grooves',
          artist: 'Groove Master',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Groove Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 203,
          title: 'Funky House',
          artist: 'Funk Collective',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Funk Records',
          format: 'Vinyl LP'
        },
        {
          id: 204,
          title: 'Tech House',
          artist: 'Tech Lovers',
          image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
          label: 'Tech House Records',
          format: 'Digital'
        },
        {
          id: 205,
          title: 'House Journey',
          artist: 'Journey Sound',
          image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
          label: 'Journey Records',
          format: 'Vinyl LP'
        },
        {
          id: 206,
          title: 'Soulful House',
          artist: 'Soul Makers',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'Soul Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 207,
          title: 'Minimal House',
          artist: 'Minimal Crew',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Minimal Records',
          format: 'Vinyl LP'
        },
        {
          id: 208,
          title: 'Progressive House',
          artist: 'Progressive Minds',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Progressive Records',
          format: 'Limited Edition'
        }
      ]
    },
    'drum-bass': {
      name: 'Drum & Bass',
      genreId: 'drum-bass',
      releases: [
        {
          id: 301,
          title: 'Liquid Funk',
          artist: 'Liquid Masters',
          image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
          label: 'Liquid Records',
          format: 'Vinyl LP'
        },
        {
          id: 302,
          title: 'Neurofunk',
          artist: 'Neuro Collective',
          image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
          label: 'Neuro Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 303,
          title: 'Fast Break',
          artist: 'Break Dancers',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'Break Records',
          format: 'Vinyl LP'
        },
        {
          id: 304,
          title: 'Jungle Beats',
          artist: 'Jungle Crew',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Jungle Records',
          format: 'Digital'
        },
        {
          id: 305,
          title: 'Drum Machines',
          artist: 'Machine Masters',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Machine Records',
          format: 'Vinyl LP'
        },
        {
          id: 306,
          title: 'Bass Heavy',
          artist: 'Bass Kings',
          image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
          label: 'Bass Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 307,
          title: 'Jump Up',
          artist: 'Jump Collective',
          image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
          label: 'Jump Records',
          format: 'Vinyl LP'
        },
        {
          id: 308,
          title: 'Atmospheric D&B',
          artist: 'Atmo Sound',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'Atmo Records',
          format: 'Limited Edition'
        }
      ]
    },
    dubstep: {
      name: 'Dubstep',
      genreId: 'dubstep',
      releases: [
        {
          id: 401,
          title: 'Bass Drop',
          artist: 'Drop Masters',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Drop Records',
          format: 'Vinyl LP'
        },
        {
          id: 402,
          title: 'Wobble Sound',
          artist: 'Wobble Crew',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Wobble Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 403,
          title: 'Brostep Vibes',
          artist: 'Bro Sound',
          image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
          label: 'Bro Records',
          format: 'Vinyl LP'
        },
        {
          id: 404,
          title: 'Riddim',
          artist: 'Riddim Masters',
          image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=300&h=300&fit=crop',
          label: 'Riddim Records',
          format: 'Digital'
        },
        {
          id: 405,
          title: 'Heavy Bass',
          artist: 'Heavy Collective',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
          label: 'Heavy Records',
          format: 'Vinyl LP'
        },
        {
          id: 406,
          title: 'Dubstep Journey',
          artist: 'Journey Masters',
          image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=300&h=300&fit=crop',
          label: 'Journey Records',
          format: 'Digital + Vinyl'
        },
        {
          id: 407,
          title: 'Aggressive Dub',
          artist: 'Aggressive Sound',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          label: 'Aggressive Records',
          format: 'Vinyl LP'
        },
        {
          id: 408,
          title: 'Liquid Dubstep',
          artist: 'Liquid Vibes',
          image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
          label: 'Liquid Records',
          format: 'Limited Edition'
        }
      ]
    }
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
        />

        {hoveredId === release.id && (
          <div className="release-overlay"></div>
        )}

        {hoveredId === release.id && (
          <div className="release-actions">
            <button className="action-btn play-btn" title="Play">
              <Play size={28} fill="currentColor" />
            </button>
            <button className="action-btn view-btn" title="View">
              <Eye size={24} />
            </button>
          </div>
        )}
      </div>

      <div className="release-info">
        <h3 className="release-title">{release.title}</h3>
        <p className="release-artist">{release.artist}</p>
        <p className="release-meta">
          {release.label} • {release.format}
        </p>
      </div>
    </div>
  );

  return (
    <div className="all-releases-page">
      <div className="all-releases-container">
        {Object.values(allReleases).map((category) => (
          <section key={category.genreId} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{category.name}</h2>
              <Link 
                to={`/genre/${category.genreId}`}
                className="category-view-all"
              >
                View All
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="category-releases-grid">
              {category.releases.map((release) => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AllReleasesPage;