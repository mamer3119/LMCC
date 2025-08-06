import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Award, 
  Heart, 
  Briefcase,
  DollarSign,
  MapPin 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Experienced Instructors',
      description: 'Learn from healthcare professionals with 15+ years of real-world experience in clinical settings.',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend classes designed for working adults. Hybrid online and in-person options available.',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Hands-On Training',
      description: 'State-of-the-art simulation labs and clinical rotations at top healthcare facilities in the region.',
      color: 'bg-red-500'
    },
    {
      icon: Briefcase,
      title: 'Career Placement Support',
      description: '95% job placement rate with dedicated career services and partnerships with local healthcare employers.',
      color: 'bg-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Aid Available',
      description: 'Government funding assistance, payment plans, and scholarships to make education affordable.',
      color: 'bg-yellow-500'
    },
    {
      icon: Award,
      title: 'State Accredited',
      description: 'Fully accredited programs approved by California Department of Public Health and state nursing boards.',
      color: 'bg-indigo-500'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with maximum 15 students per class ensuring quality education and support.',
      color: 'bg-pink-500'
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Located in Pomona with easy access to public transportation and ample parking for students.',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Lotus Medical Career College?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional healthcare education that prepares you for a successful career 
            while accommodating your busy lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-blue-200">Successful Graduates</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-200">State Accredited</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;