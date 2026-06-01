import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());
  const [campusFailed, setCampusFailed] = useState(false);
  const [principalFailed, setPrincipalFailed] = useState(false);

  const campusImageUrl = '/assets/about/lscampus.png';
  const principalImageUrl = '/assets/about/principal.jpg';

  useEffect(() => {
    setData(getAbout());
  }, []);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title */}
        <h1 className="section-title">About Luzie Drift SSS</h1>

        {/* ── Section 1: Our School + Campus Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-16 sm:mb-24">

          {/* Text */}
          <motion.div
            initial={ { opacity: 0, y: 24 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.35 } }
            viewport={ { once: true } }
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 border-[#C8A400] pl-5 mb-6">
              <h2 className="text-2xl font-bold text-[#166534]">Our School</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              {data.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Campus Image (match principal styling + avoid cropping) */}
          <motion.div
            initial={ { opacity: 0, y: 24 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.35, delay: 0.05 } }
            viewport={ { once: true } }
            className="bg-[#FDF9EC] rounded-3xl overflow-hidden shadow-lg border border-[#C8A400]"
          >
            <div className="bg-[#166534] p-6 sm:p-8">
              {/* Outer holder: rounded + gold frame all around */}
              <div
                className="w-full rounded-3xl bg-[#166534] p-2 sm:p-3"
                style={ { border: '4px solid #C8A400' } }
              >
                {/* Inner holder: keeps the image nicely clipped on all corners */}
                <div className="w-full rounded-2xl overflow-hidden shadow-xl" style={ { aspectRatio: '4/3' } }>
                  {!campusFailed ? (
                    <img
                      src={campusImageUrl}
                      alt="School campus"
                      className="w-full h-full object-contain bg-[#166534]"
                      onError={() => setCampusFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#166534] via-[#C8A400] to-[#166534] flex items-center justify-center">
                      <div className="text-center text-white/70 px-6">
                        <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                          <ImageIcon />
                        </div>
                        <div className="font-semibold">Campus image</div>
                        <div className="text-sm text-white/60 font-mono">public/assets/about/</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Principal's Message ── */}
        <motion.section
          initial={ { opacity: 0, y: 24 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }
          viewport={ { once: true } }
          className="mb-16 sm:mb-24"
        >
          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#166534] mb-2">Principal's Message</h2>
            <div className="w-16 h-1 bg-[#166534] mx-auto rounded-full" />
          </div>

          {/* Card */}
          <div className="bg-[#FDF9EC] rounded-3xl overflow-hidden shadow-lg border border-[#C8A400]">
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Principal Photo Column */}
              <div className="flex flex-col items-center justify-center bg-[#166534] p-8 md:p-10">
                {/* Photo frame */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#C8A400] shadow-xl mb-5">
                  {!principalFailed ? (
                    <img
                      src={principalImageUrl}
                      alt="Principal"
                      className="w-full h-full object-cover object-top"
                      onError={() => setPrincipalFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#166534]">
                      <ImageIcon className="text-white/40" size={40} />
                    </div>
                  )}
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-bold text-white text-center leading-tight">
                  {data.principalName}
                </h3>
                <p className="text-[#C8A400] text-sm font-semibold mt-1 text-center">
                  {data.principalTitle}
                </p>

                {/* Decorative divider */}
                <div className="w-10 h-0.5 bg-[#166534] mt-4 rounded-full opacity-60" />
              </div>

              {/* Message Column */}
              <div className="col-span-2 flex flex-col justify-center p-8 md:p-12">
                {/* Opening quote mark — decorative only, not wrapping text */}
                <div className="text-[#C8A400] text-6xl font-serif leading-none mb-2 opacity-40 select-none">
                  "
                </div>

                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  {data.principalMessage.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Closing quote mark — decorative only */}
                <div className="text-[#C8A400] text-6xl font-serif leading-none mt-2 text-right opacity-40 select-none">
                  "
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* ── Section 3: Academic Programme ── */}
        <motion.section
          initial={ { opacity: 0, y: 24 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }
          viewport={ { once: true } }
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#166534] mb-2">Academic Programme</h2>
            <div className="w-16 h-1 bg-[#166534] mx-auto rounded-full" />
          </div>

          <div className="bg-[#FDF9EC] rounded-3xl p-8 md:p-12 shadow-lg border border-[#C8A400]">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Luzie Drift SSS offers a comprehensive National Senior Certificate (NSC) curriculum aligned with the Curriculum and Assessment Policy Statement (CAPS) framework, the national standard for secondary education in South Africa. Learners in Grades 10 through 12 work towards the National Senior Certificate, the qualification required for entry into further and higher education.
              </p>

              <h3 className="text-xl font-bold text-[#166534] mt-8 mb-4">Curriculum Approach</h3>
              <p>
                The school delivers a broad-based curriculum that prepares learners for both tertiary study and the world of work. Core subjects include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Home Language</li>
                <li>First Additional Language</li>
                <li>Mathematics or Mathematical Literacy</li>
                <li>Life Orientation</li>
                <li>Three elective subjects from a range of academic offerings</li>
              </ul>
              <p className="mt-4">
                Learners are encouraged to pursue subjects aligned with their academic strengths and career aspirations, with guidance from dedicated educators and support from the school's academic programme.
              </p>

              <h3 className="text-xl font-bold text-[#166534] mt-8 mb-4">External Examinations</h3>
              <p>
                Grade 12 learners at Luzie Drift SSS write the National Senior Certificate examinations administered by the Eastern Cape Department of Education (Examination Centre No. 4271022). These examinations open pathways to universities, TVET colleges, and various career opportunities.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Section 4: Leadership & Governance ── */}
        <motion.section
          initial={ { opacity: 0, y: 24 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }
          viewport={ { once: true } }
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#166534] mb-2">Leadership & Governance</h2>
            <div className="w-16 h-1 bg-[#166534] mx-auto rounded-full" />
          </div>

          <div className="bg-[#FDF9EC] rounded-3xl p-8 md:p-12 shadow-lg border border-[#C8A400]">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Luzie Drift SSS is led by a dedicated school management team committed to maintaining a supportive, disciplined, and academically stimulating environment. The school's principal, Mr. X.L. Nyume, provides strategic leadership in partnership with the School Governing Body (SGB), which plays a vital role in ensuring community involvement in the governance and development of the school.
              </p>
              <p>
                As a public school under the South African Schools Act (SASA) of 1996, Luzie Drift SSS upholds the democratic governance structures that give parents, educators, and learners a voice in shaping school policy and direction.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Section 5: Our Community ── */}
        <motion.section
          initial={ { opacity: 0, y: 24 } }
          whileInView={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }
          viewport={ { once: true } }
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#166534] mb-2">Our Community</h2>
            <div className="w-16 h-1 bg-[#166534] mx-auto rounded-full" />
          </div>

          <div className="bg-[#FDF9EC] rounded-3xl p-8 md:p-12 shadow-lg border border-[#C8A400]">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Luzie Drift SSS is embedded in the heart of the Elundini Local Municipality, a Category B municipality in the Joe Gqabi District. The broader Mt Fletcher area is situated at the foothills of the Drakensberg Mountains — one of the most scenic regions in the Eastern Cape, characterised by fertile soils, high rainfall, and breathtaking natural landscapes.
              </p>
              <p>
                The community is predominantly rural, with the main languages spoken being Xhosa and Sotho. Local livelihoods are sustained through agriculture, social services, and small-scale trade. Luzie Drift SSS plays a critical role in shaping the future of young people in a region where access to quality education directly impacts community development and economic prospects.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
