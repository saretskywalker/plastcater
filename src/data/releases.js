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
    // ... остальные пластинки
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
    // ... остальные
  ],
  // Другие жанры...
};

// Функция для получения всех пластинок конкретного жанра
export const getReleasesByGenre = (genreId) => {
  return releasesDatabase[genreId] || [];
};

// Функция для поиска пластинки по ID
export const getReleaseById = (id) => {
  for (const genre in releasesDatabase) {
    const release = releasesDatabase[genre].find(r => r.id === id);
    if (release) return release;
  }
  return null;
};

// Функция для получения всех пластинок
export const getAllReleases = () => {
  const allReleases = [];
  for (const genre in releasesDatabase) {
    allReleases.push(...releasesDatabase[genre]);
  }
  return allReleases;
};