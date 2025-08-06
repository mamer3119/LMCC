import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Star } from 'lucide-react';

const WhyFridayFillsFastSection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Why Funding Spots Fill Up So Fast</h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-slate-600 mb-12">Our Express Enrollment days are popular for a reason. Here’s why you need to act quickly:</p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <div className="mx-auto bg-blue-100 text-blue-600 p-4 rounded-full w-fit mb-4"><DollarSign className="h-8 w-8" /></div>
            <h3 className="text-xl font-bold text-slate-800">Limited Funds Available</h3>
            <p className="text-slate-600">Funding is allocated monthly and is not guaranteed. The earlier you enroll, the better your chances.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="mx-auto bg-blue-100 text-blue-600 p-4 rounded-full w-fit mb-4"><Users className="h-8 w-8" /></div>
            <h3 className="text-xl font-bold text-slate-800">First-Come, First-Served</h3>
            <p className="text-slate-600">Spots are strictly reserved in the order that applications are completed. Don't get left behind!</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <div className="mx-auto bg-blue-100 text-blue-600 p-4 rounded-full w-fit mb-4"><Star className="h-8 w-8" /></div>
            <h3 className="text-xl font-bold text-slate-800">Group Rate Advantage</h3>
            <p className="text-slate-600">Our ability to offer this express service depends on group sessions. This creates high demand for each Friday.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFridayFillsFastSection;