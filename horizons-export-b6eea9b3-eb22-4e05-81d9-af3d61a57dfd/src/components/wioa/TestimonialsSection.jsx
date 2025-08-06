import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria G.',
      program: 'WIOA-Funded CNA Graduate',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215',
      quote: "WIOA funding made my dream possible. Lotus Medical guided me through every step. I'm now working at a job I love, and it didn't cost me a thing to get started!"
    },
    {
      name: 'David L.',
      program: 'WIOA-Funded CNA Graduate',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19',
      quote: "I lost my job and didn't know what to do. The WIOA program at Lotus gave me a new career path and financial stability. The one-day enrollment was so easy."
    },
    {
      name: 'Jessica P.',
      program: 'WIOA-Funded CNA Graduate',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      quote: "The Express Enrollment Friday was amazing. I got everything done in a few hours instead of weeks. I highly recommend it to anyone serious about starting their career fast."
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Success Stories from WIOA Graduates</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;