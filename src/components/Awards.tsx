import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Trophy, Calendar, ExternalLink, Award, Medal, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const awards = [
    {
      title: 'RIDERS Robotics Competition - World Cup Top 5',
      organization: 'European Robotics Week - RIDERS European Robotics League',
      year: '2024',
      description:
        'Our team achieved remarkable success by securing a position within the top five teams in the World Cup. Excelled in building and programming autonomous robots to complete various tasks through dedicated teamwork and strategic planning.',
      link: 'https://drive.google.com/file/d/15PynnRg9OJr-CU0taWnBJYPOwmoTB1cu/view?usp=sharing',
      level: 'International',
      color: 'from-yellow-500 to-orange-500',
      icon: Trophy,
    },
    {
      title: 'Second Position in Asia - RIDERS Robotic & Coding Competition',
      organization: 'RIDERS European Robotics League',
      year: '2023',
      date: 'March 22, 2023',
      description:
        'Participated with two team members and secured second place in the Asian region, earning a spot in the World Cup competition.',
      link: 'https://www.facebook.com/photo.php?fbid=543208694483408&set=pb.100063828471445.-2207520000&type=3',
      level: 'Continental',
      color: 'from-blue-500 to-purple-500',
      icon: Medal,
    },
    {
      title: 'Good Model Ideas - Turkish Maarif Journal',
      organization: 'Turkish Maarif Foundation',
      year: '2022',
      description:
        'Published project on Intelligent Drip Irrigation System, combining cutting-edge technology with drip irrigation techniques to optimize water usage and prevent waste of natural resources. Featured for innovation in educational technology and environmental sustainability.',
      link: 'https://ahmadshahr.files.wordpress.com/2023/11/afganistan-akilli-sulama-sistemi.pdf',
      level: 'National',
      color: 'from-green-500 to-emerald-500',
      icon: Award,
    },
    {
      title: 'Rookie Game Changer Award - First Robotic Competition',
      organization: 'First Robotic Competition',
      year: '2020',
      description:
        'Awarded for outstanding performance in the Basketball Robot Player Project, which aimed to introduce Afghan high school students to cutting-edge robotic technologies and competitive robotics.',
      link: 'https://www.facebook.com/alkhwarizmirobotics8572/videos/762801254601932/',
      level: 'National',
      color: 'from-pink-500 to-rose-500',
      icon: Star,
    },
  ];

  return (
    <section id="awards" className="py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full filter blur-3xl"></div>
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
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent inline-block">
              Awards & Achievements
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Gradient top border */}
                  <div className={`h-2 bg-gradient-to-r ${award.color}`}></div>
                  
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-br ${award.color} shadow-lg`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <award.icon className="w-7 h-7 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all">
                              {award.title}
                            </CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-base text-gray-700 dark:text-gray-300 mb-2">
                          {award.organization}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-3">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar size={18} />
                          <span className="text-sm">{award.date || award.year}</span>
                        </div>
                        <Badge className={`bg-gradient-to-r ${award.color} text-white border-0 shadow-md`}>
                          {award.level}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                    >
                      {award.description}
                    </motion.p>
                    {award.link && (
                      <motion.a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${award.color} bg-clip-text hover:underline group/link`}
                        whileHover={{ x: 5 }}
                      >
                        View Details 
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink size={16} />
                        </motion.div>
                      </motion.a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '4', label: 'Awards Won', color: 'from-yellow-500 to-orange-500' },
              { number: '2', label: 'International', color: 'from-blue-500 to-purple-500' },
              { number: '2', label: 'National', color: 'from-green-500 to-emerald-500' },
              { number: '1', label: 'Publications', color: 'from-pink-500 to-rose-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl p-6 text-center shadow-xl"
              >
                <div className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}