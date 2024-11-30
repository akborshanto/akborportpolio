import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import GradientText from '../shared/GradientText';
import ParallaxText from '../shared/ParallaxText';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, purple 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <TypeAnimation
              sequence={[
                'FULL-STACK DEVELOPER',
                2000,
                'UI/UX DESIGNER',
                2000,
                'PROBLEM SOLVER',
                2000,
              ]}
              wrapper="h2"
              className="text-xl md:text-2xl text-purple-400 mb-4"
              repeat={Infinity}
            />
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <GradientText text="Devon Lane" />
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-lg">
              Crafting digital experiences that blend creativity with cutting-edge technology
            </p>
            <motion.div className="flex gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-600 rounded-full text-white font-semibold hover:bg-purple-600/10 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Devon Lane"
                className="relative rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover border-4 border-purple-600/50 shadow-2xl shadow-purple-500/25"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-black to-transparent">
        <ParallaxText baseVelocity={-2}>
          REACT • TYPESCRIPT • NODE.JS • NEXT.JS • MONGODB • FIREBASE • AWS • DOCKER
        </ParallaxText>
      </div>
    </div>
  );
};

export default Hero;