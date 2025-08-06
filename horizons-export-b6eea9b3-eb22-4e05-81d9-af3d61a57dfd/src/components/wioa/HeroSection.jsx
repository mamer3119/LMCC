import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import EnrollmentTracker from './EnrollmentTracker';

const HeroSection = ({ spots, targetFriday, onDeadline, onReserveSpot }) => {
  return (
    <section className="relative text-center py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-5"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-cyan-400">FREE CNA Training</span>
              Funding Available NOW
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Complete Your Entire Enrollment in <span className="font-bold text-white">ONE Day</span> at Our Campus. Spots are extremely limited and fill up fast. Act now!
            </motion.p>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Time Until Friday Deadline:</p>
              <CountdownTimer targetDate={targetFriday} onComplete={onDeadline} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <EnrollmentTracker spots={spots} onReserveSpot={onReserveSpot} onNextCohort={onDeadline} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;