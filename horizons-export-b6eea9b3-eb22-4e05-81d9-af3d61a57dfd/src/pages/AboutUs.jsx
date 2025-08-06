import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Lotus Medical Career College</title>
        <meta name="description" content="Learn about the mission, vision, and leadership of Lotus Medical Career College. We are committed to providing top-tier healthcare education." />
      </Helmet>
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">
              About Lotus Medical Career College
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated to shaping the next generation of compassionate and skilled healthcare professionals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                alt="A diverse group of nursing students collaborating"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
               src="https://images.unsplash.com/photo-1676046261150-063cf0de59dd" />
            </motion.div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-lotus-green/10 p-3 rounded-full"><Target className="h-6 w-6 text-lotus-green" /></div>
                <div>
                  <h2 className="text-2xl font-bold font-heading">Our Mission</h2>
                  <p className="text-gray-600 mt-1">To provide accessible, high-quality vocational training that empowers students from diverse backgrounds to achieve their career goals in the healthcare industry.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-lotus-green/10 p-3 rounded-full"><Eye className="h-6 w-6 text-lotus-green" /></div>
                <div>
                  <h2 className="text-2xl font-bold font-heading">Our Vision</h2>
                  <p className="text-gray-600 mt-1">To be a leading provider of healthcare education in Southern California, recognized for our commitment to student success, clinical excellence, and community impact.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  alt="Headshot of Director Mrs. Asima Jabbar"
                  className="rounded-full shadow-lg w-48 h-48 mx-auto object-cover"
                 src="https://images.unsplash.com/photo-1579175390519-4d406b9d319d" />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold font-heading">A Message from Our Director</h2>
                <p className="text-xl font-semibold text-lotus-green mt-1">Mrs. Asima Jabbar, RN, MSN-ED</p>
                <p className="text-gray-600 mt-4 italic">"Welcome to Lotus Medical Career College! We believe that a career in healthcare is more than a job—it's a calling. Our dedicated team is here to provide you with the education, hands-on training, and unwavering support you need to answer that call and build a successful, fulfilling career. We are proud to be your partner on this incredible journey."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0"><ShieldCheck className="h-8 w-8 text-lotus-green" /></div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading">Accreditation & Compliance</h2>
                    <p className="text-gray-600 mt-2">Lotus Medical Career College is a private institution that is approved to operate by the Bureau for Private Postsecondary Education (BPPE). Our programs are designed to meet the rigorous standards set by the California Department of Public Health (CDPH) for Nurse Assistant Training Programs (NATP). Our commitment to these regulatory bodies ensures your education is valuable, recognized, and prepares you for state certification and licensure.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;