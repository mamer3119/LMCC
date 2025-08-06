import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, TrendingUp } from 'lucide-react';

const EnrollmentTrackerAug14 = ({ spots, onReserveSpot, orientationDate }) => {
  const [lastEnrollment, setLastEnrollment] = useState(5);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setLastEnrollment(prev => (prev < 59 ? prev + Math.floor(Math.random() * 3) + 1 : 1));
    }, 45000); 
    return () => clearInterval(tickerInterval);
  }, []);

  const progressValue = (spots / 20) * 100;
  const isUrgent = spots <= 10;
  const progressColor = isUrgent ? 'bg-red-500' : 'bg-cyan-400';
  const orientationFormatted = new Date(orientationDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <Card className="bg-slate-800/60 border-blue-700 text-white shadow-2xl backdrop-blur-sm">
      <CardContent className="p-6 text-center">
        {spots > 0 ? (
          <>
            <p className={`font-semibold ${isUrgent ? 'text-red-400 animate-pulse' : 'text-cyan-300'}`}>FUNDED SPOTS FOR AUGUST 14th</p>
            <div className="text-6xl font-extrabold my-2 text-white">{spots}</div>
            <p className="text-sm text-blue-200">REMAINING</p>
          </>
        ) : (
          <>
            <p className="font-semibold text-red-400">ORIENTATION IS FULL!</p>
            <div className="text-4xl font-extrabold my-3 text-white">Contact Us For Waitlist</div>
          </>
        )}
        
        <div className="relative h-3 my-4 w-full bg-slate-700 rounded-full">
           <motion.div
              className={`h-3 rounded-full ${progressColor}`}
              style={{ width: `${progressValue}%` }}
              initial={{ width: '100%' }}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
           />
        </div>
        
        {isUrgent && spots > 0 && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-sm text-red-400 mb-4"
            >
                <AlertTriangle className="h-4 w-4" />
                <span>Spots are almost gone! Reserve now!</span>
            </motion.div>
        )}
        
        <Button 
          size="lg" 
          className={`w-full mt-2 font-bold text-lg py-6 ${spots > 0 ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300 animate-pulse' : 'bg-yellow-500 text-slate-900 hover:bg-yellow-400'}`}
          onClick={onReserveSpot}
          disabled={spots === 0}
        >
          {spots > 0 ? `Reserve Your ${orientationFormatted} Spot` : "Waitlist Sign Up"}
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-blue-300">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <TrendingUp className="h-4 w-4 text-cyan-400" />
          </motion.div>
          <span>Last enrollment: {lastEnrollment} minutes ago</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnrollmentTrackerAug14;