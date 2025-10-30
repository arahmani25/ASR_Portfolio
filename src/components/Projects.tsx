import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: 'AI Call Agent',
      period: 'February 2025 - June 2025',
      description:
        'An AI-powered virtual voice assistant capable of autonomously performing appointment scheduling tasks. The system uses Vapi.ai for voice, n8n.io for backend automation, and Google Gemini Chat Model for extraction and response formulation.',
      features: [
        'Real-time speech recognition and natural conversation',
        'Automated appointment booking via Google Calendar API',
        'Webhook integration for real-time updates',
        'Conversational AI that mimics human support assistant',
      ],
      technologies: ['Vapi.ai', 'n8n.io', 'Google Gemini', 'Google Calendar API', 'Webhooks'],
      link: 'https://drive.google.com/file/d/1kX4c4e8r8Xg9o8J5o8qBAWUn1cACaIRZ/view?usp=sharing',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Learning Content Management System (LCMS)',
      period: 'August 2022 - December 2022',
      description:
        'A comprehensive system for managing educational content, designed to streamline the creation, organization, and delivery of learning materials. Built as a university thesis project.',
      features: [
        'User-friendly interface for content creation and management',
        'Database-driven architecture for efficient data storage',
        'Responsive design for cross-device compatibility',
        'Complete educational content lifecycle management',
      ],
      technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      link: 'https://ahmadshahr.wordpress.com/wp-content/uploads/2024/05/lcms-system.pdf',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Intelligent Drip Irrigation System',
      period: 'January 2022 - August 2022',
      description:
        'An IoT-based smart irrigation system that optimizes water usage using soil moisture sensors and pH monitoring. Features remote control capabilities and won recognition in Turkish Maarif Journal 2022.',
      features: [
        'Soil moisture and pH monitoring sensors',
        'Automated irrigation based on plant needs',
        'Web server for remote access and control',
        'Water conservation and resource optimization',
        'Both automatic and manual operation modes',
      ],
      technologies: ['IoT', 'Sensors', 'Web Server', 'Python', 'Arduino'],
      link: 'https://ahmadshahr.wordpress.com/wp-content/uploads/2023/11/intelligent-drip-irrigation-system.pdf',
      award: 'Featured in Turkish Maarif Journal 2022',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-300 dark:bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full filter blur-3xl"></div>
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
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Featured Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient top border */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2">
                      <div className="flex items-start gap-3 flex-1">
                        <motion.div
                          className={`mt-1 p-2 rounded-lg bg-gradient-to-br ${project.color}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Sparkles className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-3xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                            {project.title}
                          </CardTitle>
                          {project.award && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : {}}
                              transition={{ delay: 0.6 + index * 0.2 }}
                            >
                              <Badge className="mt-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                                🏆 {project.award}
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={18} />
                        <span className="text-sm">{project.period}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="mb-3 text-gray-900 dark:text-white">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + index * 0.2 + idx * 0.1 }}
                            className="flex gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}></span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="mb-3 text-gray-900 dark:text-white">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.9 + index * 0.2 + idx * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge className="backdrop-blur-md bg-white/60 dark:bg-gray-700/60 border border-white/80 dark:border-gray-600/80 text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-gray-700/80">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => window.open(project.link, '_blank')}
                        className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg`}
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </motion.div>
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