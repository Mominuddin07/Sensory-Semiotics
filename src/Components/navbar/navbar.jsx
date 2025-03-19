import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle external YouTube link
  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=7Ae0prSLMa4&ab_channel=LearnHowtoSign', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A2E]/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
      
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] blur-md opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
              <span className="relative bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] bg-clip-text text-transparent text-2xl font-bold tracking-tighter">
              Sensory Semiotics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-300 hover:text-[#16DAC7] transition-colors duration-300">
              Home
            </Link>
            <Link to="/Learn" className="text-gray-300 hover:text-[#16DAC7] transition-colors duration-300">
              Learn
            </Link>
            <button 
              onClick={handleVideoClick}
              className="text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
            >
              Videos
            </button>
            
            {/* Action Buttons */}

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
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="py-4 space-y-4">
            <Link to="/" 
              className="block text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/learn" 
              className="block text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <button 
              onClick={() => {
                handleVideoClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-300 hover:text-[#16DAC7] transition-colors duration-300"
            >
              Videos
            </button>

            {/* Feature buttons */}
            <div className="space-y-4 pt-4 border-t border-gray-700">
              <Link to="/sign-to-text" 
                className="block w-full group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0F9B8E] to-[#16DAC7] p-0.5 text-sm font-medium hover:scale-105 transform transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block rounded-lg bg-white px-4 py-2 transition-all duration-300 ease-out group-hover:bg-opacity-0 text-gray-900 group-hover:text-white">
                  Sign To Text
                </span>
              </Link>
              <Link to="/text-to-sign" 
                className="block w-full group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#16DAC7] p-0.5 text-sm font-medium hover:scale-105 transform transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block rounded-lg bg-[#1A1A2E] px-4 py-2 transition-all duration-300 ease-out group-hover:bg-opacity-0 text-white">
                  Text To Sign
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient line at bottom */}
      <div className={`h-px w-full bg-gradient-to-r from-transparent via-[#0F9B8E]/50 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </nav>
  )
} 