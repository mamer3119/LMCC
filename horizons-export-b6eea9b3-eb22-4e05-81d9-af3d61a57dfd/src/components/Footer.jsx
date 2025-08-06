import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const location = useLocation();

  if (location.pathname === '/wioa-free-cna-training') {
    return (
      <footer className="bg-slate-900 text-slate-400">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>© 2025 Lotus Medical Career College. All rights reserved.</p>
          <p className="text-xs mt-2">1460 E Holt Ave Suite 176A, Pomona, CA 91767 | (909) 625-8050</p>
        </div>
      </footer>
    );
  }

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} link isn't set up yet!`,
    });
  };

  const handleLinkClick = (link) => {
    toast({
      title: `🚧 ${link} page isn't implemented yet!`,
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Financial Aid', path: '/financial-aid' },
    { name: 'Student Services', path: '/student-services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-lotus-green">Lotus Medical Career College</h3>
            <p className="text-gray-300 mb-4">
              1460 E Holt Ave Suite 176A, <br />
              Pomona, CA 91767
            </p>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="mr-2 h-4 w-4 text-lotus-green" /> (909) 625-8050</p>
              <p className="flex items-center"><Clock className="mr-2 h-4 w-4 text-lotus-green" /> Mon–Fri 9:00 AM–5:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-lotus-green">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-lotus-green transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-lotus-green">Our Partners</h3>
            <div className="flex flex-col space-y-4">
              <img loading="lazy" alt="BPPE Logo" className="h-8 w-auto filter grayscale brightness-200" src="https://images.unsplash.com/photo-1697001190286-93c454542e76" />
              <img loading="lazy" alt="CDPH Logo" className="h-8 w-auto filter grayscale brightness-200" src="https://images.unsplash.com/photo-1542158621-2805ed653cb1" />
              <img loading="lazy" alt="iTrain Logo" className="h-6 w-auto filter grayscale brightness-200" src="https://images.unsplash.com/photo-1612810806546-ebbf22b53496" />
              <img loading="lazy" alt="CalJOBS Logo" className="h-6 w-auto filter grayscale brightness-200" src="https://images.unsplash.com/photo-1592181572975-1d0d8880d175" />
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-lotus-green">Compliance & Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/knowledge-base#bppe-approval" className="hover:text-lotus-green transition-colors">BPPE Approval Notice</Link></li>
              <li><Link to="/knowledge-base#fact-sheet" className="hover:text-lotus-green transition-colors">School Performance Fact Sheet</Link></li>
              <li><Link to="/knowledge-base#policies" className="hover:text-lotus-green transition-colors">Policies & Disclosures</Link></li>
              <li><Link to="/knowledge-base#student-catalog" className="hover:text-lotus-green transition-colors">Student Catalog</Link></li>
            </ul>
            <div className="flex space-x-4 mb-4 mt-6">
              <button onClick={() => handleSocialClick('Facebook')} aria-label="Facebook" className="text-white hover:text-lotus-green">
                <Facebook className="h-6 w-6" />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} aria-label="Instagram" className="text-white hover:text-lotus-green">
                <Instagram className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-gray-400">Follow us for updates and student stories.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 Lotus Medical Career College. All rights reserved.</p>
          <p className="mt-2">WIOA funding subject to eligibility verification.</p>
          <p>Must meet all AJCC requirements.</p>
          <p>Enrollment contingent on document verification.</p>
          <p>BPPE Approved School.</p>
          <p>Equal Opportunity Education Provider.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;