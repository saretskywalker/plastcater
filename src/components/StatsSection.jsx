import React from 'react';
import { Disc3, Truck, Zap, Shield } from 'lucide-react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: Disc3,
      title: '35,000+',
      subtitle: 'titles in stock'
    },
    {
      id: 2,
      icon: Truck,
      title: 'Global',
      subtitle: 'fast shipping'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Daily',
      subtitle: 'new updates'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Secure',
      subtitle: 'packaging'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-wrapper">
                <IconComponent size={24} />
              </div>
              <div className="stat-text-wrapper">
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-subtitle">{stat.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;