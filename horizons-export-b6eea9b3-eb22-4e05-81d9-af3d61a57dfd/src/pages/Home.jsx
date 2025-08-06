import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShieldCheck, Clock, Users, BookOpen, Heart, Stethoscope, Award, Calendar, Monitor, Briefcase, Zap, Star, GraduationCap, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import StudentSuccess from '@/components/StudentSuccess';
import WhyFridayFillsFastSection from '@/components/wioa/WhyFridayFillsFastSection';
import EnrollmentTracker from '@/components/wioa/EnrollmentTracker';

const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [wioaSpots, setWioaSpots] = useState(12);

  useEffect(() => {
    const savedSpots = localStorage.getItem('wioaSpots');
    if (savedSpots) {
      setWioaSpots(parseInt(savedSpots, 10));
    }

    const interval = setInterval(() => {
      setWioaSpots(prev => {
        const newSpots = prev > 0 ? prev - (Math.random() > 0.8 ? 1 : 0) : 0;
        localStorage.setItem('wioaSpots', newSpots);
        return newSpots;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: "HHA Certification",
      icon: Heart,
      description: "Provide compassionate care for patients in home settings.",
      link: "/programs",
    },
    {
      title: "LVN Program",
      icon: Stethoscope,
      description: "Advance your career with our comprehensive LVN training.",
      link: "/programs",
    },
    {
      title: "RNA Training",
      icon: Award,
      description: "Specialize in restorative techniques to help patients regain independence.",
      link: "/programs",
    },
  ];

  const successMetrics = [
    { value: "92%", label: "Pass Rate", sublabel: "Above 73% state average" },
    { value: "15+", label: "Years Experience", sublabel: "CDPH approved since 2009" },
    { value: "100%", label: "Job Placement", sublabel: "Assistance Provided" },
  ];

  const hybridProgramDetails = [
    {
      icon: Monitor,
      title: "10 Days Online Theory",
      description: "Learn at your own pace with our flexible, mobile-friendly platform. Perfect for balancing work and study."
    },
    {
      icon: Users,
      title: "20 Days Clinical Training",
      description: "Gain essential hands-on experience at top local healthcare facilities in the Pomona Valley and Inland Empire."
    },
    {
      icon: Clock,
      title: "Evening Schedules",
      description: "We offer convenient evening classes, allowing you to advance your career without quitting your day job."
    },
    {
      icon: Zap,
      title: "WIOA Funding Eligible",
      description: "Most students qualify for government funding that can cover the entire cost of the program. Find out if you're eligible!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hybrid CNA Program in 31 Days | Lotus Medical Career College</title>
        <meta name="description" content="Launch your healthcare career with our 31-day Hybrid CNA program. Featuring a 92% pass rate, WIOA funding, and job placement assistance. Serving Pomona and the Inland Empire." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-24 md:pt-28 md:pb-32 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="success" className="mb-4 text-base py-1 px-4 animate-pulse">
              <Star className="h-4 w-4 mr-2" /> Funding Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-charcoal mb-4">
              Start Your Healthcare Career in 31 Days
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-lotus-green mb-6">
              Hybrid Online CNA Program
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-10">
              The perfect blend of flexible online learning and essential hands-on clinical training, designed for working adults ready for a change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-lotus-green text-white hover:bg-lotus-green/90 text-lg px-10 py-6" onClick={() => navigate('/free-cna-training-wioa')}>
                Check Funding Eligibility
              </Button>
              <Link to="/hybrid-cna">
                <Button size="lg" variant="outline" className="border-lotus-green text-lotus-green hover:bg-lotus-green/10 text-lg px-10 py-6">
                  Program Details
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-charcoal text-white py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-lotus-green mb-2">{metric.value}</div>
                <div className="font-semibold text-lg">{metric.label}</div>
                <div className="text-sm text-gray-400 mt-1">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Your Fast-Track to a Nursing Career</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto text-lg">Our 31-Day Hybrid CNA program is structured for your success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hybridProgramDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto bg-lotus-green/10 p-4 rounded-full w-fit mb-4">
                  <detail.icon className="h-8 w-8 text-lotus-green" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{detail.title}</h3>
                <p className="text-gray-600">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Friday Enrollment Spots Filling Fast!</h2>
              <p className="text-slate-300 text-lg mb-8">
                Our Friday Express Enrollment events are the fastest way to get your funding approved and start your training. These spots are extremely limited and reserved on a first-come, first-served basis.
              </p>
              <Button size="lg" className="bg-cyan-400 text-slate-900 hover:bg-cyan-300 font-bold" onClick={() => navigate('/wioa-friday')}>
                Learn About Friday Enrollment
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <EnrollmentTracker 
                spots={wioaSpots} 
                onReserveSpot={() => navigate('/wioa-friday')}
                onNextCohort={() => navigate('/wioa-friday')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <WhyFridayFillsFastSection />

      <StudentSuccess />

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Explore Our Other Programs</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Continue your education and advance your career with our other state-approved programs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg card-hover text-center">
                  <CardHeader>
                    <div className="mx-auto bg-lotus-green/10 p-4 rounded-full w-fit mb-2">
                      <program.icon className="h-8 w-8 text-lotus-green" />
                    </div>
                    <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                    <Link to={program.link}>
                      <Button variant="outline" className="w-full border-lotus-green text-lotus-green hover:bg-lotus-green/10 mt-auto">Learn More</Button>
                    </Link>
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

export default Home;