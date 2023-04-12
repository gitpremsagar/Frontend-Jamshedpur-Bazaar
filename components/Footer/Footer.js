import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link href="/">
              <span className="text-base leading-6 text-gray-300 hover:text-white">
                Home
              </span>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about">
              <span className="text-base leading-6 text-gray-300 hover:text-white">
                About Us
              </span>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/blog">
              <span className="text-base leading-6 text-gray-300 hover:text-white">
                Blog
              </span>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact">
              <span className="text-base leading-6 text-gray-300 hover:text-white">
                Contact Us
              </span>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link href="/admin/login">
              <span className="text-base leading-6 text-gray-300 hover:text-white">
                Admin
              </span>
            </Link>
          </div>
        </nav>
        {/* Social Media Handles */}
        {/* <div className="mt-8 flex justify-center space-x-6">
          <span href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </span>
          <span href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </span>
          <span href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </span>
        </div> */}

        <p className="mt-8 text-center text-base leading-6 text-gray-400">
          &copy; 2023 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
