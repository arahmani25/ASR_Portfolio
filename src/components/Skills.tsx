import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Globe, Wrench, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Turkmen', level: 'Native' },
        { name: 'Persian', level: 'C2' },
        { name: 'Turkish', level: 'C1' },
        { name: 'English', level: 'C1' },
        { name: 'Uzbek', level: 'C1' },
        { name: 'Tajik', level: 'C1' },
        { name: 'Urdu', level: 'B2' },
        { name: 'Russian', level: 'B1' },
      ],
    },
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Java' },
        { name: 'SQL/MySQL' },
        { name: 'Django' },
      ],
    },
    {
      title: 'Tools & Software',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Microsoft Office Suite' },
        { name: 'QuickBooks' },
        { name: 'Adobe Photoshop' },
        { name: 'Google Workspace' },
        { name: 'Zoom/Teams/Webex' },
        { name: 'Git' },
      ],
    },
    {
      title: 'Data & AI',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Data Science' },
        { name: 'Data Analysis' },
        { name: 'Data Visualization' },
        { name: 'AI in Business' },
        { name: 'Big Data Systems' },
        { name: 'Business Analytics' },
      ],
    },
  ];

  const professionalSkills = [
    { name: 'Teamwork & Collaboration', color: 'from-blue-500 to-cyan-500' },
    { name: 'Problem-Solving', color: 'from-purple-500 to-pink-500' },
    { name: 'Strategic Thinking', color: 'from-green-500 to-emerald-500' },
    { name: 'Financial Analysis', color: 'from-orange-500 to-red-500' },
    { name: 'Project Management', color: 'from-indigo-500 to-purple-500' },
    { name: 'Teaching & Mentoring', color: 'from-pink-500 to-rose-500' },
    { name: 'Customer Support', color: 'from-cyan-500 to-blue-500' },
    { name: 'Multicultural Communication', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl"></div>
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
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent inline-block">
              Skills & Expertise
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className={`h-1.5 bg-gradient-to-r ${category.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {category.icon}
                      </motion.div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 + idx * 0.03 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge className="backdrop-blur-md bg-white/60 dark:bg-gray-700/60 border border-white/80 dark:border-gray-600/80 text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-gray-600/80 text-sm py-1.5 px-3">
                            {skill.level ? `${skill.name} (${skill.level})` : skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="text-center text-3xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Professional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {professionalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-700/70 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/80 dark:border-gray-600/80 overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        <p className="text-gray-800 dark:text-gray-200 relative z-10">{skill.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}