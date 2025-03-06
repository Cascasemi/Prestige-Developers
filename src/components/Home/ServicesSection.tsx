import React from 'react';
import ServiceCard from '../UI/ServiceCard';
import { FaBuilding, FaCogs, FaMicrochip, FaFlask } from 'react-icons/fa';

// Note: Replace with your actual image imports
const serviceImages = {
  construction: "/placeholder-images/construction.jpg",
  engineering: "/placeholder-images/engineering.jpg",
  technology: "/placeholder-images/technology.jpg",
  research: "/placeholder-images/research.jpg"
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Real Construction",
      description: "Professional construction services for commercial and residential projects.",
      imageSrc: serviceImages.construction
    },
    {
      icon: <FaCogs />,
      title: "Best Engineering",
      description: "Expert engineering solutions for complex construction challenges.",
      imageSrc: serviceImages.engineering
    },
    {
      icon: <FaMicrochip />,
      title: "Smart Technology",
      description: "Cutting-edge technology integration for modern building systems.",
      imageSrc: serviceImages.technology
    },
    {
      icon: <FaFlask />,
      title: "Chemical Research",
      description: "Advanced material research for sustainable construction methods.",
      imageSrc: serviceImages.research
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Best Service For You</h2>
          <div className="w-20 h-1 bg-konta-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;