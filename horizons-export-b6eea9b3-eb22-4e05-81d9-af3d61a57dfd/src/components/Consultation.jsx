import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Consultation booking feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const consultationBenefits = [
    'Personalized program recommendations',
    'Financial aid and funding options review',
    'Career pathway planning',
    'Schedule and format discussion',
    'Campus tour (virtual or in-person)',
    'Admissions requirements overview'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your <span className="text-blue-600">Free Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards your healthcare career. Our admissions advisors will help you 
            choose the right program and explore all available funding options.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  Book Your Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="program">Program of Interest</Label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a program</option>
                      <option value="cna">Certified Nursing Assistant (CNA)</option>
                      <option value="hha">Home Health Aide (HHA)</option>
                      <option value="rna">Registered Nursing Assistant (RNA)</option>
                      <option value="lvn">Licensed Vocational Nurse (LVN)</option>
                      <option value="undecided">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Consultation Time</Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="weekend">Weekend</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Questions or Comments</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your goals, questions, or any specific concerns..."
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    Schedule My Free Consultation
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Consultation Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* What to Expect */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {consultationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">(909) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">info@lotusmedicalcollege.edu</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600">123 Healthcare Blvd<br />Pomona, CA 91766</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-gray-600">
                      Mon-Fri: 8 AM - 8 PM<br />
                      Sat: 9 AM - 5 PM<br />
                      Sun: By appointment
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">24-Hour Response Guarantee</h3>
              <p className="text-blue-100">
                We'll contact you within 24 hours to schedule your consultation at a time that works for you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;