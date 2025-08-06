import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Check, FileText, User, Mail, Smartphone } from 'lucide-react';
import CountdownTimer from '@/components/wioa/CountdownTimer';
import EligibilityChecker from '@/components/wioa/EligibilityChecker';

const QRLandingPage = () => {
  const { toast } = useToast();
  const [spots, setSpots] = useState(18);
  const [targetFriday, setTargetFriday] = useState(getNextFriday());

  function getNextFriday(date = new Date()) {
    const resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (5 + 7 - date.getDay()) % 7);
    resultDate.setHours(17, 0, 0, 0); // 5 PM
    return resultDate;
  }

  useEffect(() => {
    const spotInterval = setInterval(() => {
      setSpots(prev => (prev > 1 ? prev - 1 : 0));
    }, 45 * 60 * 1000); // Decrease every 45 mins for demo

    return () => clearInterval(spotInterval);
  }, []);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReserveSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Spot Reserved!",
      description: "Your spot is held for 24 hours. An advisor will contact you shortly to finalize your enrollment.",
    });
    e.target.reset();
  };

  const requiredDocuments = [
    "Valid Photo ID (Driver's License, State ID)",
    "Social Security Card (Original, not a copy)",
    "Proof of CalJOBS Registration",
    "Work Authorization (If not a US Citizen)",
    "Proof of Residency (Utility bill, lease agreement)",
    "Selective Service Registration (For males 18-25)",
    "Proof of Income / Low Income",
    "UI Verification / Layoff Letter (If applicable)",
    "Updated Resume",
  ];

  return (
    <>
      <Helmet>
        <title>{`FREE CNA Training - ${spots} Spots Left! | Lotus Medical`}</title>
        <meta name="description" content="QR Code Offer: Fast-track your WIOA enrollment for FREE CNA Training. Limited spots available this Friday. Check eligibility and reserve your spot now!" />
      </Helmet>
      <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white min-h-screen font-sans">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <img loading="lazy" alt="Lotus Medical Logo" className="h-16 w-16 mx-auto mb-4" src="https://images.unsplash.com/photo-1672033145645-2c4c10ebe171" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block text-cyan-400">FREE CNA Training</span>
              <span className="text-5xl md:text-6xl block mt-2">{spots} Spots Left!</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="my-8"
          >
            <Card className="bg-white/10 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-center text-slate-300 mb-3">Time Until Friday's Deadline:</p>
                <CountdownTimer targetDate={targetFriday} />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="w-full py-8 text-2xl font-bold bg-cyan-400 text-slate-900 hover:bg-cyan-300 animate-pulse"
              onClick={() => handleScrollTo('eligibility-checker-section')}
            >
              Check If I Qualify
            </Button>
          </motion.div>

          <div id="eligibility-checker-section" className="my-12 scroll-mt-20">
             <EligibilityChecker onQualify={() => handleScrollTo('reserve-spot-section')} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="my-12"
          >
            <Accordion type="single" collapsible className="w-full bg-white/10 rounded-lg border border-slate-700 px-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline">
                  <FileText className="mr-3 text-cyan-400"/> Document Checklist
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-4">
                    {requiredDocuments.map((doc, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div 
            id="reserve-spot-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="my-12 scroll-mt-20"
          >
            <Card className="bg-white/10 border-slate-700">
              <CardHeader>
                <CardTitle className="text-3xl text-center font-bold text-white">Reserve Your Spot</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReserveSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 flex items-center mb-2"><User className="mr-2 h-4 w-4"/>Full Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" required className="bg-slate-800/50 border-slate-600 text-white focus:ring-cyan-400"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300 flex items-center mb-2"><Mail className="mr-2 h-4 w-4"/>Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="bg-slate-800/50 border-slate-600 text-white focus:ring-cyan-400"/>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-300 flex items-center mb-2"><Smartphone className="mr-2 h-4 w-4"/>Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" required className="bg-slate-800/50 border-slate-600 text-white focus:ring-cyan-400"/>
                  </div>
                  <Button type="submit" size="lg" className="w-full py-6 text-xl font-bold bg-green-500 text-white hover:bg-green-600">
                    Hold My Spot!
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="link" asChild className="text-cyan-300 text-lg">
              <a href="tel:909-625-8050">
                <Phone className="mr-2 h-5 w-5" />
                Have Questions? Call Us
              </a>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default QRLandingPage;