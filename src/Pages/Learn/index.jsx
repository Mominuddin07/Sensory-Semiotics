import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Learn = () => {
  const learningResources = [
    {
      title: "Basic Hand Signs",
      description: "Learn the fundamental hand signs and gestures used in sign language.",
      videoUrl: "https://www.youtube.com/watch?v=7Ae0prSLMa4",
      thumbnail: "/thumbnails/basics.jpg",
      duration: "10:25"
    },
    {
      title: "Common Phrases",
      description: "Master everyday phrases and greetings in sign language.",
      videoUrl: "https://www.youtube.com/watch?v=v1desDduz5M",
      thumbnail: "/thumbnails/phrases.jpg",
      duration: "8:15"
    },
    {
      title: "Numbers and Counting",
      description: "Learn how to count and express numbers in sign language.",
      videoUrl: "https://www.youtube.com/watch?v=cGavOVNDj1s",
      thumbnail: "/thumbnails/numbers.jpg",
      duration: "6:30"
    }
  ];

  const handleVideoClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      {/* Fixed background that spans both sections */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#16232E] z-0">
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

          {/* Dynamic Glow Lines */}
          <div className="absolute inset-0">
            <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#0F9B8E]/50 to-transparent animate-pulse-slow"></div>
            <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-[#0F9B8E]/30 to-transparent animate-pulse-slower"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen pt-24 pb-12 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learn <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7]">Sign Language</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of sign language tutorials and resources to help you get started with sign language communication.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningResources.map((resource, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleVideoClick(resource.videoUrl)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-[#1A1A2E]/80 rounded-xl overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#0F9B8E]/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F9B8E]/20 group-hover:bg-[#0F9B8E]/40 transition-all duration-300">
                        <FaPlay className="text-[#16DAC7] w-6 h-6 ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
                      {resource.duration}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#16DAC7] transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn; 