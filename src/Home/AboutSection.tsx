import React from 'react';
import Button from '../UI/Button';

// Note: Replace with your actual image imports
const aboutImages = {
  team: "/placeholder-images/team.jpg",
  building: "/placeholder-images/building.jpg"
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img 
                src={aboutImages.team} 
                alt="Construction Team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-konta-orange text-white text-4xl font-bold p-6 rounded">
                25<span className="text-2xl">+</span>
              </div>
            </div>
            <div className="mt-12">
              <img 
                src={aboutImages.building} 
                alt="Construction Project" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <div className="text-konta-orange font-medium mb-2">ABOUT OUR COMPANY</div>
            <h2 className="text-3xl font-bold mb-6">
              We Are Always Think On Your Dream
            </h2>
            <p className="text-gray-600 mb-6">
              Konta Construction has been delivering quality construction services for over 25 years. 
              Our commitment to excellence and customer satisfaction has made us a leader in the industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex">
                <div className="text-konta-orange text-3xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">WORLDWIDE SERVICES</h3>
                  <p className="text-gray-600">Operating globally with local expertise.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="text-konta-orange text-3xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">BEST COMPANY AWARD WINNER</h3>
                  <p className="text-gray-600">Recognized for excellence in construction.</p>
                </div>
              </div>
            </div>
            
            <Button primary>DISCOVER MORE</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;