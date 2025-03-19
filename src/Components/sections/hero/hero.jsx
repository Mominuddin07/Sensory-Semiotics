import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Particle effect for the background
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-[#0F9B8E] rounded-full opacity-50';
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.animation = `float-particle ${Math.random() * 3 + 2}s linear infinite`;
      return particle;
    };

    const particleContainer = document.getElementById('particle-container');
    if (particleContainer) {
      for (let i = 0; i < 50; i++) {
        particleContainer.appendChild(createParticle());
      }
    }

    // Scroll position handler
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (particleContainer) {
        particleContainer.innerHTML = '';
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Fixed background that spans both sections */}
      <div className="fixed inset-0 bg-gradient-to-br-z-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Orbital Spheres */}
          <div className="absolute w-[600px] h-[600px] -left-40 -top-40">
            <div className="w-full h-full rounded-full border-[2px] border-[#0F9B8E]/20 animate-[spin_40s_linear_infinite]">
              <div className="absolute w-32 h-32 top-1/2 -right-16">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#0F9B8E]/20 to-[#16DAC7]/20 blur-xl animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute w-[400px] h-[400px] right-20 top-40">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#16DAC7]/10 via-transparent to-[#0F9B8E]/10 blur-2xl animate-[float_20s_ease-in-out_infinite]"></div>
          </div>

          {/* Interactive Light Points */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${-Math.random() * 5}s`
              }}
            >
              <div className="w-full h-full rounded-full bg-[#16DAC7] blur-sm animate-ping"></div>
            </div>
          ))}

          {/* Geometric Patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#0F9B8E]/20 rounded-lg transform rotate-45 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#16DAC7]/20 rounded-lg transform -rotate-45 animate-[spin_25s_linear_infinite]"></div>
          </div>

          {/* Glowing Spheres */}
          <div className="absolute w-[300px] h-[300px] left-1/3 top-1/4">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#0F9B8E]/5 to-[#16DAC7]/5 blur-xl animate-[pulse_8s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0F9B8E]/10 to-transparent animate-[spin_15s_linear_infinite]"></div>
            </div>
          </div>

          {/* Dynamic Light Trails */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#16DAC7]/20 to-transparent top-1/3 animate-[float_15s_ease-in-out_infinite]"></div>
            <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-[#0F9B8E]/20 to-transparent left-2/3 animate-[float_12s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Enhanced Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, #16DAC7 1px, transparent 1px),
              linear-gradient(to bottom, #16DAC7 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, #0F9B8E 0.5px, transparent 1px)
            `,
            backgroundSize: '30px 30px, 30px 30px, 15px 15px'
          }}></div>
        </div>

        {/* Atmospheric Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F9B8E]/5 to-transparent animate-pulse-slow"></div>
          <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-[#16DAC7]/5 rounded-full blur-3xl animate-pulse-slower"></div>
        </div>

        {/* Particle System */}
        <div id="particle-container" className="absolute inset-0 overflow-hidden opacity-70" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative max-w-6xl mx-auto w-full">
          <div className="text-center">
            <div className="relative inline-flex mb-4 sm:mb-8 group" data-aos="fade-up">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] blur-2xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-300"></div>
              <span className="relative bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter transform group-hover:scale-105 transition-transform duration-300">
                Sensory Semiotics
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-tighter tracking-tighter mb-4 sm:mb-6 text-white" data-aos="fade-up">
              Breaking Barriers in <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0F9B8E] via-[#16DAC7] to-[#0F9B8E] animate-gradient-x">
                Sign Language Communication
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200">
                Transform sign language into text and vice versa instantly. Experience seamless communication with cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div data-aos="fade-up" data-aos-delay="600">
                  <Link to="/text-to-sign" 
                    className="w-full sm:w-auto btn group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#16DAC7] p-0.5 text-base font-medium hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0F9B8E]/50">
                    <span className="relative rounded-lg px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0 text-white flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9"></path>
                      </svg>
                      Text To Sign
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div 
          onClick={scrollToFeatures}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[#0F9B8E] text-xs sm:text-sm tracking-wider group-hover:text-[#16DAC7] transition-colors duration-300">
              Discover More
            </span>
            <div className="relative">
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 text-[#0F9B8E] animate-bounce group-hover:text-[#16DAC7] transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <div className="absolute inset-0 bg-[#0F9B8E] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced interactivity */}
      <section id="features-section" className="relative min-h-screen flex items-center">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="relative" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7]">Sensory Semiotics</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] mx-auto mb-8 sm:mb-16 rounded-full"></div>
          </div>
          
          <div className="max-w-sm mx-auto grid gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* Feature cards */}
            {[
              {
                icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
                title: "Real-Time Translation",
                description: "Instant conversion between sign language and text with high accuracy.",
                stats: "70.9% Accuracy"
              },
              {
                icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                title: "Seamless Communication",
                description: "Bridge the gap between sign language users and others effortlessly.",
                stats: "Zero Delay"
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "AI-Powered Accuracy",
                description: "Advanced machine learning ensures precise and reliable translations.",
                stats: "ML Powered"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center group p-4 sm:p-6" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#0F9B8E]/20">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-[#16DAC7] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-center text-gray-300 text-sm sm:text-base mb-4">
                  {feature.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#0F9B8E]/10 text-[#16DAC7] border border-[#0F9B8E]/20">
                    {feature.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Back to top button */}
          {scrollPosition > 300 && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] text-white shadow-lg shadow-[#0F9B8E]/20 hover:scale-110 transition-transform duration-300 z-50"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          )}
        </div>
      </section>
    </div>
  )
}