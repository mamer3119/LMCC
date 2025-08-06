import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, UserCheck, MessageSquare, GraduationCap, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const { toast } = useToast();

  const handleApplyClick = () => {
    toast({
      title: "Redirecting to Application Form...",
      description: "This would normally take you to the application page.",
    });
  };

  const timelineSteps = [
    {
      icon: MessageSquare,
      title: 'Step 1: Inquiry',
      description: 'Contact us to discuss your goals. We’ll answer your questions and guide you to the right program.',
    },
    {
      icon: FileText,
      title: 'Step 2: Application',
      description: 'Complete the online application and submit the required documents for review.',
    },
    {
      icon: UserCheck,
      title: 'Step 3: Interview & Assessment',
      description: 'Meet with our admissions team to ensure our program is the perfect fit for your career aspirations.',
    },
    {
      icon: GraduationCap,
      title: 'Step 4: Orientation',
      description: 'Join our orientation to meet instructors, get your schedule, and prepare for your first day of class!',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions - Lotus Medical Career College</title>
        <meta name="description" content="Learn about the admissions process at LMCC. From inquiry to orientation, we make it simple to start your healthcare career." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">
            Admissions Process
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your path to a new career is just a few steps away. We’ve streamlined our admissions process to be as clear and simple as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 bg-lotus-green/10 p-4 rounded-full">
                  <step.icon className="h-8 w-8 text-lotus-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: timelineSteps.length * 0.1 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-lg"
            >
              <p className="font-semibold">Disclaimer: Job placement assistance is provided, but not guaranteed.</p>
              <p className="text-sm mt-1">Our career services team works diligently to support graduates in their job search; however, we cannot guarantee employment.</p>
            </motion.div>
          </div>

          {/* Contact & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-lotus-green/20">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Ready to Start?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-charcoal">Contact our Admissions Director:</h4>
                  <p className="text-lg font-bold text-lotus-green">Mrs. Asima Jabbar, RN, MSN-ED</p>
                  <div className="mt-2 space-y-1">
                    <a href="mailto:info@lotusmedicalcollege.edu" className="flex items-center text-gray-700 hover:text-lotus-green">
                      <Mail className="mr-2 h-4 w-4" /> info@lotusmedicalcollege.edu
                    </a>
                    <a href="tel:909-625-8050" className="flex items-center text-gray-700 hover:text-lotus-green">
                      <Phone className="mr-2 h-4 w-4" /> (909) 625-8050
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal flex items-center"><Clock className="mr-2 h-4 w-4" /> Hours of Operation</h4>
                  <p className="text-gray-700">Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p className="text-sm text-gray-500">After-hours by appointment.</p>
                </div>
                <Button size="lg" className="w-full bg-lotus-green text-white hover:bg-lotus-green/90" onClick={handleApplyClick}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Admissions;