import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CalendarDays, MessageSquare, Check, FileText } from 'lucide-react';

const EnrollmentChecklistSection = ({ onSmsSignup }) => {
  const requiredDocuments = [
    { name: "Valid Photo ID", desc: "(Driver's License, State ID)" },
    { name: "Social Security Card", desc: "(Original, not a copy)" },
    { name: "Proof of CalJOBS Registration", desc: "(Active profile printout)" },
    { name: "Work Authorization", desc: "(If not a US Citizen)" },
    { name: "Proof of Residency", desc: "(Utility bill, lease agreement)" },
    { name: "Selective Service Registration", desc: "(For males 18-25)" },
    { name: "Proof of Income / Low Income", desc: "(Pay stubs, tax records)" },
    { name: "UI Verification / Layoff Letter", desc: "(If applicable)" },
    { name: "Updated Resume", desc: "(Bring a printed copy)" },
  ];

  return (
    <section id="checklist-section" className="bg-slate-50 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-slate-800">Your Express Enrollment Checklist</h2>
            <p className="mt-2 text-slate-600">Bring these documents to ensure a smooth one-day process on August 14th:</p>
            <Card className="mt-6 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600"><FileText className="mr-3"/>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 columns-1 sm:columns-2">
                  {requiredDocuments.map((doc, i) => (
                    <li key={i} className="flex items-start p-2 rounded-md transition-colors hover:bg-slate-100 break-inside-avoid">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{doc.name}</p>
                        <p className="text-xs text-slate-500">{doc.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="lg:col-span-2">
            <Card className="bg-white shadow-lg sticky top-28">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600"><MessageSquare className="mr-3"/>Get SMS Spot Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">Spots go fast. Enter your number to get notified about the August 14th orientation or future dates.</p>
                <form onSubmit={onSmsSignup} className="flex flex-col sm:flex-row gap-2">
                  <Input type="tel" placeholder="Phone Number" required className="bg-slate-100"/>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentChecklistSection;