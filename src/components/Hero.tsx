import { Github, Linkedin, Mail, Instagram, Phone, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:ahmadshahrh@gmail.com', label: 'Email', color: 'from-red-500 to-orange-500' },
    { icon: Instagram, href: 'https://www.instagram.com/iam_ahmad_rh/', label: 'Instagram', color: 'from-purple-500 to-pink-500' },
    { icon: Github, href: 'https://ahmadshahr.wordpress.com', label: 'Website', color: 'from-gray-700 to-gray-900' },
    { icon: Phone, href: 'tel:+79802076668', label: 'Phone', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 dark:bg-gray-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg dark:opacity-50"></div>
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 dark:opacity-40"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-blue-500 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 dark:opacity-40"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 dark:opacity-40"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glass card container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-2xl bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/30 rounded-3xl p-12 shadow-2xl"
          >
            {/* Welcome badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg">
                <span className="animate-pulse mr-2">●</span>
                Available for opportunities
              </span>
            </motion.div>
            
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl text-center mb-6 text-white drop-shadow-lg"
            >
              Ahmad Shah
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Rahmani
              </span>
            </motion.h1>
            
            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-center text-white/90 mb-4"
            >
              Business Informatics & Robotics Engineer
            </motion.p>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-center text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Master's student in Business Informatics & Business Analytics | Former Finance Assistant & Robotics Instructor | 
              Passionate about AI, Data Science, and Educational Technology
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-xl px-8 py-6 text-lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => {
                    const element = document.querySelector('#projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30 px-8 py-6 text-lg"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all shadow-lg`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-white/80" />
      </motion.div>
    </section>
  );
}