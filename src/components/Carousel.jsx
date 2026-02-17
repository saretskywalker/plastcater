import React, { useState, useEffect } from 'react';
import { Play, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Данные для карусели
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611339555312-e607c25352ba?w=1200&h=600&fit=crop',
      songName: 'Neon Dreams',
      artist: 'Synthetic Wave',
      label: 'Digital Records',
      format: 'Vinyl LP',
      year: '2024',
      price: '$24.99'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c19?w=1200&h=600&fit=crop',
      songName: 'Electric Pulse',
      artist: 'Dark Matter',
      label: 'Techno Collective',
      format: 'Digital + Vinyl',
      year: '2024',
      price: '$32.99'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop',
      songName: 'Acid Rain',
      artist: 'Cyber Rhythm',
      label: 'Underground Sound',
      format: 'Limited Edition',
      year: '2024',
      price: '$39.99'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop',
      songName: 'Bass Foundation',
      artist: 'Dubstep Masters',
      label: 'Heavy Bass Records',
      format: 'Vinyl LP',
      year: '2024',
      price: '$27.99'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop',
      songName: 'Minimal Space',
      artist: 'Void Echo',
      label: 'Minimal Vibes',
      format: 'Digital + Vinyl',
      year: '2024',
      price: '$29.99'
    }
  ];

  // Автоматическая смена слайдов
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextSlide((prev) => (prev + 1) % slides.length);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setNextSlide(((prev) => (prev + 1) % slides.length));
        setIsTransitioning(false);
      }, 600);
    }, 5000); // Смена каждые 5 секунд

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const handleDotClick = (index) => {
    if (index === currentSlide) return;
    
    setIsTransitioning(true);
    setNextSlide(index);
    
    setTimeout(() => {
      setCurrentSlide(index);
      setNextSlide((index + 1) % slides.length);
      setIsTransitioning(false);
    }, 600);
    
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {/* Изображение с плашкой */}
        <div className="carousel-image-wrapper">
          {/* Текущее изображение */}
          <div className={`carousel-image-layer carousel-image-current ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <img
              src={currentSlideData.image}
              alt={currentSlideData.songName}
              className="carousel-image"
            />
          </div>

          {/* Следующее изображение (предзагрузка) */}
          {isTransitioning && (
            <div className="carousel-image-layer carousel-image-next fade-in">
              <img
                src={slides[nextSlide].image}
                alt={slides[nextSlide].songName}
                className="carousel-image"
              />
            </div>
          )}

          {/* Плашка exclusive pre-order слева сверху */}
          <div className="exclusive-badge">
            <span className="badge-text">exclusive pre-order</span>
          </div>

          {/* Информация о песне слева снизу */}
          <div className={`slide-info ${isTransitioning ? 'fade-out-text' : 'fade-in-text'}`}>
            <h2 className="song-name">{currentSlideData.songName}</h2>
            <div className="song-details">
              <p className="detail-text">
                {currentSlideData.artist} • {currentSlideData.label}
              </p>
              <p className="detail-text">
                {currentSlideData.format} • {currentSlideData.year}
              </p>
              <p className="detail-price">{currentSlideData.price}</p>
            </div>

            {/* Кнопки */}
            <div className="action-buttons">
              <button className="btn-listen-now">
                <Play size={16} fill="currentColor" />
                <span>Listen Now</span>
              </button>
              <button className="btn-view-details">
                View Details
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Точки навигации справа снизу */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Индикатор слайда */}
      <div className="carousel-counter">
        <span>{currentSlide + 1}</span>
        <span>/</span>
        <span>{slides.length}</span>
      </div>
    </section>
  );
};

export default Carousel;