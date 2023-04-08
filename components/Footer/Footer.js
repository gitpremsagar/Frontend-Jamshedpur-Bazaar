import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link href="/">
              <a className="text-base leading-6 text-gray-300 hover:text-white">
                Home
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about">
              <a className="text-base leading-6 text-gray-300 hover:text-white">
                About Us
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/blog">
              <a className="text-base leading-6 text-gray-300 hover:text-white">
                Blog
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact">
              <a className="text-base leading-6 text-gray-300 hover:text-white">
                Contact Us
              </a>
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
        </div>
        
        <p className="mt-8 text-center text-base leading-6 text-gray-400">
          &copy; 2023 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
