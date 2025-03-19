import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleVideoClick = () => {
    window.open(
      "https://www.youtube.com/watch?v=7Ae0prSLMa4&ab_channel=LearnHowtoSign",
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* Background with gradient effects matching hero */}
      <div className="relative bg-[#1A1A2E]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute w-[400px] h-[400px] -right-20 -bottom-20">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0F9B8E]/10 via-transparent to-[#16DAC7]/10 blur-2xl animate-[float_20s_ease-in-out_infinite]"></div>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #16DAC7 1px, transparent 1px),
                  linear-gradient(to bottom, #16DAC7 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
        </div>

        {/* Top section with GitHub link */}
        <div className="relative bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7]">
          <div className="container mx-auto px-4">
            <div className="py-4 flex justify-center items-center">
              <div className="text-center text-white">
                <a
                  href="https://github.com/Mominuddin07/Sensory-Semiotics"
                  className="text-white hover:text-[#1A1A2E] transition-colors duration-300"
                >
                  Check out our Github repo for more information!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="relative container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About section */}
            <div className="space-y-4">
              <h6 className="text-xl font-bold text-white">
                Sensory Semiotics
              </h6>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-full"></div>
              <p className="text-gray-300">
                A comprehensive toolkit containing various features related to
                Indian Sign Language.
              </p>
            </div>

            {/* Services section */}
            <div className="space-y-4">
              <h6 className="text-xl font-bold text-white">Services</h6>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-full"></div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Learn"
                    className="text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
                  >
                    Learn Sign
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleVideoClick}
                    className="text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
                  >
                    Videos
                  </button>
                </li>
              </ul>
            </div>

            {/* Useful links section */}
            <div className="space-y-4">
              <h6 className="text-xl font-bold text-white">Useful links</h6>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-full"></div>
              <ul className="space-y-4">
                
                <li>
                  <Link to="/text-to-sign" 
                    className="btn group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#16DAC7] p-0.5 text-base font-medium hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0F9B8E]/50"
                  >
                    <span className="relative rounded-lg  px-4 py-2 transition-all duration-300 ease-out group-hover:bg-opacity-0 text-white flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9"></path>
                      </svg>
                      Text To Sign
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact section */}
            <div className="space-y-4">
              <h6 className="text-xl font-bold text-white">Contact</h6>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-full"></div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <i className="fa fa-home text-[#16DAC7]"></i>
                  <span>Telengana, Hyderabad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-envelope text-[#16DAC7]"></i>
                  <span>mohammedmominuddin07@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-envelope text-[#16DAC7]"></i>
                  <span>mohammedmominuddin@kgr.ac.in</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-phone text-[#16DAC7]"></i>
                  <span>+ 91 8125866930</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-12 pt-8 border-t border-[#0F9B8E]/20">
            <div className="text-center text-gray-400">
              © {new Date().getFullYear()} Copyright
            </div>
          </div>
        </div>

        {/* Scroll to top button - appears when scrolled */}
        {scrollPosition > 300 && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] text-white shadow-lg shadow-[#0F9B8E]/20 hover:scale-110 transition-transform duration-300 z-50"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
