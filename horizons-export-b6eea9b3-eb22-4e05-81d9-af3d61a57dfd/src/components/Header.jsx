import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X, Phone, DollarSign, Calendar, Info, BookOpen } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const navLinks = [
  { name: 'Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Financial Aid', href: '/financial-aid' },
  { name: 'Knowledge Base', href: '/knowledge-base' },
  { name: 'Student Services', href: '/student-services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Close the sheet on link click
  };

  const handleCallUs = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Initiating call to 909-625-8050.",
    });
  };

  const menuVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        <Link to="/" className="flex items-center space-x-3">
          <img  alt="Lotus Medical Career College Logo" class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1672033145645-2c4c10ebe171" />
          <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-lotus-green'}`}>Lotus Medical</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-gray-700 font-medium hover:text-lotus-green transition-colors duration-200 ${
                location.pathname === link.href ? 'text-lotus-green border-b-2 border-lotus-green' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="ml-4 bg-lotus-green text-white hover:bg-lotus-green/90 px-5 py-2 rounded-md transition-all duration-300"
            onClick={handleCallUs}
          >
            <Phone className="h-4 w-4 mr-2" /> Call Now
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 bg-white flex flex-col">
              <SheetHeader className="pb-4 border-b">
                <SheetTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <img  alt="Lotus Medical Career College Logo" class="h-8 w-8 mr-2 rounded-full" src="https://images.unsplash.com/photo-1672033145645-2c4c10ebe171" />
                  Lotus Medical
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 py-6 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-xl font-medium text-gray-700 hover:text-lotus-green transition-colors duration-200 flex items-center"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 p-4 border-t">
                <Button className="w-full bg-lotus-green text-white hover:bg-lotus-green/90 px-5 py-2 rounded-md" onClick={() => { handleLinkClick(); handleCallUs(); }}>
                  <Phone className="h-4 w-4 mr-2" /> Call Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;