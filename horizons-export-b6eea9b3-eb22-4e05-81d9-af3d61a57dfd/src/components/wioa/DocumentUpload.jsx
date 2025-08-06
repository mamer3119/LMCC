import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Upload, CheckCircle, FileText, AlertCircle } from 'lucide-react';

const DocumentUpload = () => {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState({});

  const documentsToUpload = [
    "Valid Photo ID",
    "Social Security Card",
    "Proof of CalJOBS Registration",
    "Updated Resume",
  ];

  const handleFileUpload = (docName, event) => {
    const file = event.target.files[0];
    if (file) {
      toast({
        title: `Uploading ${docName}...`,
        description: "This is a simulated upload for demonstration.",
      });
      setTimeout(() => {
        setUploadedFiles(prev => ({ ...prev, [docName]: file.name }));
        toast({
          title: `✅ ${docName} Uploaded!`,
          description: `${file.name}`,
        });
      }, 1500);
    }
  };

  return (
    <div className="text-left bg-slate-800/50 p-6 rounded-lg my-8">
      <h3 className="text-xl font-bold flex items-center mb-2 text-cyan-400">
        <Upload className="mr-3" /> Upload Documents (Optional)
      </h3>
      <p className="text-slate-400 mb-4">
        Get a head start! Uploading these documents now will speed up your enrollment on Friday.
      </p>
      <div className="space-y-4">
        {documentsToUpload.map(docName => (
          <div key={docName} className="bg-slate-700/50 p-3 rounded-md flex items-center justify-between gap-4">
            <div className="flex items-center">
              {uploadedFiles[docName] ? (
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
              ) : (
                <FileText className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
              )}
              <div>
                <p className="font-semibold text-slate-200">{docName}</p>
                {uploadedFiles[docName] && (
                  <p className="text-xs text-slate-400 truncate max-w-[150px]">{uploadedFiles[docName]}</p>
                )}
              </div>
            </div>
            <Button asChild size="sm" variant={uploadedFiles[docName] ? "secondary" : "outline"} className="shrink-0">
              <label htmlFor={`upload-${docName}`}>
                {uploadedFiles[docName] ? 'Replace' : 'Upload'}
                <Input
                  id={`upload-${docName}`}
                  type="file"
                  className="sr-only"
                  onChange={(e) => handleFileUpload(docName, e)}
                />
              </label>
            </Button>
          </div>
        ))}
      </div>
       <div className="mt-6 p-3 bg-yellow-900/50 border border-yellow-700 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-yellow-300">Don't Forget!</p>
          <p className="text-sm text-yellow-400">Please bring all original documents with you on Friday, even if you upload them here.</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;