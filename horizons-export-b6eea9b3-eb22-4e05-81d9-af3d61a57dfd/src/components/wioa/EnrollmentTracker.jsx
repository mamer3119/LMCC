import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { AlertTriangle, TrendingUp } from 'lucide-react';

const EnrollmentTracker = ({ spots, onReserveSpot, onNextCohort }) => {
  const [lastEnrollment, setLastEnrollment] = useState(2);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setLastEnrollment(prev => (prev < 59 ? prev + 1 : 1));
    }, 60000); // Increment every minute for demo

    return () => clearInterval(tickerInterval);
  }, []);

  const progressValue = (spots / 20) * 100;
  const progressColor = spots <= 5 ? 'bg-red-500' : spots <= 10 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <Card className="bg-slate-800/50 border-slate-700 text-white shadow-xl">
      <CardContent className="p-6 text-center">
        {spots > 0 ? (
          <>
            <p className="font-semibold text-cyan-300">FUNDED SPOTS REMAINING</p>
            <div className="text-6xl font-extrabold my-2 text-white">{spots}</div>
          </>
        ) : (
          <>
            <p className="font-semibold text-red-400">THIS COHORT IS FULL!</p>
            <div className="text-4xl font-extrabold my-3 text-white">Join Next Friday</div>
          </>
        )}
        
        <Progress value={progressValue} className="h-3 my-4">
           <motion.div
              className={`h-3 rounded-full ${progressColor}`}
              style={{ width: `${progressValue}%` }}
              initial={{ width: '100%' }}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 0.5 }}
           />
        </Progress>
        
        <Button 
          size="lg" 
          className={`w-full mt-4 font-bold text-lg py-6 ${spots > 0 ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300 animate-pulse' : 'bg-yellow-500 text-slate-900 hover:bg-yellow-400'}`}
          onClick={spots > 0 ? onReserveSpot : onNextCohort}
        >
          {spots > 0 ? "Reserve Your Spot" : "Join Next Friday's Cohort"}
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
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

export default EnrollmentTracker;