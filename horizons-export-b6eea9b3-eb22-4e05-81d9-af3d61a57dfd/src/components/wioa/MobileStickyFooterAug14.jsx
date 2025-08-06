import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MobileStickyFooterAug14 = ({ spots, onReserveSpot }) => {
  const progressValue = (spots / 20) * 100;
  const isUrgent = spots <= 10;
  const buttonText = spots > 0 ? 'Reserve Your August 14th Spot' : "Sign Up For Waitlist";
  const buttonClass = spots > 0 
    ? (isUrgent ? "bg-red-600 text-white hover:bg-red-500" : "bg-cyan-500 text-slate-900 hover:bg-cyan-400")
    : "bg-yellow-500 text-slate-900 hover:bg-yellow-400";
  const progressColor = isUrgent ? 'from-red-500 to-orange-500' : 'from-green-400 to-cyan-500';

  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 border-t border-slate-200 z-50 md:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-center gap-4">
        <div className={`text-center flex-shrink-0 ${isUrgent && spots > 0 ? 'animate-pulse' : ''}`}>
          <div className={`font-bold text-2xl ${isUrgent ? 'text-red-600' : 'text-slate-800'}`}>{spots}</div>
          <div className="text-xs text-slate-500">Funded Spots Left</div>
        </div>
        <div className="w-full">
          <div className="h-2 w-full bg-slate-200 rounded-full mb-2 overflow-hidden">
            <motion.div 
              className={`h-2 rounded-full bg-gradient-to-r ${progressColor}`}
              initial={{ width: '100%' }}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <Button size="lg" className={`w-full font-bold text-base py-3 h-auto ${buttonClass}`} onClick={onReserveSpot} disabled={spots === 0}>
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileStickyFooterAug14;