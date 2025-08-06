import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, FileText, CreditCard, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const FinancialAid = () => {
  const { toast } = useToast();

  const handleFinancialAidClick = (option) => {
    toast({
      title: `🚧 ${option} feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const aidOptions = [
    {
      icon: DollarSign,
      title: 'Government Funding',
      description: 'We partner with state and federal agencies to provide funding assistance for eligible students.',
      features: ['WIOA Funding', 'CalJOBS Programs', 'Workforce Development Grants', 'Veterans Benefits'],
      color: 'bg-green-500'
    },
    {
      icon: CreditCard,
      title: 'Payment Plans',
      description: 'Flexible payment options to make your education affordable with no hidden fees.',
      features: ['0% Interest Plans', 'Monthly Installments', 'Deferred Payment Options', 'Early Payment Discounts'],
      color: 'bg-blue-500'
    },
    {
      icon: FileText,
      title: 'Scholarships',
      description: 'Merit-based and need-based scholarships available for qualifying students.',
      features: ['Academic Excellence Awards', 'Need-Based Assistance', 'Community Service Scholarships', 'Healthcare Worker Grants'],
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Employer Sponsorship',
      description: 'Many healthcare employers sponsor their employees\' education and training.',
      features: ['Tuition Reimbursement', 'Employer Partnerships', 'Career Advancement Programs', 'Continuing Education Support'],
      color: 'bg-orange-500'
    }
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
            <span className="text-blue-600">Financial Aid</span> & Funding Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let finances hold you back from your healthcare career dreams. We offer multiple funding options 
            and work with government agencies to make education accessible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aidOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Financial Aid Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Simple Financial Aid Process
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Free Consultation', desc: 'Meet with our financial aid advisor to discuss your options' },
                  { step: '2', title: 'Application Review', desc: 'We help you complete all necessary paperwork and applications' },
                  { step: '3', title: 'Funding Approval', desc: 'Receive approval notification and enrollment confirmation' },
                  { step: '4', title: 'Start Classes', desc: 'Begin your healthcare education journey with peace of mind' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleFinancialAidClick('Financial Aid Consultation')}
                >
                  Schedule Financial Aid Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <img  
                alt="Financial aid counselor helping student"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
               src="https://images.unsplash.com/photo-1562942668-ccd9a1f2ffc6" />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$0</div>
                  <div className="text-sm text-gray-600">Down Payment Required*</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Government Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted Government & Industry Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold">WIOA</div>
              <div className="text-sm text-gray-600">Workforce Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">CalJOBS</div>
              <div className="text-sm text-gray-600">California Employment</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">VA Benefits</div>
              <div className="text-sm text-gray-600">Veterans Affairs</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">EDD</div>
              <div className="text-sm text-gray-600">Employment Development</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialAid;