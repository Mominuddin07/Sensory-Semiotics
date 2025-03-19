import React, { useState, useEffect, useRef } from "react";

import { SlSpeech } from "react-icons/sl";
import { FaMicrophone } from "react-icons/fa";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

import ybot from "../../Models/ybot/ybot.glb";

import * as words from "../../Animations/words";
import * as alphabets from "../../Animations/alphabets";
import { defaultPose } from "../../Animations/defaultPose";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TextSign = () => {
  const [bot] = useState(ybot);
  const [speed] = useState(0.1);
  const [pause] = useState(200);
  const [text, setText] = useState("");
  const componentRef = useRef({});
  const { current: ref } = componentRef;

  useEffect(() => {
    // Check if the tour has already been run
    if (!localStorage.getItem("textToSignTourCompleted")) {
      const driverObj = driver({
        showProgress: true,
        popoverClass: "driverjs-theme",
        overlayColor: "gray",
        steps: [
          {
            element: "#text-to-sign",
            popover: {
              title: "Text to Sign",
              description:
                "Enter the text you want to convert to sign language here.",
              side: "left",
              align: "start",
            },
          },
          {
            element: "#sign-to-text",
            popover: {
              title: "Sign to Text",
              description:
                "This section will convert sign language to text. (currently under development)",
              side: "bottom",
              align: "start",
            },
          },
          {
            element: "#canvas",
            popover: {
              title: "Canvas",
              description: "This is where the sign language will be displayed.",
              side: "bottom",
              align: "start",
            },
          },
          {
            popover: {
              title: "End of Tour",
              description: "You have reached the end of the tour. Happy exploring!",
            },
          },
        ],
        onDestroyStarted: () => {
          if (!driverObj.hasNextStep()) {
            driverObj.destroy();
            // Set a flag in local storage to indicate the tour has been run
            localStorage.setItem("textToSignTourCompleted", "true");
          }
        },
      });
      driverObj.drive();
    }
  }, []);

  useEffect(() => {
    ref.flag = false;
    ref.pending = false;

    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdddddd);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);

    // Calculate responsive dimensions
    const isMobile = window.innerWidth < 768;
    const aspectRatio = isMobile ? 16 / 9 : (window.innerWidth * 0.57) / (window.innerHeight - 70);

    ref.camera = new THREE.PerspectiveCamera(
      30,
      aspectRatio,
      0.1,
      1000
    );

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.renderer.setSize(
      isMobile ? window.innerWidth : window.innerWidth * 0.57,
      isMobile ? window.innerWidth * (9/16) : window.innerHeight - 70
    );
    document.getElementById("canvas").innerHTML = "";
    document.getElementById("canvas").appendChild(ref.renderer.domElement);

    // Adjust camera position only for mobile
    ref.camera.position.z = isMobile ? 2.0 : 1.6;
    ref.camera.position.y = isMobile ? 1.6 : 1.4;

    // Add window resize handler
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      const newAspectRatio = newIsMobile ? 16 / 9 : (window.innerWidth * 0.57) / (window.innerHeight - 70);

      ref.camera.aspect = newAspectRatio;
      ref.camera.updateProjectionMatrix();

      ref.renderer.setSize(
        newIsMobile ? window.innerWidth : window.innerWidth * 0.57,
        newIsMobile ? window.innerWidth * (9/16) : window.innerHeight - 70
      );

      // Adjust camera position only for mobile
      ref.camera.position.z = newIsMobile ? 2.0 : 1.6;
      ref.camera.position.y = newIsMobile ? 1.6 : 1.4;
    };

    window.addEventListener('resize', handleResize);

    let loader = new GLTFLoader();
    loader.load(
      bot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.type === "SkinnedMesh") {
            child.frustumCulled = false;
          }
        });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
      },
      (xhr) => {
        console.log(xhr);
      }
    );

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, bot]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        for (let i = 0; i < ref.animations[0].length; ) {
          let [boneName, action, axis, limit, sign] = ref.animations[0][i];
          if (
            sign === "+" &&
            ref.avatar.getObjectByName(boneName)[action][axis] < limit
          ) {
            ref.avatar.getObjectByName(boneName)[action][axis] += speed;
            ref.avatar.getObjectByName(boneName)[action][axis] = Math.min(
              ref.avatar.getObjectByName(boneName)[action][axis],
              limit
            );
            i++;
          } else if (
            sign === "-" &&
            ref.avatar.getObjectByName(boneName)[action][axis] > limit
          ) {
            ref.avatar.getObjectByName(boneName)[action][axis] -= speed;
            ref.avatar.getObjectByName(boneName)[action][axis] = Math.max(
              ref.avatar.getObjectByName(boneName)[action][axis],
              limit
            );
            i++;
          } else {
            ref.animations[0].splice(i, 1);
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => {
        ref.flag = false;
      }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    setText(inputText);
    
    if (inputText.length > 0) {
      const latestCharacter = inputText.charAt(inputText.length - 1);
      // Check if the animation function exists before calling it
      if (alphabets[latestCharacter] && typeof alphabets[latestCharacter] === 'function' && ref.animations.length === 0) {
        alphabets[latestCharacter](ref);
      }
    }
  };

  let alphaButtons = [];
  for (let i = 0; i < 26; i++) {
    alphaButtons.push(
      <div className="col-md-3">
        <button className="signs w-100 m-3 p-3">
          {String.fromCharCode(i + 65)}
        </button>
      </div>
    );
  }

  let wordButtons = [];
  for (let i = 0; i < words.wordList.length; i++) {
    wordButtons.push(
      <div className="col-md-4" key={i}>
        <button
          className="signs w-100 m-3"
          onClick={() => {
            if (ref.animations.length === 0) {
              words[words.wordList[i]](ref);
            }
            console.log(words.wordList[i]);
          }}
        >
          {words.wordList[i]}
        </button>
      </div>
    );
  }

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

      {/* Main Content Section */}
      <section className="relative min-h-screen flex items-center pt-24 -ml-12 z-10">
        <div className="relative max-w-7xl w-full mx-auto px-3">
          <div className="flex flex-row items-start justify-between gap-4 sm:gap-8">
            {/* Text input section */}
            <div className="w-full sm:w-1/3 flex flex-col justify-start">
              <div id="text-to-sign" className="m-2">
                <div className="relative group mb-4 sm:mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] blur-2xl opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-[#1A1A2E]/80 rounded-xl p-4 sm:p-6 border border-[#0F9B8E]/20">
                    <div className="flex items-center">
                      <h1 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 mx-2 flex items-center">
                        Text to Sign
                      </h1>
                      <SlSpeech className="mb-2 sm:mb-4 text-[#16DAC7]" />
                    </div>
                    <textarea
                      className="w-full p-3 sm:p-4 rounded-lg bg-[#1A1A2E] border border-[#0F9B8E]/30 text-gray-100 focus:border-[#16DAC7] focus:ring-2 focus:ring-[#0F9B8E]/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Type text here..."
                      value={text}
                      onChange={handleTextChange}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] blur-2xl opacity-20 rounded-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-[#1A1A2E]/80 rounded-xl p-4 sm:p-6 border border-[#0F9B8E]/20">
                    <div className="flex items-center">
                      <h1 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 mx-2 flex items-center">
                        Speech to Sign
                      </h1>
                      <FaMicrophone className="mb-2 sm:mb-4 text-[#16DAC7]" />
                    </div>
                    <textarea
                      disabled
                      className="w-full p-3 sm:p-4 rounded-lg bg-[#1A1A2E]/50 border border-[#0F9B8E]/30 text-gray-400 cursor-not-allowed text-sm sm:text-base"
                      placeholder="Coming soon..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Canvas section */}
            <div className="w-full sm:w-2/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0F9B8E] to-[#16DAC7] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#1A1A2E]/80 rounded-xl overflow-hidden p-1">
                  <div
                    id="canvas"
                    className="w-full rounded-xl"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextSign;
