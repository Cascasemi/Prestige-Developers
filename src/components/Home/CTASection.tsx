import React from 'react';
import Button from '../UI/Button';
import PlayButton from '../UI/PlayButton';

// Note: Replace with your actual image import
const ctaImage = "/placeholder-images/construction-equipment.jpg";

const CTASection: React.FC = () => {
  return (
    <section className="bg-konta-orange py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              High Quality Construction Projects & Innovative Design!
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button white>CONTACT OUR STAFF</Button>
              <Button white outline>GET FREE QUOTE</Button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src={ctaImage} 
                alt="Construction Equipment" 
                className="rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3">
                <div className="bg-konta-orange rounded-full p-3">
                  <PlayButton small />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;