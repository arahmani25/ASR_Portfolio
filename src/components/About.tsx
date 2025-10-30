import { Card, CardContent } from './ui/card';
import { BookOpen, Code, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Robotics & Programming',
      description: 'Expert in robotics projects with participation in international competitions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Business Analytics',
      description: 'Pursuing dual Master\'s degrees in Business Informatics and Big Data Analytics',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multilingual',
      description: 'Fluent in 7 languages including English, Turkish, Persian, and Russian',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'Passionate about staying updated with latest tech trends and innovations',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full filter blur-3xl"></div>
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
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Bio text in glass card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12 backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 border border-white/60 dark:border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
              My name is Ahmad Shah Rahmani, a dedicated and versatile professional with over four years of experience in finance, 
              robotics engineering, customer support, and education. I hold a Bachelor's degree in Information and Communication 
              Technologies from Avicenna University, where I combined strong analytical skills with technical proficiency in various 
              programming languages and financial software.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
              Currently, I am pursuing a Master's degree in Business Informatics, specializing in Digital Enterprise Information 
              Management Systems, at the National Research University Higher School of Economics in Moscow, and simultaneously 
              pursuing another Master's degree in Business Analytics and Big Data at Ibn Haldun University in Istanbul.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Fluent in multiple languages, I excel in multicultural environments and bring a wealth of knowledge and a passion 
              for continuous learning and innovation. I value teamwork, problem-solving, and delivering effective solutions with 
              a strategic mindset.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="h-full backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
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