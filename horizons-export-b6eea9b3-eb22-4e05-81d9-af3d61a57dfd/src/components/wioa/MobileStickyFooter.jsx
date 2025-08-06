import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MobileStickyFooter = ({ spots, onReserveSpot }) => {
  const progressValue = (spots / 20) * 100;
  const buttonText = spots > 0 ? 'Reserve Your Spot' : "Join Next Week's Cohort";
  const buttonClass = spots > 0 
    ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
    : "bg-yellow-500 text-slate-900 hover:bg-yellow-400";

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 border-t border-slate-200 z-50 md:hidden"
    >
      <div className="flex items-center gap-4">
        <div className="text-center flex-shrink-0">
          <div className="font-bold text-2xl text-slate-800">{spots}</div>
          <div className="text-xs text-slate-500">Spots Left</div>
        </div>
        <div className="w-full">
          <div className="h-2 w-full bg-slate-200 rounded-full mb-2">
            <motion.div 
              className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-500"
              initial={{ width: '100%' }}
              animate={{ width: `${progressValue}%` }}
            />
          </div>
          <Button size="lg" className={`w-full font-bold text-lg py-3 h-auto ${buttonClass}`} onClick={onReserveSpot}>
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileStickyFooter;