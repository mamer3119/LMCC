import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CalendarCheck, DollarSign } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link, useLocation } from 'react-router-dom';

const StickyApplyButton = () => {
  const { toast } = useToast();
  const location = useLocation();

  const handleCallUs = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Initiating call to 909-625-8050.",
    });
  };

  const handleApplyNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Redirecting to application form.",
    });
  };

  const handleScheduleConsultation = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Redirecting to consultation scheduling.",
    });
  };

  const handleCheckFundingEligibility = () => {
    // Check if on a WIOA-related page to scroll, otherwise toast
    if (location.pathname === '/wioa-friday') {
      document.getElementById('eligibility-checker-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/wioa-august-14') {
      document.getElementById('eligibility-checker-section')?.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        description: "Checking funding eligibility.",
      });
    }
  };


  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Button
        className="bg-red-600 hover:bg-red-700 text-white shadow-lg py-3 px-5 rounded-full text-lg font-bold flex items-center group"
        onClick={handleCallUs}
      >
        <Phone className="h-6 w-6 mr-3 transition-transform duration-200 group-hover:scale-110" />
        <span className="opacity-100 transition-opacity duration-200">Call Now</span>
      </Button>

      {location.pathname !== '/wioa-friday' && location.pathname !== '/wioa-august-14' && (
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg py-3 px-5 rounded-full text-lg font-bold flex items-center group"
          onClick={handleCheckFundingEligibility}
        >
          <DollarSign className="h-6 w-6 mr-3 transition-transform duration-200 group-hover:scale-110" />
          <span className="opacity-100 transition-opacity duration-200">Check Funding Eligibility</span>
        </Button>
      )}

      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg py-3 px-5 rounded-full text-lg font-bold flex items-center group"
        onClick={handleScheduleConsultation}
      >
        <CalendarCheck className="h-6 w-6 mr-3 transition-transform duration-200 group-hover:scale-110" />
        <span className="opacity-100 transition-opacity duration-200">Schedule a Tour</span>
      </Button>
    </motion.div>
  );
};

export default StickyApplyButton;