import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import EnrollmentTrackerAug14 from './EnrollmentTrackerAug14';

const HeroSectionAug14 = ({ spots, orientationDate, onReserveSpot }) => {
  return (
    <section className="relative text-center py-16 px-4 overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-5"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-cyan-400">FREE CNA Training</span>
              Through Funding
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg md:text-xl text-blue-200 max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our <span className="font-bold text-white">August 14th Funding Orientation</span> and complete your entire enrollment in <span className="font-bold text-white">ONE DAY</span> at our campus. Limited spots available!
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">Time Remaining to Reserve Your Spot:</p>
              <CountdownTimer targetDate={orientationDate} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <EnrollmentTrackerAug14 spots={spots} onReserveSpot={onReserveSpot} orientationDate={orientationDate} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSectionAug14;