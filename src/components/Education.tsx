import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const education = [
    {
      degree: "Master's Degree in Business Analytics and Big Data",
      institution: 'Ibn Haldun University',
      location: 'Istanbul, Türkiye',
      period: 'September 2025 - Current',
      status: 'In Progress',
      website: 'https://apply.ihu.edu.tr/tr/buyuk-veri-ve-is-analitigi-yuksek-lisans-turkce',
      color: 'from-orange-500 to-red-500',
    },
    {
      degree: "Master's Degree in Business Informatics - Business Analytics Big Data Systems",
      institution: 'National Research University Higher School of Economics',
      location: 'Moscow, Russia',
      period: 'September 2023 - Current',
      status: 'In Progress',
      website: 'https://www.hse.ru/en/',
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Preparatory Year in the Russian Language',
      institution: 'National Research University Higher School of Economics',
      location: 'Moscow, Russia',
      period: 'October 2023 - August 2024',
      status: 'Completed',
      website: 'https://preparatory.hse.ru/en/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Bachelor of Information and Communication Technologies (ICTs)',
      institution: 'Avicenna University',
      location: 'Mazar-E Sharif, Afghanistan',
      period: 'March 2017 - December 2021',
      status: 'Completed',
      grade: 'GPA: 4.0 (90.49) A+',
      thesis: 'Learning Content Management System using Python, Django, HTML, JavaScript, CSS',
      website: 'www.ibnesina.af',
      color: 'from-green-500 to-emerald-500',
      highlights: [
        'Proficient in Microsoft Office Suite (Excel, Word, PowerPoint)',
        'Programming languages: Python, HTML, CSS, JavaScript',
        'Database management with SQL',
        'QuickBooks and financial management',
        'Graphic design and social media marketing',
      ],
    },
    {
      degree: 'High School Degree',
      institution: 'Mawlana Aznab High School',
      location: 'Sheberghan, Afghanistan',
      period: 'March 2014 - March 2016',
      status: 'Completed',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Education
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Gradient top border */}
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                  
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 mb-2">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <GraduationCap size={20} className="mt-1 flex-shrink-0" />
                          </motion.div>
                          <span>{edu.institution}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.location}</p>
                        {edu.website && (
                          <motion.a
                            href={edu.website.startsWith('http') ? edu.website : `https://${edu.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${edu.color} bg-clip-text hover:underline`}
                            whileHover={{ x: 5 }}
                          >
                            Visit Website <ExternalLink size={14} />
                          </motion.a>
                        )}
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-3">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar size={18} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <Badge className={`${
                          edu.status === 'Completed'
                            ? `bg-gradient-to-r ${edu.color} text-white border-0`
                            : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0'
                        }`}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.grade && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.15 }}
                        className="text-gray-700 dark:text-gray-300 mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent inline-block"
                      >
                        <strong>Grade:</strong> {edu.grade}
                      </motion.p>
                    )}
                    {edu.thesis && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.15 }}
                        className="text-gray-700 dark:text-gray-300 mb-4"
                      >
                        <strong>Thesis:</strong> {edu.thesis}
                      </motion.p>
                    )}
                    {edu.highlights && (
                      <div>
                        <p className="text-gray-900 dark:text-white mb-3">Key Skills Acquired:</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.8 + index * 0.15 + idx * 0.05 }}
                              className="flex gap-2 items-start text-gray-700 dark:text-gray-300"
                            >
                              <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} flex-shrink-0`}></span>
                              <span className="text-sm">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}