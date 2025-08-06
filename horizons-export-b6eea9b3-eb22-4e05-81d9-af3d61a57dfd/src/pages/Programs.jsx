import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Heart, Stethoscope, Download, MapPin, BookOpen, Award } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Programs = () => {
  const { toast } = useToast();

  const handleDownload = (program) => {
    toast({
      title: `Downloading ${program} Agreement...`,
      description: "This is a placeholder action.",
    });
  };

  const programData = [
    {
      icon: Users,
      title: 'Certified Nursing Assistant (CNA)',
      duration: '6-8 Weeks',
      format: 'Hybrid',
      description: 'The foundation of your nursing career. Learn essential patient care skills in a supportive, hands-on environment.',
      details: [
        { title: 'Core Skills', content: 'Patient care fundamentals, vital signs, infection control, and communication.' },
        { title: 'Clinical Experience', content: 'Supervised training in local healthcare facilities to apply your knowledge.' },
        { title: 'Career Path', content: 'Opens doors to roles in hospitals, nursing homes, and long-term care facilities.' },
      ]
    },
    {
      icon: Heart,
      title: 'Home Health Aide (HHA)',
      duration: '4-6 Weeks',
      format: 'Hybrid',
      description: 'Provide compassionate, competent care for patients in their homes. A fast-track to a rewarding role.',
      details: [
        { title: 'Core Skills', content: 'Personal care, nutrition, home safety, and supporting patient independence.' },
        { title: 'Clinical Experience', content: 'Practical training focused on the unique aspects of in-home care.' },
        { title: 'Career Path', content: 'Work with home health agencies, hospices, and private clients.' },
      ]
    },
    {
      icon: Stethoscope,
      title: 'Licensed Vocational Nurse (LVN)',
      duration: '12-18 Months',
      format: 'Hybrid',
      description: 'Advance your career with our comprehensive LVN program, preparing you for licensure and a leadership role in patient care.',
      details: [
        { title: 'Core Skills', content: 'Pharmacology, patient assessment, IV therapy, and advanced nursing procedures.' },
        { title: 'Clinical Experience', content: 'Extensive clinical rotations across various healthcare settings.' },
        { title: 'Career Path', content: 'Become a licensed nurse working in hospitals, clinics, and more.' },
      ]
    },
    {
      icon: Award,
      title: 'Restorative Nurse Assistant (RNA)',
      duration: '10-12 Weeks',
      format: 'Hybrid',
      description: 'Specialize in restorative care techniques to help patients regain independence and improve their quality of life.',
      details: [
        { title: 'Core Skills', content: 'Therapeutic exercises, mobility training, and promoting patient self-care.' },
        { title: 'Clinical Experience', content: 'Focused training in rehabilitation and long-term care facilities.' },
        { title: 'Career Path', content: 'Specialized roles in skilled nursing facilities and rehabilitation centers.' },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Programs - Lotus Medical Career College</title>
        <meta name="description" content="Explore our CNA, HHA, LVN, and RNA programs. Find program lengths, formats, and download enrollment agreements." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">
            Our Healthcare Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each program is designed to provide you with the skills, knowledge, and hands-on experience needed to excel in the healthcare field.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {programData.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`} className="border rounded-lg shadow-sm bg-white">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="bg-lotus-green/10 p-3 rounded-full">
                      <program.icon className="h-8 w-8 text-lotus-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">{program.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-1">
                        <div className="flex items-center"><Clock className="mr-1.5 h-4 w-4" /> {program.duration}</div>
                        <div className="flex items-center"><Users className="mr-1.5 h-4 w-4" /> {program.format}</div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <div className="space-y-4 mb-6">
                    {program.details.map(detail => (
                      <div key={detail.title}>
                        <h4 className="font-semibold text-charcoal">{detail.title}</h4>
                        <p className="text-gray-600 text-sm">{detail.content}</p>
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => handleDownload(program.title)} className="w-full sm:w-auto bg-lotus-green text-white hover:bg-lotus-green/90">
                    <Download className="mr-2 h-4 w-4" /> Download Agreement
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-lotus-green/10 p-8 rounded-lg text-center"
        >
          <MapPin className="h-10 w-10 text-lotus-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold font-heading text-charcoal mb-2">Local Clinical Training</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            All our programs include extensive hands-on clinical rotations at our partner facilities across the Pomona Valley and Inland Empire, ensuring you get real-world experience close to home.
          </p>
        </motion.div>
      </main>
    </>
  );
};

export default Programs;