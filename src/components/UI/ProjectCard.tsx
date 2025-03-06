import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-konta-orange text-white px-3 py-1 rounded">
          {category}
        </div>
        <div className="absolute top-4 right-4 bg-white text-konta-orange w-10 h-10 rounded-full flex items-center justify-center hover:bg-konta-orange hover:text-white transition duration-300">
          <FaPlus />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-konta-orange font-medium hover:underline">READ MORE</a>
      </div>
    </div>
  );
};

export default ProjectCard;