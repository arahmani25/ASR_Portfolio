import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      title: 'Finance Assistant',
      company: 'Afghan-Turk Maarif Schools Mazar-e-Sharif Boys High School',
      location: 'Mazar-e-Sharif, Afghanistan',
      period: 'January 2020 - September 2023',
      type: 'Part Time',
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Maintained financial records, processed invoices/payments, and assisted in budgeting and forecasting',
        'Conducted financial analysis and generated reports',
        'Supported budgeting processes and maintained compliance with accounting standards',
        'Responded to inquiries and participated in developing financial policies',
      ],
    },
    {
      title: 'Robotic Instructor',
      company: 'Afghan-Turk Maarif Schools Mazar-e-Sharif Boys High School',
      location: 'Mazar-e-Sharif, Afghanistan',
      period: 'January 2020 - September 2023',
      type: 'Part Time',
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Designed and delivered educational programs on robotics',
        'Developed curriculum and teaching materials',
        'Conducted classes, workshops, and provided mentoring',
        'Supervised group projects and collaborated with educators and industry experts',
        'Maintained student performance records and provided feedback',
      ],
    },
    {
      title: 'Customer Support',
      company: 'Afghan-Turk Maarif Schools Mazar-e-Sharif Boys High School',
      location: 'Mazar-e-Sharif, Afghanistan',
      period: 'January 2019 - December 2019',
      type: 'Full Time',
      color: 'from-green-500 to-emerald-500',
      responsibilities: [
        'Responded to customer inquiries and resolved complaints',
        'Provided information about services and maintained customer interaction records',
        'Collaborated with departments to resolve issues and implemented process improvements',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full filter blur-3xl"></div>
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
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Work Experience
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden md:block"
            ></motion.div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className={`absolute hidden md:block w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    } top-8`}
                  >
                    <div className="absolute inset-1 rounded-full bg-white"></div>
                  </motion.div>

                  <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    {/* Gradient accent bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${exp.color}`}></div>
                    
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300 mb-2">
                            <Briefcase size={18} className="mt-1 flex-shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Calendar size={18} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0`}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                            className="flex gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}