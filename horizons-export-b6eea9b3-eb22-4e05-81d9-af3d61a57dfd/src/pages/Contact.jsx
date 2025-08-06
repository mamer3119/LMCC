import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll be in touch shortly.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} link isn't set up yet!`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Lotus Medical Career College</title>
        <meta name="description" content="Contact LMCC for information about our programs. Find our address, phone number, and office hours, or send us a message directly." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and help you start your journey. Reach out to us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-lotus-green text-white hover:bg-lotus-green/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-gray-50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-lotus-green mt-1" />
                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-gray-600">1460 E Holt Ave Suite 176A, Pomona, CA 91767</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-lotus-green mt-1" />
                  <div>
                    <h4 className="font-semibold">Main Phone</h4>
                    <a href="tel:909-625-8050" className="text-gray-600 hover:text-lotus-green">(909) 625-8050</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img loading="lazy" alt="WhatsApp Icon" className="h-5 w-5 text-lotus-green mt-1" src="https://images.unsplash.com/photo-1599382103240-5f2a57137d28" />
                  <div>
                    <h4 className="font-semibold">WhatsApp Direct</h4>
                    <a href="https://wa.me/19096825679" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-lotus-green">+1 (909) 682-5679</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-lotus-green mt-1" />
                  <div>
                    <h4 className="font-semibold">Office Hours</h4>
                    <p className="text-gray-600">Mon–Fri: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-2">
                  <button onClick={() => handleSocialClick('Facebook')} aria-label="Facebook" className="text-gray-600 hover:text-lotus-green">
                    <Facebook className="h-6 w-6" />
                  </button>
                  <button onClick={() => handleSocialClick('Instagram')} aria-label="Instagram" className="text-gray-600 hover:text-lotus-green">
                    <Instagram className="h-6 w-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-0">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.704111885195!2d-117.7329188847838!3d34.0772109805993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32e2a7f958e1b%3A0x1a4a5e3e7f3e4e3!2s1460%20E%20Holt%20Ave%20%23176a%2C%20Pomona%2C%20CA%2091767%2C%20USA!5e0!3m2!1sen!2slt!4v1672527000000!5m2!1sen!2slt"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lotus Medical Career College Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </>
  );
};

export default Contact;