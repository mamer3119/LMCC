import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Check, FileText, User, Mail, Smartphone, MessageSquare, AlertTriangle } from 'lucide-react';
import CountdownTimer from '@/components/wioa/CountdownTimer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EligibilityChecker from '@/components/wioa/EligibilityChecker';

const WIOAFridayPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [spots, setSpots] = useState(10);
  const [targetFriday, setTargetFriday] = useState(getNextFriday());
  const [smsOptIn, setSmsOptIn] = useState(false);

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

  const handleReserveSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Spot Saved!",
      description: "Redirecting you to the next steps...",
    });
    navigate('/spot-reserved');
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
        <title>{`FREE CNA Training - ${spots} Funded Spots Left! | Lotus Medical`}</title>
        <meta name="description" content="Funding Friday Offer: Fast-track your enrollment for FREE CNA Training. Limited spots available this Friday. Check eligibility and reserve your spot now!" />
      </Helmet>
      <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white min-h-screen font-sans">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <a href="/" className="inline-block"><img loading="lazy" alt="Lotus Medical Logo" className="h-16 w-16 mx-auto mb-4" src="https://images.unsplash.com/photo-1672033145645-2c4c10ebe171" /></a>
            {spots <= 10 ? (
                <>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-300">
                        ⚠️ Friday's Session 50% Full - Don't Miss Out!
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-white mt-4">
                        Only {spots} Funded Spots Remain for FREE Training
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span className="block text-cyan-400">Join This Friday's Enrollment Group</span>
                    <span className="text-5xl md:text-6xl block mt-2">{spots} Funded Spots Left!</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-slate-300 mt-4">Complete Everything in One Day</p>
                </>
            )}

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="my-8"
          >
             {spots <= 10 && (
                <Alert className="mb-8 bg-yellow-400/20 text-yellow-300 border-yellow-500/50">
                    <AlertTriangle className="h-4 w-4 !text-yellow-300" />
                    <AlertTitle className="font-bold text-white">Next Week's Cohort Now Open!</AlertTitle>
                    <AlertDescription>
                        This Friday is almost full. You can now reserve a spot for next week to guarantee your funding.
                    </AlertDescription>
                </Alert>
            )}
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
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="w-full py-8 text-2xl font-bold bg-cyan-400 text-slate-900 hover:bg-cyan-300 animate-pulse"
                >
                  Check Funding Eligibility
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[650px] bg-white text-slate-900">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center">Check Your Funding Eligibility in 60 Seconds</DialogTitle>
                </DialogHeader>
                <EligibilityChecker isModal={true} onQualify={() => document.getElementById('reserve-spot-section')?.scrollIntoView({ behavior: 'smooth' })} />
              </DialogContent>
            </Dialog>

          </motion.div>

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
                <CardTitle className="text-3xl text-center font-bold text-white">Save My Spot</CardTitle>
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
                  <div className="flex items-center space-x-3 pt-2">
                    <Checkbox id="sms-opt-in" checked={smsOptIn} onCheckedChange={setSmsOptIn} className="border-slate-500 data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"/>
                    <Label htmlFor="sms-opt-in" className="text-sm text-slate-400">
                      <MessageSquare className="inline h-4 w-4 mr-1.5"/>Yes, send me SMS text reminders about my appointment.
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full py-6 text-xl font-bold bg-green-500 text-white hover:bg-green-600">
                    Save My Funding Spot!
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
            <div className="mt-4">
              <Button variant="link" asChild className="text-slate-400 text-sm">
                <a href="/free-cna-training-wioa">View Full Details</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WIOAFridayPage;