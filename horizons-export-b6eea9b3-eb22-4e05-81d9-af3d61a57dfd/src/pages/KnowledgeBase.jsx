import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, UploadCloud, Search, Lock, Tag, FileClock, ShieldCheck, Gavel, UserX, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const DocumentRow = ({ title, date, size, fileName, id, link }) => {
  const { toast } = useToast();
  const handleDownload = () => {
    toast({
      title: "🚧 Download feature isn't implemented yet.",
      description: "You'll be able to download '" + fileName + "' from here soon!",
    });
  };

  return (
    <div id={id} className="flex flex-wrap items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4">
        <FileText className="h-6 w-6 text-lotus-green" />
        <div>
          <p className="font-semibold text-charcoal">{title}</p>
          <p className="text-sm text-gray-500">Last updated: {date}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        {size && <Badge variant="outline" className="font-mono">{size}</Badge>}
        {link ? (
            <Link to={link}>
                <Button size="sm" className="bg-lotus-green text-white hover:bg-lotus-green/90">
                    <BookOpen className="mr-2 h-4 w-4" /> View Document
                </Button>
            </Link>
        ) : (
            <Button size="sm" onClick={handleDownload} className="bg-lotus-green text-white hover:bg-lotus-green/90">
                <Download className="mr-2 h-4 w-4" /> Download
            </Button>
        )}
      </div>
    </div>
  );
};

const StudentResourceCard = ({ title, tags, description }) => {
    const { toast } = useToast();
    const handleView = () => {
        toast({
            title: `🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
        });
    };

    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h4 className="font-semibold text-charcoal mb-2">{title}</h4>
            <div className="flex flex-wrap gap-2 mb-3">
                {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <Button variant="outline" size="sm" onClick={handleView}>View Resource</Button>
        </div>
    );
};

const KnowledgeBase = () => {
  const { toast } = useToast();
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const handleUpload = () => {
    toast({
      title: "🚧 Upload feature isn't implemented yet.",
      description: "You can request this feature in your next prompt!",
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Search isn't functional yet.",
      description: "This will filter student resources once implemented.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Knowledge Base - Lotus Medical Career College</title>
        <meta name="description" content="Access regulatory documents, student handbooks, and learning materials required by BPPE and CDPH. Your central hub for all official college resources." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4">Knowledge Base</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your central hub for all regulatory documents, student learning resources, and official college materials.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold font-heading text-charcoal">
                Regulatory Documents (Public Access)
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <p className="text-gray-600 mb-6">
                  In compliance with California BPPE (Title 5 §71710) and CDPH NATP (Title 22 §71835) disclosure rules, the following documents are available to the public.
                </p>
                <div className="space-y-4">
                  <DocumentRow title="BPPE Approval Notice" date={today} size="150 KB" fileName="bppe-approval-notice.pdf" id="bppe-approval" />
                  <DocumentRow title="School Performance Fact Sheet" date={today} size="1.2 MB" fileName="fact-sheet.pdf" id="fact-sheet" />
                  <DocumentRow title="Student Catalog" date={today} size="2.5 MB" fileName="student-catalog.pdf" id="student-catalog" />
                  <div>
                    <h4 className="font-semibold text-lg text-charcoal my-4">Enrollment Agreements</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <DocumentRow title="CNA Agreement" date={today} size="350 KB" fileName="cna-agreement.pdf" />
                      <DocumentRow title="HHA Agreement" date={today} size="350 KB" fileName="hha-agreement.pdf" />
                      <DocumentRow title="RNA Agreement" date={today} size="350 KB" fileName="rna-agreement.pdf" />
                      <DocumentRow title="LVN Agreement" date={today} size="350 KB" fileName="lvn-agreement.pdf" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-policies">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold font-heading text-charcoal">
                <div className="flex items-center space-x-2" id="policies">
                  <Gavel className="h-5 w-5" />
                  <span>Policies & Disclosures</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <p className="text-gray-600 mb-6">
                  Transparency and student rights are paramount. Access important college policies and disclosures here.
                </p>
                <div className="space-y-4">
                  <DocumentRow title="Complaint Process Information" date={today} fileName="complaint-process.pdf" />
                  <DocumentRow title="Non-Discrimination Policy" date={today} fileName="non-discrimination-policy.pdf" />
                  <DocumentRow title="Privacy Policy (FERPA)" date={today} fileName="privacy-policy-ferpa.pdf" />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold font-heading text-charcoal">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>Student Resources (Restricted Access)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <p className="text-gray-600 mb-6">
                  This section is for enrolled students. You would typically need to log in to access these materials.
                </p>
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <Input placeholder="Search syllabi, checklists, guides..." className="pl-10" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <Button type="submit" className="bg-lotus-green text-white hover:bg-lotus-green/90">Search</Button>
                  <Button variant="outline">
                    <Tag className="mr-2 h-4 w-4" /> Filter by Tag
                  </Button>
                </form>

                <div className="grid md:grid-cols-2 gap-4">
                    <StudentResourceCard title="LVN Program Syllabus" tags={['LVN', 'Syllabus']} description="Complete semester-by-semester breakdown of the LVN program." />
                    <StudentResourceCard title="CNA Skills Checklist" tags={['CNA', 'Clinical']} description="Official checklist for all required clinical skills and competencies." />
                    <StudentResourceCard title="Student Policy Manual" tags={['Handbook', 'Policy']} description="The official student handbook covering all policies and procedures." />
                    <StudentResourceCard title="NCLEX-PN Exam Guide" tags={['LVN', 'Exam Prep']} description="A comprehensive study guide to prepare for the NCLEX-PN licensure exam." />
                </div>
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold font-heading text-charcoal">
                <div className="flex items-center space-x-2">
                  <UploadCloud className="h-5 w-5" />
                  <span>File Management (Admin)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <h4 className="mt-4 text-lg font-semibold text-charcoal">Drag & Drop to Upload</h4>
                  <p className="text-sm text-gray-500 mt-1">Accepts PDF, DOC, PPT, MP4 (max 100MB)</p>
                  <Button className="mt-4 bg-lotus-green text-white hover:bg-lotus-green/90" onClick={handleUpload}>Or select files</Button>
                </div>
                 <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <FileClock className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-blue-700">
                                Files are versioned automatically. The 3 latest versions are kept, while older ones are archived.
                            </p>
                        </div>
                    </div>
                 </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
           <div className="mt-12 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center"><ShieldCheck className="h-4 w-4 mr-2 text-gray-400" />For more information, please see our Document Retention & Access Policy – SOC 2 controls, 2-year public retention.</p>
            <p className="font-semibold mt-1">All connections are secured via SSL.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default KnowledgeBase;