import { FaFacebookF, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-2xl hover:text-blue-500" />
          </a>
          <a href="tel:+1234567890" aria-label="Call">
            <FaPhone className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" aria-label="Location">
            <FaMapMarkerAlt className="text-2xl hover:text-blue-500" />
          </a>
        </div>
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Middleways Films. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
