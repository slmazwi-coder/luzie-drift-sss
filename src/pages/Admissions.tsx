import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Users, CheckCircle } from 'lucide-react';

export const Admissions = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Admissions</h1>

        {/* School Info Banner */}
        <div className="bg-[#FDF9EC] rounded-3xl p-6 md:p-10 mb-10 border border-[#C8A400] shadow-lg">
          <h2 className="text-2xl font-bold text-[#166534] mb-4">Welcome to Luzie Drift SSS</h2>
          <p className="text-gray-700 mb-4">
            Luzie Drift Senior Secondary School is a <strong>no-fee school</strong> under the Joe Gqabi Education District. 
            We welcome learners entering Grades 10 to 12 to apply for admission.
          </p>
          <p className="text-gray-700 mb-4">
            Admission follows the guidelines set by the Eastern Cape Department of Education and the South African Schools Act (SASA). 
            Learners transitioning from Grade 9 at a junior secondary school are eligible to apply.
          </p>
          
          <h3 className="text-lg font-bold text-[#166534] mt-6 mb-3">Documents Required for Admission</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Certified copy of the learner's birth certificate</li>
            <li>Most recent school report / academic record</li>
            <li>Transfer card from the previous school</li>
            <li>Proof of residential address</li>
            <li>Immunisation record (where applicable)</li>
          </ul>
          
          <p className="text-gray-600 mt-4 text-sm italic">
            As a no-fee school, no school fees are charged. Parents and guardians are encouraged to contact the school's administration office for the most current admission dates and procedures.
          </p>
        </div>

        {/* Application Process */}
        <div className="bg-[#FDF9EC] rounded-3xl p-6 md:p-10 mb-10 border border-[#C8A400] shadow-lg">
          <h2 className="text-2xl font-bold text-[#166534] mb-6">Application Process</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#C8A400]/30">
              <div className="w-12 h-12 rounded-full bg-[#C8A400] flex items-center justify-center mb-4">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-[#166534] mb-2">Step 1: Gather Documents</h3>
              <p className="text-gray-600 text-sm">Prepare all required documents including birth certificate, school reports, and transfer card.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-[#C8A400]/30">
              <div className="w-12 h-12 rounded-full bg-[#C8A400] flex items-center justify-center mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-[#166534] mb-2">Step 2: Submit Application</h3>
              <p className="text-gray-600 text-sm">Complete the online application form below or visit the school office during admission periods.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-[#C8A400]/30">
              <div className="w-12 h-12 rounded-full bg-[#C8A400] flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-[#166534] mb-2">Step 3: Await Confirmation</h3>
              <p className="text-gray-600 text-sm">The school will contact you regarding the status of your application once reviewed.</p>
            </div>
          </div>
        </div>

        {/* Apply Now Section */}
        <div className="bg-[#166534] rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Complete our online admission application form. For assistance, please contact the school directly or visit the administration office.
          </p>
          <Link
            to="/boarding"
            className="inline-flex items-center gap-2 bg-[#C8A400] hover:bg-[#B89200] text-[#166534] font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            <FileText size={20} />
            Apply Online Now
          </Link>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>Open to Grades 10-12</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>No School Fees Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Annual Admission Cycles</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Have questions?{' '}
            <Link to="/contact" className="text-[#166534] font-semibold hover:underline">
              Contact our admissions office
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
