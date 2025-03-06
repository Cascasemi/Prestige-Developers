import React from 'react';
import Button from '../UI/Button';
import PlayButton from '../UI/PlayButton';

// Note: Replace with your actual image import
const heroImage = "/placeholder-images/hero-construction.jpg";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` 
      }}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              QUALITY CONSTRUCTION<br />
              LASTING <span className="text-konta-orange">IMPRESSIONS</span>
            </h1>
            <p className="text-white mb-8">
              Professional construction services for your project needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button primary>GET A QUOTE</Button>
              <Button>OUR SERVICES</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <PlayButton />
      </div>
    </section>
  );
};

export default HeroSection;