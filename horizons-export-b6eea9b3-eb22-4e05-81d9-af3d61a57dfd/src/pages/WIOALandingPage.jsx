import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { Phone, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import HeroSection from '@/components/wioa/HeroSection';
import EligibilityChecker from '@/components/wioa/EligibilityChecker';
import ExpressEnrollmentSection from '@/components/wioa/ExpressEnrollmentSection';
import WhyFridayFillsFastSection from '@/components/wioa/WhyFridayFillsFastSection';
import EnrollmentChecklistSection from '@/components/wioa/EnrollmentChecklistSection';
import TestimonialsSection from '@/components/wioa/TestimonialsSection';
import ProgramDetailsSection from '@/components/wioa/ProgramDetailsSection';
import MobileStickyFooter from '@/components/wioa/MobileStickyFooter';


const WIOALandingPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [spots, setSpots] = useState(20);
  const notificationShown = useRef(false);
  const [targetFriday, setTargetFriday] = useState(getNextFriday());
  const [showNextWeekBanner, setShowNextWeekBanner] = useState(false);

  function getNextFriday(date = new Date()) {
    const resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (5 + 7 - date.getDay()) % 7);
    resultDate.setHours(17, 0, 0, 0); // 5 PM
    return resultDate;
  }

  useEffect(() => {
    // Simulate spot decrease every 30 minutes
    const spotInterval = setInterval(() => {
      setSpots(prev => (prev > 0 ? prev - 1 : 0));
    }, 1800000); // 30 minutes

    return () => clearInterval(spotInterval);
  }, []);

  useEffect(() => {
    if (spots <= 10 && !notificationShown.current) {
      toast({
        title: "⚠️ This Friday's cohort is 50% full!",
        description: "Don't worry, next week's spots are now open if you miss out.",
        duration: 8000,
      });
      setShowNextWeekBanner(true);
      notificationShown.current = true;
    }
    if (spots === 0) {
      setShowNextWeekBanner(true);
    }
  }, [spots, toast]);

  const handleDeadline = () => {
    toast({
      title: "This week's deadline has passed!",
      description: "Rolling over to next Friday's cohort. Your new opportunity awaits!",
    });
    const nextWeek = new Date(targetFriday.getTime());
    nextWeek.setDate(nextWeek.getDate() + 7);
    setTargetFriday(getNextFriday(nextWeek));
    setSpots(20); 
    setShowNextWeekBanner(false);
    notificationShown.current = false;
  };

  const getUpcomingFridays = (count = 3) => {
    const fridays = [];
    let currentDate = new Date(targetFriday.getTime());
    currentDate.setDate(currentDate.getDate() - (currentDate.getDay() === 5 ? 0 : 7));
    while (fridays.length < count) {
      currentDate.setDate(currentDate.getDate() + 7);
      fridays.push(new Date(currentDate.getTime()));
    }
    return fridays;
  }

  const handleReserveSpot = () => {
    if (spots > 0) {
      navigate('/spot-reserved');
    } else {
      handleDeadline();
    }
  };
  
  const handleSmsSignup = (e) => {
    e.preventDefault();
    toast({
      title: "Thanks for signing up!",
      description: "We'll text you with important spot notifications. (Feature in development)",
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>FREE CNA Training - Funding Available NOW | Lotus Medical</title>
        <meta name="description" content="Limited spots for FREE CNA training through WIOA. Complete your enrollment in ONE DAY at our Pomona campus. Check eligibility and reserve your spot now!" />
      </Helmet>
      <div className="bg-slate-900 text-white font-sans">
        <header className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2"><img loading="lazy" alt="Lotus Medical Career College Logo" className="h-10 w-10" src="https://images.unsplash.com/photo-1672033145645-2c4c10ebe171" />
            <span className="font-bold text-lg">Lotus Medical</span></a>
          </div>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900" asChild>
            <a href="tel:909-625-8050"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          </Button>
        </header>

        <HeroSection 
          spots={spots}
          targetFriday={targetFriday}
          onDeadline={handleDeadline}
          onReserveSpot={handleReserveSpot}
        />

        {showNextWeekBanner && (
          <Alert className="container mx-auto my-8 bg-yellow-400 text-slate-900 border-yellow-500">
            <AlertTriangle className="h-4 w-4 !text-slate-900" />
            <AlertTitle className="font-bold">Spots Are Filling Fast!</AlertTitle>
            <AlertDescription>
              This Friday's cohort is almost full. You can now also enroll for next week's session to secure your funding.
            </AlertDescription>
          </Alert>
        )}

        <EligibilityChecker onQualify={handleReserveSpot} />

        <ExpressEnrollmentSection />
        
        <WhyFridayFillsFastSection />

        <EnrollmentChecklistSection
          upcomingFridays={getUpcomingFridays()}
          onSmsSignup={handleSmsSignup}
        />

        <TestimonialsSection />

        <ProgramDetailsSection />

        <MobileStickyFooter spots={spots} onReserveSpot={handleReserveSpot} />
      </div>
    </>
  );
};

export default WIOALandingPage;