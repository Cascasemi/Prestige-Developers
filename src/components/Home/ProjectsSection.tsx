import React from 'react';
import ProjectCard from '../UI/ProjectCard';

// Note: Replace with your actual image imports
const projectImages = {
  foundation: "/placeholder-images/foundation.jpg",
  interior: "/placeholder-images/interior-design.jpg",
  architecture: "/placeholder-images/architecture.jpg"
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      category: "Construction",
      title: "Foundation & Building",
      description: "Professional foundation work for commercial buildings with superior quality materials.",
      imageSrc: projectImages.foundation
    },
    {
      category: "Design",
      title: "Interior Design",
      description: "Modern interior design services that transform spaces with style and functionality.",
      imageSrc: projectImages.interior
    },
    {
      category: "Architecture",
      title: "Exterior Design",
      description: "Innovative exterior design that creates lasting impressions and curb appeal.",
      imageSrc: projectImages.architecture
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-konta-orange font-medium mb-2">OUR PROJECTS</div>
          <h2 className="text-3xl font-bold mb-4">Building Your Dream Projects</h2>
          <div className="w-20 h-1 bg-konta-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              category={project.category}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;