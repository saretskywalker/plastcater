// Структура каждой пластинки:
// {
//   id: уникальный номер,
//   title: название альбома,
//   artist: исполнитель,
//   image: URL обложки,
//   label: лейбл,
//   format: формат (Vinyl LP, Digital, и т.д.)
// }

// Все пластинки организованы по жанрам

export const releasesDatabase = {
  techno: [
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
      label: 'Tech Records',
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
  ],
  house: [
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
      format: 'Digital + Vinyl'
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
  ],
  'drum-bass': [
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
  ],
  dubstep: [
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
};

// ============================================
// КАТЕГОРИИ НОВЫХ И ПОПУЛЯРНЫХ РЕЛИЗОВ
// ============================================

/**
 * Новые релизы (используются в NewReleasesSection)
 */
export const newReleasesIds = [101, 102, 103, 104, 105, 106, 107, 108];

/**
 * Релизы "Back In Stock" (используются в NewReleasesSection)
 */
export const backInStockIds = [101, 102, 103, 104, 105, 106, 107, 108];

// ============================================
// ФУНКЦИИ ПОМОЩНИКИ
// ============================================

/**
 * Получить все новые релизы
 */
export const getNewReleases = () => {
  return newReleasesIds
    .map(id => getReleaseById(id))
    .filter(release => release !== null);
};

/**
 * Получить все релизы "Back In Stock"
 */
export const getBackInStockReleases = () => {
  return backInStockIds
    .map(id => getReleaseById(id))
    .filter(release => release !== null);
};

/**
 * Получить все пластинки конкретного жанра
 */
export const getReleasesByGenre = (genreId) => {
  return releasesDatabase[genreId] || [];
};

/**
 * Получить пластинку по ID из любой категории
 */
export const getReleaseById = (id) => {
  for (const genre in releasesDatabase) {
    const release = releasesDatabase[genre].find(r => r.id === id);
    if (release) return release;
  }
  return null;
};

/**
 * Получить все пластинки из всех жанров
 */
export const getAllReleases = () => {
  const allReleases = [];
  for (const genre in releasesDatabase) {
    allReleases.push(...releasesDatabase[genre]);
  }
  return allReleases;
};

/**
 * Поиск пластинок по названию или исполнителю
 */
export const searchReleases = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return getAllReleases().filter(release => 
    release.title.toLowerCase().includes(lowercaseQuery) ||
    release.artist.toLowerCase().includes(lowercaseQuery) ||
    release.label.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Получить жанры
 */
export const getGenres = () => {
  return Object.keys(releasesDatabase);
};