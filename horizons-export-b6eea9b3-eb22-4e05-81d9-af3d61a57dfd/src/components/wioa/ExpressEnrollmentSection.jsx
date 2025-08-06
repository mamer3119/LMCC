import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Zap, CheckCircle } from 'lucide-react';

const ExpressEnrollmentSection = () => {
  return (
    <section id="express-enrollment-section" className="bg-white text-slate-800 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">WIOA Express Enrollment: The <span className="text-blue-600">Fast-Track</span> to Your Career</h2>
          <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-slate-600">
            Why wait weeks? Our exclusive partnership allows you to complete the entire WIOA process in a single day, right here on our campus.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader><CardTitle className="flex items-center text-red-700"><Clock className="mr-3"/>Typical WIOA Process (3+ Days)</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-slate-700">
                  <p>1. Visit AJCC office for initial screening.</p>
                  <p>2. Return for second appointment with counselor.</p>
                  <p>3. Wait for approval, then visit school to enroll.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <Card className="border-green-200 bg-green-50/50 shadow-2xl shadow-green-500/10">
                <CardHeader><CardTitle className="flex items-center text-green-700"><Zap className="mr-3"/>Our Express Process (1 Day)</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-slate-700">
                  <p className="font-bold">1. WIOA counselor comes to our campus. Complete all steps in one efficient session and start training sooner!</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="space-y-4">
            <h3 className="text-2xl font-bold">Your Express Benefits:</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Skip Multiple Office Visits:</strong> Save time and transportation costs.</span></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" /><span><strong>On-Campus Counselor:</strong> Get expert guidance right where you'll be learning.</span></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Efficient Group Processing:</strong> Move through the steps faster with other motivated students.</span></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Start Training Sooner:</strong> Get into the classroom and on your way to a new career faster than anyone else.</span></li>
            </ul>
            <p className="text-sm text-red-600 font-semibold pt-2">*Minimum of 8 students required for an Express Enrollment event to proceed.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpressEnrollmentSection;