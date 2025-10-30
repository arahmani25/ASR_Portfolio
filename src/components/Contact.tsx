import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Globe, Instagram, MessageCircle, Heart, Gamepad2, Plane, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'ahmadshahrh@gmail.com',
      link: 'mailto:ahmadshahrh@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+7 9802076668',
      link: 'tel:+79802076668',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      value: '+7 9802076668',
      link: 'https://wa.me/79802076668',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Moscow, Russia',
      link: null,
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Website',
      value: 'ahmadshahr.wordpress.com',
      link: 'https://ahmadshahr.wordpress.com',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@iam_ahmad_rh',
      link: 'https://www.instagram.com/iam_ahmad_rh/',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const hobbies = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Technology & AI',
      description: 'Passionate about AI and modern technologies, constantly researching and exploring new innovations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Reading & Writing',
      description: 'Avid reader of technology blogs and finance journals, enjoys writing articles and sharing knowledge',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Travel & Culture',
      description: 'Loves traveling and exploring new cultures, enhancing understanding of global perspectives',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: 'Sports',
      description: 'Active in volleyball, football, soccer, badminton, hiking, and cycling',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300 dark:bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full filter blur-3xl"></div>
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
              Get In Touch
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="h-full backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-900 dark:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:bg-clip-text transition-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="h-full backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border-2 border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Hobbies & Interests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-br ${hobby.color} text-white`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {hobby.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                            {hobby.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{hobby.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-600 to-purple-600 border-2 border-white/40 rounded-2xl shadow-2xl overflow-hidden">
              <CardContent className="p-10 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="mb-4"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full">
                    <Mail className="w-10 h-10" />
                  </div>
                </motion.div>
                <h3 className="text-3xl mb-4">Let's Connect!</h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  I'm always open to discussing new projects, opportunities, or collaborations.
                  Feel free to reach out through any of the channels above.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="mailto:ahmadshahrh@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Send Email
                  </motion.a>
                  <motion.a
                    href="https://wa.me/79802076668"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors border-2 border-white/40 shadow-lg"
                  >
                    WhatsApp Me
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}