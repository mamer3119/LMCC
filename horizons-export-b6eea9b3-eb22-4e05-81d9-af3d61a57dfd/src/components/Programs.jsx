import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, BookOpen } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Programs = () => {
  const { toast } = useToast();

  const handleLearnMore = (program) => {
    toast({
      title: `🚧 ${program} program details feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const programs = [
    {
      title: 'Certified Nursing Assistant (CNA)',
      duration: '6-8 weeks',
      schedule: 'Hybrid - Online & Clinical',
      description: 'Start your healthcare career with our comprehensive CNA program. Learn essential patient care skills and prepare for state certification.',
      features: ['Basic Patient Care', 'Vital Signs Monitoring', 'Medical Terminology', 'Clinical Rotations'],
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Home Health Aide (HHA)',
      duration: '4-6 weeks',
      schedule: 'Flexible Online',
      description: 'Provide compassionate care in home settings. Perfect for those wanting to help patients maintain independence in their homes.',
      features: ['Personal Care Assistance', 'Medication Reminders', 'Mobility Support', 'Documentation'],
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      title: 'Registered Nursing Assistant (RNA)',
      duration: '10-12 weeks',
      schedule: 'Hybrid - Evenings',
      description: 'Advanced nursing assistant training with expanded scope of practice. Bridge your way to higher nursing roles.',
      features: ['Advanced Patient Care', 'Medication Administration', 'Wound Care', 'Leadership Skills'],
      icon: Award,
      color: 'bg-purple-500'
    },
    {
      title: 'Licensed Vocational Nurse (LVN)',
      duration: '12-18 months',
      schedule: 'Hybrid - Weekends',
      description: 'Our flagship program preparing you for a rewarding career as a Licensed Vocational Nurse with comprehensive training.',
      features: ['Pharmacology', 'Patient Assessment', 'IV Therapy', 'Clinical Supervision'],
      icon: Clock,
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 medical-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Certification Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our flexible, state-approved programs designed to fit your schedule and career goals. 
            All programs include hands-on training and job placement assistance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">{program.schedule}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleLearnMore(program.title)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation with our admissions team to discuss your career goals and find the perfect program.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => handleLearnMore('Free Consultation')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;