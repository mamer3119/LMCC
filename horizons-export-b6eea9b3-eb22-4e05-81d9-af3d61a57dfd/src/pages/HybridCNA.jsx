import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Monitor, Briefcase, Award, Phone, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const HybridCNA = () => {
    const { toast } = useToast();

    const handleContactClick = () => {
        toast({
            title: "Let's Talk!",
            description: "Redirecting you to our contact page to connect with an advisor.",
        });
    };

    const quickFacts = [
        { icon: Clock, text: "Duration: 30 Days Total" },
        { icon: Users, text: "Format: Hybrid (Online + Clinical)" },
        { icon: Clock, text: "Schedule: Multiple Options Available" },
        { icon: Briefcase, text: "Clinical Sites: Pomona & San Bernardino Areas" },
        { icon: Award, text: "State Exam: Included in Program" },
        { icon: Phone, text: "Job Assistance: Career Services Support" },
    ];

    const programPhases = [
        {
            phase: "Phase 1: Online Theory (Days 1-10)",
            icon: Monitor,
            details: [
                "Interactive modules at your pace",
                "Live virtual instructor support",
                "Mobile-friendly learning platform"
            ],
            color: "bg-blue-100",
            textColor: "text-blue-800"
        },
        {
            phase: "Phase 2: Clinical Training (Days 11-30)",
            icon: Briefcase,
            details: [
                "Hands-on skills practice",
                "Real healthcare facility experience",
                "Professional supervision"
            ],
            color: "bg-lotus-green/10",
            textColor: "text-lotus-green"
        }
    ];

    return (
        <>
            <Helmet>
                <title>30-Day Hybrid CNA Program - Lotus Medical Career College</title>
                <meta name="description" content="Our flexible 30-day Hybrid CNA program combines online theory with local clinical training in Pomona & San Bernardino. State exam and job assistance included." />
            </Helmet>

            <main className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <Badge variant="secondary" className="mb-4 text-lotus-green font-semibold border-lotus-green/50">The Flexible Path to Healthcare</Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">
                            30-Day Hybrid CNA Program
                        </h1>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold font-heading mb-6">Program Structure</h2>
                                <div className="space-y-8">
                                    {programPhases.map((item, index) => (
                                        <Card key={index} className="overflow-hidden">
                                            <CardHeader className={`${item.color} flex flex-row items-center space-x-4 p-4`}>
                                                <div className={`p-2 rounded-full ${item.textColor} bg-white`}>
                                                   <item.icon className="h-6 w-6" />
                                                </div>
                                                <CardTitle className={`text-xl font-bold ${item.textColor.replace('text-', 'text-')}`}>{item.phase}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-6">
                                                <ul className="space-y-3">
                                                    {item.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                                            <span className="text-gray-700">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <Card className="mt-12 bg-lotus-green/10 border-lotus-green/50">
                                    <CardContent className="p-8 text-center">
                                        <h3 className="text-2xl font-bold font-heading text-charcoal mb-2">Scheduling Flexibility</h3>
                                        <p className="text-gray-700 mb-6">Ask about our schedule options designed for working students</p>
                                        <Link to="/contact">
                                            <Button size="lg" className="bg-lotus-green text-white hover:bg-lotus-green/90" onClick={handleContactClick}>
                                                <Phone className="mr-2 h-5 w-5"/>
                                                Contact Advisor
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>

                            </motion.div>
                        </div>

                        {/* Quick Facts Sidebar */}
                        <aside>
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="sticky top-28"
                            >
                                <Card className="shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-2xl text-charcoal">Quick Facts</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4">
                                            {quickFacts.map((fact, index) => (
                                                <li key={index} className="flex items-center">
                                                    <fact.icon className="h-6 w-6 text-lotus-green mr-4" />
                                                    <span className="font-medium text-gray-700">{fact.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                             </motion.div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HybridCNA;