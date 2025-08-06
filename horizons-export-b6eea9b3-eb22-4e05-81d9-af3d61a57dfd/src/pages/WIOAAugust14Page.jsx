import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { Phone, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import HeroSectionAug14 from '@/components/wioa/HeroSectionAug14';
import EligibilityChecker from '@/components/wioa/EligibilityChecker';
import ExpressEnrollmentSection from '@/components/wioa/ExpressEnrollmentSection';
import WhyFridayFillsFastSection from '@/components/wioa/WhyFridayFillsFastSection';
import EnrollmentChecklistSection from '@/components/wioa/EnrollmentChecklistSection';
import TestimonialsSection from '@/components/wioa/TestimonialsSection';
import ProgramDetailsSection from '@/components/wioa/ProgramDetailsSection';
import MobileStickyFooterAug14 from '@/components/wioa/MobileStickyFooterAug14';

const WIOAAugust14Page = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const orientationDate = "2025-08-14T09:00:00"; 
  const initialSpots = 20;
  
  const [spots, setSpots] = useState(() => {
    const savedSpots = localStorage.getItem('aug14Spots');
    return savedSpots ? parseInt(savedSpots, 10) : initialSpots;
  });

  const notificationShown = useRef(localStorage.getItem('aug14NotificationShown') === 'true');

  useEffect(() => {
    localStorage.setItem('aug14Spots', spots);
    
    if (spots <= 10 && !notificationShown.current && spots > 0) {
      toast({
        title: "⚠️ August 14th Orientation is over 50% full!",
        description: "Don't miss out! Reserve your spot before they're all gone.",
        variant: "destructive",
        duration: 8000,
      });
      notificationShown.current = true;
      localStorage.setItem('aug14NotificationShown', 'true');
    }
  }, [spots, toast]);

  useEffect(() => {
    const timeSinceLoad = Date.now() - (localStorage.getItem('aug14LoadTime') || Date.now());
    if (timeSinceLoad < 1000) localStorage.setItem('aug14LoadTime', Date.now());

    const elapsedTimeHours = timeSinceLoad / (1000 * 60 * 60);
    const spotsToDecrease = Math.floor(elapsedTimeHours / 2);

    const currentSpots = initialSpots - spotsToDecrease;
    setSpots(currentSpots > 0 ? currentSpots : 0);
    
    const spotInterval = setInterval(() => {
      setSpots(prev => {
        const newSpots = prev > 0 ? prev - 1 : 0;
        return newSpots;
      });
    }, 2 * 60 * 60 * 1000); // Decrease every 2 hours

    return () => clearInterval(spotInterval);
  }, []);

  const handleReserveSpot = () => {
    if (spots > 0) {
      navigate('/spot-reserved');
    } else {
      toast({
        title: "Orientation Full",
        description: "Please call us to be added to the waitlist.",
      });
    }
  };
  
  const handleSmsSignup = (e) => {
    e.preventDefault();
    const phone = e.target.querySelector('input').value;
    toast({
      title: "✅ You're on the list!",
      description: `We'll text ${phone} with important spot notifications.`,
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>{`FREE CNA Training: August 14th Funding Orientation | Lotus Medical`}</title>
        <meta name="description" content={`Limited spots for FREE CNA training through WIOA. Join our August 14th orientation and complete your enrollment in ONE DAY. Only ${spots} spots left!`} />
      </Helmet>
      <div className="bg-slate-900 text-white font-sans">
        <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center space-x-2">
                    <img loading="lazy" alt="Lotus Medical Career College Logo" className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1672033145645-2c4c10ebe171?w=100&h=100&fit=crop" />
                    <span className="font-bold text-lg text-slate-800">Lotus Medical</span>
                </a>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                    <a href="tel:909-625-8050"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
                </Button>
            </div>
        </header>

        <HeroSectionAug14
          spots={spots}
          orientationDate={orientationDate}
          onReserveSpot={handleReserveSpot}
        />

        {spots === 0 && (
          <Alert variant="destructive" className="container mx-auto my-8 bg-red-600 text-white border-red-700">
            <AlertTriangle className="h-4 w-4 !text-white" />
            <AlertTitle className="font-bold">The August 14th Orientation is Full!</AlertTitle>
            <AlertDescription>
              Please call our office to inquire about waitlist options or future orientation dates.
            </AlertDescription>
          </Alert>
        )}

        <EligibilityChecker onQualify={handleReserveSpot} />
        <ProgramDetailsSection />
        <ExpressEnrollmentSection />
        <EnrollmentChecklistSection onSmsSignup={handleSmsSignup} />
        <TestimonialsSection />
        <WhyFridayFillsFastSection />

        <MobileStickyFooterAug14 spots={spots} onReserveSpot={handleReserveSpot} />
        <footer className="bg-slate-900 border-t border-slate-800 text-center p-8 mt-12 md:mt-0">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Lotus Medical Career College. All rights reserved.</p>
          <p className="text-slate-500 text-xs mt-2">123 Health St, Pomona, CA 91766 | BPPE Approved | Equal Opportunity Provider</p>
        </footer>
      </div>
    </>
  );
};

export default WIOAAugust14Page;