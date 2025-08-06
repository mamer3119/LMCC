import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const Accreditations = () => {
  const accreditations = [
    {
      title: 'California Department of Public Health',
      description: 'State-approved nursing education programs',
      icon: Shield,
      status: 'Fully Accredited'
    },
    {
      title: 'Board of Vocational Nursing',
      description: 'Licensed Vocational Nurse program approval',
      icon: Award,
      status: 'State Approved'
    },
    {
      title: 'WIOA Eligible Provider',
      description: 'Workforce Innovation and Opportunity Act approved',
      icon: CheckCircle,
      status: 'Certified Provider'
    },
    {
      title: 'Veterans Affairs Approved',
      description: 'VA benefits accepted for eligible veterans',
      icon: Star,
      status: 'VA Approved'
    }
  ];

  const certifications = [
    'California State Board of Nursing Approved',
    'BPPE (Bureau for Private Postsecondary Education) Licensed',
    'NACCAS (National Accrediting Commission) Candidate',
    'Title IV Federal Financial Aid Eligible',
    'CalJOBS Training Provider',
    'EDD Approved Training Provider'
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
            <span className="text-blue-600">Accreditations</span> & Approvals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs meet the highest standards of healthcare education and are fully approved 
            by state and federal agencies to ensure your certification is recognized everywhere.
          </p>
        </motion.div>

        {/* Main Accreditations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <accreditation.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {accreditation.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {accreditation.description}
                  </p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {accreditation.status}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Certifications & Approvals
            </h3>
            <p className="text-gray-600">
              We maintain the highest standards through multiple regulatory approvals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{certification}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 text-white rounded-2xl p-12">
            <Award className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">
              Quality Education Guarantee
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our accreditations ensure that your certification will be recognized by employers 
              throughout California and beyond. We're committed to maintaining the highest 
              standards of healthcare education.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200">State Compliance</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Years Accredited</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Zero</div>
                <div className="text-blue-200">Compliance Issues</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accreditations;