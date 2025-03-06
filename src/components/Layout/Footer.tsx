import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Social media links
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedinIn />, url: "https://gh.linkedin.com/company/prestige-developers" },
    { icon: <FaInstagram />, url: "#" }
  ];

  return (
    <footer className="bg-konta-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-konta-orange">P</span>DEVELOPERS
            </h3>
            <p className="text-gray-400 mb-6">
              We are committed to providing our clients with exceptional service while offering our employees the best training.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target={social.url !== "#" ? "_blank" : ""}
                  rel={social.url !== "#" ? "noopener noreferrer" : ""}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-konta-orange transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Recent Projects', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-konta-orange transition duration-300">
                    &rarr; {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="text-konta-orange mt-1 mr-3" />
                <span className="text-gray-400">
                  123 Construction Avenue, Building City, 10001
                </span>
              </li>
              <li className="flex">
                <FaPhone className="text-konta-orange mt-1 mr-3" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex">
                <FaEnvelope className="text-konta-orange mt-1 mr-3" />
                <span className="text-gray-400">info@prestigedevelopers.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get latest updates and news.
            </p>
            <form>
              <div className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow px-4 py-2 rounded-l focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-konta-orange px-4 py-2 rounded-r hover:bg-konta-orange/80 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Prestige Developers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;