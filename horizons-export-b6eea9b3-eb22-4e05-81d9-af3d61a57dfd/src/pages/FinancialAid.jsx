import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, DollarSign, Users, Briefcase, FileText, ArrowRight, Quote, Link as LinkIcon, Download, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const FinancialAidPage = () => {
  const { toast } = useToast();

  const handleCTAClick = (feature) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const wioaEligibilityChecklist = [
    "Currently unemployed or underemployed",
    "Seeking career advancement in healthcare",
    "Resident of LA or San Bernardino County",
    "Authorized to work in the US",
  ];

  const wioaServiceAreas = [
    {
      county: "LA County / Pomona AJCC",
      contact: "XXX-XXX-XXXX",
      location: "[Address]",
      link: "/contact",
    },
    {
      county: "San Bernardino County WDB",
      contact: "XXX-XXX-XXXX",
      location: "[Address]",
      link: "/contact",
    },
  ];

  const stepByStepProcess = [
    { step: '1', title: 'Initial Consultation', description: 'Discuss your goals and program interests with our advisors.' },
    { step: '2', title: 'AJCC Registration', description: 'We guide you through the necessary registration process with your local AJCC.' },
    { step: '3', title: 'Documentation', description: 'Gather and submit all required documents for your WIOA application.' },
    { step: '4', title: 'Approval Process', description: 'Understand the timeline and expectations for your funding approval.' },
    { step: '5', title: 'Start Training', description: 'Begin your career journey with your WIOA funding in place!' },
  ];

  const additionalFundingOptions = [
    "Employer Sponsorship Programs",
    "Payment Plan Options",
    "CalJOBS Training Benefits",
    "Veterans Benefits (if applicable)",
  ];

  const testimonials = [
    { name: "Maria G.", quote: "WIOA funding made my dream of becoming a CNA possible. LMCC guided me through every step of the application. I'm so grateful!", image: "Hispanic female CNA graduate smiling, funded by WIOA." },
    { name: "David L.", quote: "I lost my job during the pandemic and didn't know what to do. The WIOA program at Lotus Medical gave me a new career path and financial stability.", image: "Male LVN graduate, funded by WIOA, looking hopeful." },
  ];

  return (
    <>
      <Helmet>
        <title>Financial Assistance & WIOA | Lotus Medical Career College</title>
        <meta name="description" content="Explore financial aid options, including WIOA, CalJOBS, and payment plans at Lotus Medical Career College. Start your healthcare career journey today." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-lotus-green/10 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold font-heading text-charcoal mb-4"
          >
            Financial Assistance & <span className="text-lotus-green">WIOA Funding</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 mb-8"
          >
            Don't let finances be a barrier. We specialize in connecting students with government funding like WIOA to make your education affordable, or even free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-lotus-green text-white hover:bg-lotus-green/90">
                Speak with an Advisor
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Overview */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Are You Eligible for WIOA Funding?</h2>
              <p className="text-gray-600 mb-8">The Workforce Innovation and Opportunity Act (WIOA) is designed to help job seekers access employment, education, and training. See if you might qualify.</p>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Eligibility Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {wioaEligibilityChecklist.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                  <p className="text-sm text-gray-500 pt-4">*This is a preliminary checklist. Official eligibility is determined by your local workforce agency.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <img loading="lazy" alt="A diverse group of students in a classroom setting, one raising their hand." className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1598399392489-40405ee16303" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two-Column Service Areas */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">WIOA Service Areas</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Connect with your local workforce development board for WIOA assistance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {wioaServiceAreas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="h-full shadow-lg card-hover p-6 text-center">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">{area.county}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Phone className="h-5 w-5 text-lotus-green" />
                      <span>Contact: {area.contact}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <MapPin className="h-5 w-5 text-lotus-green" />
                      <span>Location: {area.location}</span>
                    </div>
                    <Link to={area.link}>
                      <Button variant="outline" className="w-full border-lotus-green text-lotus-green hover:bg-lotus-green/10" onClick={() => handleCTAClick('Schedule WIOA Consultation')}>
                        Schedule WIOA Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Your Step-by-Step Process</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We'll guide you through every stage of securing your WIOA funding.</p>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
            {/* Dashed line for large screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-lotus-green/50 transform -translate-y-1/2"></div>
            {stepByStepProcess.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center mb-10 lg:mb-0 w-full lg:w-1/5">
                <div className="w-16 h-16 bg-lotus-green text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-md">{step.step}</div>
                <h3 className="font-heading font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 px-2">{step.description}</p>
                {index < stepByStepProcess.length - 1 && (
                  <ArrowRight className="absolute top-8 right-[-10%] h-8 w-8 text-lotus-green/50 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Funding Options */}
      <section className="bg-lotus-green/10 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Additional Funding Options</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Beyond WIOA, explore other avenues to finance your education.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {additionalFundingOptions.map((option, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="h-full shadow-lg card-hover p-6 text-center">
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <DollarSign className="h-12 w-12 text-lotus-green mb-4" />
                    <h3 className="font-heading text-xl font-bold">{option}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">WIOA Success Stories</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Hear from graduates who successfully used funding to change their lives.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="h-full shadow-lg card-hover">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <img loading="lazy" alt={testimonial.image} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" src="https://images.unsplash.com/photo-1635402689379-545b134e58ed" />
                    <Quote className="h-8 w-8 text-lotus-green/30 mb-4" />
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-bold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-lotus-green font-semibold">WIOA-Funded Graduate</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialAidPage;