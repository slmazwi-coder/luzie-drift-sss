import React from 'react';

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
      </div>
    </div>
  );
};
