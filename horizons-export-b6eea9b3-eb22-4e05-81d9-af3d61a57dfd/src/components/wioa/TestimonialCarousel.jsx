import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg bg-white overflow-hidden">
            <CardContent className="p-8 text-center">
              <img loading="lazy" alt={testimonials[index].name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200" src={testimonials[index].image} />
              <p className="text-slate-600 italic text-lg mb-4">"{testimonials[index].quote}"</p>
              <h3 className="font-bold text-slate-800 text-xl">{testimonials[index].name}</h3>
              <p className="text-sm text-blue-600 font-semibold">{testimonials[index].program}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      <Button onClick={prevTestimonial} variant="outline" size="icon" className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 rounded-full h-10 w-10 bg-white/80 hover:bg-white">
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button onClick={nextTestimonial} variant="outline" size="icon" className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 rounded-full h-10 w-10 bg-white/80 hover:bg-white">
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default TestimonialCarousel;