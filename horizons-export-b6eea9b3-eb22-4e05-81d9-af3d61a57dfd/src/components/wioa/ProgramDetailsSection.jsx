import React from 'react';
import { motion } from 'framer-motion';
import { Award, Monitor, Briefcase } from 'lucide-react';

const ProgramDetailsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <img loading="lazy" alt="Happy CNA graduate in scrubs" className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1631217872992-752933e1a3a7" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">About the 30-Day Hybrid CNA Program</h2>
          <p className="mt-4 text-lg text-slate-600">Our state-approved program is designed for your success, blending flexible online learning with essential hands-on clinical practice.</p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4"><div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full"><Award className="h-6 w-6" /></div><div><h3 className="font-bold text-lg">92% State Exam Pass Rate</h3><p className="text-slate-600">Our curriculum is focused on ensuring you pass the state exam with confidence.</p></div></div>
            <div className="flex items-start gap-4"><div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full"><Monitor className="h-6 w-6" /></div><div><h3 className="font-bold text-lg">Online Theory</h3><p className="text-slate-600">Study from anywhere with our engaging, mobile-friendly learning platform.</p></div></div>
            <div className="flex items-start gap-4"><div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full"><Briefcase className="h-6 w-6" /></div><div><h3 className="font-bold text-lg">Local Clinical Training</h3><p className="text-slate-600">Gain real-world experience at top healthcare facilities in Pomona and San Bernardino.</p></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;