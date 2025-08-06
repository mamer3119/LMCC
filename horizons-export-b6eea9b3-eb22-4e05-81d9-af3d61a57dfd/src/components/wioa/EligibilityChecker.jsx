import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const questions = [
  {
    id: 'employment',
    title: 'Step 1: Employment Status',
    options: ['Unemployed', 'Underemployed (<30 hrs/week)', 'Receiving UI benefits'],
  },
  {
    id: 'location',
    title: 'Step 2: Location',
    options: ['Los Angeles County resident', 'San Bernardino County resident'],
  },
  {
    id: 'workAuth',
    title: 'Step 3: Work Authorization',
    options: ['US Citizen', 'Permanent Resident', 'Work Authorized'],
  },
  {
    id: 'goals',
    title: 'Step 4: Goals',
    options: ['Seeking healthcare career', 'Need skills upgrade', 'Career change'],
  },
];

const EligibilityChecker = ({ onQualify, isModal = false }) => {
  const [selections, setSelections] = useState({
    employment: [],
    location: [],
    workAuth: [],
    goals: [],
  });
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckboxChange = (questionId, option) => {
    setSelections(prev => {
      const currentOptions = prev[questionId];
      if (currentOptions.includes(option)) {
        return { ...prev, [questionId]: currentOptions.filter(item => item !== option) };
      } else {
        return { ...prev, [questionId]: [...currentOptions, option] };
      }
    });
  };

  const checkEligibility = () => {
    const scores = {
      employment: selections.employment.length > 0 ? 1 : 0,
      location: selections.location.length > 0 ? 1 : 0,
      workAuth: selections.workAuth.length > 0 ? 1 : 0,
      goals: selections.goals.length > 0 ? 1 : 0,
    };
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

    if (totalScore === 4) {
      setResult('qualified');
    } else if (totalScore >= 2) {
      setResult('may-qualify');
    } else {
      setResult('not-qualified');
    }
  };
  
  const handleReserveClick = () => {
    if (onQualify) {
      onQualify();
    } else {
        toast({
          title: "✅ Great! Let's get you reserved.",
          description: "Redirecting you to the reservation form.",
        });
        navigate('/spot-reserved');
    }
  }


  const renderResult = () => {
    switch (result) {
      case 'qualified':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800">You Likely Qualify!</h3>
            <p className="text-green-700 mt-2 mb-4">Congratulations! Based on your answers, you are a strong candidate for funding.</p>
            <Button onClick={handleReserveClick} size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Reserve Your Funding Spot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        );
      case 'may-qualify':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-800">You May Qualify</h3>
            <p className="text-yellow-700 mt-2 mb-4">You meet some criteria. We recommend speaking with an advisor to confirm your eligibility.</p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <a href="tel:909-625-8050">Speak with an Advisor</a>
            </Button>
          </motion.div>
        );
      case 'not-qualified':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center p-6 bg-red-50 border border-red-200 rounded-lg">
            <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="2xl font-bold text-red-800">Other Funding Options Available</h3>
            <p className="text-red-700 mt-2 mb-4">While you may not qualify for this program, we have other financial aid and payment plans. Let's find one that works for you.</p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="/financial-aid">Explore Other Options</a>
            </Button>
          </motion.div>
        );
      default:
        return null;
    }
  };
  
  const content = (
      <AnimatePresence mode="wait">
        {result ? (
          renderResult()
        ) : (
          <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
            <div className={`grid ${isModal ? 'grid-cols-1 md:grid-cols-2' : 'md:grid-cols-2'} gap-x-12 gap-y-8`}>
              {questions.map(q => (
                <div key={q.id}>
                  <h3 className="font-bold text-lg text-slate-700 mb-3">{q.title}</h3>
                  <div className="space-y-3">
                    {q.options.map(opt => (
                      <div key={opt} className="flex items-center space-x-3">
                        <Checkbox
                          id={`${q.id}-${opt}`}
                          checked={selections[q.id].includes(opt)}
                          onCheckedChange={() => handleCheckboxChange(q.id, opt)}
                        />
                        <label
                          htmlFor={`${q.id}-${opt}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                        >
                          {opt}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button onClick={checkEligibility} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-6">
                Check Funding Eligibility
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  );

  if(isModal) {
    return content;
  }

  return (
    <section id="eligibility-checker" className="bg-slate-50 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">Check Your Funding Eligibility in 60 Seconds</h2>
          <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-slate-600">
            Answer a few quick questions to see if you qualify for FREE CNA training.
          </p>
        </motion.div>

        <Card className="mt-12 max-w-4xl mx-auto shadow-2xl">
          <CardContent className="p-8">
            {content}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EligibilityChecker;