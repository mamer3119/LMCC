import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Briefcase, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="text-center h-full shadow-lg card-hover">
      <CardHeader>
        <div className="mx-auto bg-lotus-green/10 p-4 rounded-full w-fit">
          <Icon className="h-10 w-10 text-lotus-green" />
        </div>
        <CardTitle className="mt-4 font-heading text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const StudentServices = () => {
  return (
    <>
      <Helmet>
        <title>Student Services - Lotus Medical Career College</title>
        <meta name="description" content="LMCC offers comprehensive student services including tutoring, career placement, and a strong alumni network to ensure your success." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">
            Student Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're invested in your success, from your first day of class to your entire career. Explore the resources available to every LMCC student.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={BookOpen}
            title="Tutoring & Academic Support"
            description="Struggling with a concept? Our instructors and peer tutors are available to provide one-on-one help to ensure you master the material."
          />
          <ServiceCard
            icon={Briefcase}
            title="Career Placement"
            description="Our dedicated career services team helps with resume building, interview prep, and connecting you with our network of healthcare employers."
          />
          <ServiceCard
            icon={Users}
            title="Alumni Network"
            description="Join a strong community of LMCC graduates. Get access to exclusive job postings, networking events, and continuing education opportunities."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-lotus-green text-white text-center py-12">
            <CardContent>
              <MessageCircle className="mx-auto h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold font-heading mb-4">Have Questions? We're Here to Help!</h2>
              <p className="max-w-xl mx-auto mb-6">
                Click the button below to chat with our student services team directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/19096825679?text=Hi%20LMCC!%20I%E2%80%99d%20like%20more%20info."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white text-lotus-green hover:bg-gray-100 font-bold">
                  Click to Chat
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </>
  );
};

export default StudentServices;