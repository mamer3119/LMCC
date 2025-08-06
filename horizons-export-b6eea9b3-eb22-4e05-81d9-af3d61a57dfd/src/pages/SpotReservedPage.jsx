import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddToCalendar from '@/components/wioa/AddToCalendar';
import DocumentUpload from '@/components/wioa/DocumentUpload';

const SpotReservedPage = () => {
    const getNextFridayAppointment = () => {
        const now = new Date();
        const nextFriday = new Date(now);
        nextFriday.setDate(now.getDate() + (5 + 7 - now.getDay()) % 7);
        nextFriday.setHours(10, 0, 0, 0); // 10:00 AM
        return nextFriday;
    };

    const appointmentDate = getNextFridayAppointment();
    const appointmentEndDate = new Date(appointmentDate.getTime() + (2 * 60 * 60 * 1000)); // 2 hours duration

    const calendarEvent = {
        title: 'WIOA Enrollment Appointment - Lotus Medical',
        description: 'Your appointment to complete the WIOA enrollment process. Please bring all required documents. Address: 123 Lotus Lane, Pomona, CA 91766',
        location: 'Lotus Medical Career College, 123 Lotus Lane, Pomona, CA 91766',
        startTime: appointmentDate,
        endTime: appointmentEndDate,
    };

    return (
        <>
            <Helmet>
                <title>Spot Reserved! Next Steps | Lotus Medical</title>
                <meta name="description" content="Your spot is reserved! Here are the next steps, calendar links, and the document uploader for your WIOA enrollment." />
            </Helmet>
            <div className="bg-gradient-to-b from-slate-900 to-blue-900 text-white min-h-screen font-sans flex items-center justify-center py-12 px-4">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Card className="bg-white/10 border-slate-700 backdrop-blur-sm text-center">
                            <CardHeader>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
                                    className="mx-auto bg-green-500 rounded-full h-20 w-20 flex items-center justify-center mb-4"
                                >
                                    <Check className="h-12 w-12 text-white" />
                                </motion.div>
                                <CardTitle className="text-4xl font-extrabold text-white">Your Spot is Saved!</CardTitle>
                            </CardHeader>
                            <CardContent className="px-8 pb-8">
                                <p className="text-lg text-slate-300 mb-2">
                                    Congratulations! Your spot for the WIOA Express Enrollment on <strong>{appointmentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at 10:00 AM</strong> is held.
                                </p>
                                <p className="text-slate-400 mb-6">
                                    An automated email with all requirements has been sent to you. An advisor will also call to confirm.
                                </p>
                                
                                <AddToCalendar event={calendarEvent} />

                                <DocumentUpload />

                                <div className="mt-8">
                                    <Button size="lg" asChild variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                                        <a href="tel:909-625-8050">
                                            <Phone className="mr-2 h-5 w-5" /> Call with Questions
                                        </a>
                                    </Button>
                                </div>
                                <div className="mt-8">
                                  <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    &larr; Return to Homepage
                                  </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default SpotReservedPage;