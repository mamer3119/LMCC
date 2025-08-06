import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const StudentSuccess = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      program: 'LVN Graduate',
      image: 'Professional Latina nurse in scrubs smiling confidently in hospital setting',
      quote: 'Lotus Medical Career College changed my life. The flexible evening classes allowed me to work while studying, and the instructors were incredibly supportive. I landed my dream job at Pomona Valley Hospital within two weeks of graduation!',
      rating: 5,
      employer: 'Pomona Valley Hospital'
    },
    {
      name: 'James Thompson',
      program: 'CNA Graduate',
      image: 'African American male nursing assistant helping elderly patient with warm smile',
      quote: 'As a single father, I needed a program that worked with my schedule. The hybrid format was perfect, and the career services team helped me find a position that pays well and has great benefits.',
      rating: 5,
      employer: 'Kindred Healthcare'
    },
    {
      name: 'Sarah Chen',
      program: 'HHA Graduate',
      image: 'Asian American woman providing compassionate home care to elderly patient',
      quote: 'The hands-on training prepared me so well for real-world situations. I love being able to help patients in their homes and make a difference in their daily lives. The job placement support was amazing!',
      rating: 5,
      employer: 'Visiting Angels'
    },
    {
      name: 'David Martinez',
      program: 'RNA Graduate',
      image: 'Hispanic male nurse working with medical equipment in modern healthcare facility',
      quote: 'I was working in retail and wanted a career change. The RNA program gave me the skills and confidence I needed. Now I have a stable career with room for growth and I\'m making a real difference.',
      rating: 5,
      employer: 'Casa Colina Hospital'
    }
  ];

  const successStats = [
    { number: '95%', label: 'Job Placement Rate', description: 'Within 6 months of graduation' },
    { number: '$45K', label: 'Average Starting Salary', description: 'For LVN graduates' },
    { number: '2,500+', label: 'Successful Graduates', description: 'Working in healthcare today' },
    { number: '98%', label: 'Student Satisfaction', description: 'Would recommend our programs' }
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
            <span className="text-lotus-green">Student Success</span> Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their lives and are now making a difference 
            in healthcare facilities across Southern California.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4 lg:justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="snap-center flex-shrink-0 w-[90%] sm:w-5/6 md:w-2/3 lg:w-1/3 lg:flex-shrink"
              >
                <Card className="h-full card-hover border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img loading="lazy"
                        alt={`${testimonial.name} - ${testimonial.program}`}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                       src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-lotus-green font-medium">{testimonial.program}</p>
                        <p className="text-sm text-gray-600">{testimonial.employer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Quote className="h-8 w-8 text-lotus-green/20 absolute -top-2 -left-2" />
                      <p className="text-gray-600 leading-relaxed pl-6 italic">
                        {testimonial.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;