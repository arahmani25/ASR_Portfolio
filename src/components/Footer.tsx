import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://ahmadshahr.wordpress.com', label: 'Website' },
    { icon: Instagram, href: 'https://www.instagram.com/iam_ahmad_rh/', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 text-white py-12 overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 dark:bg-purple-800 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 dark:bg-blue-800 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-white/20 dark:border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Ahmad Shah Rahmani
              </h3>
              <p className="text-gray-300 dark:text-gray-400">Business Informatics & Robotics Engineer</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-gray-400 dark:text-gray-500 mb-2">
              © {currentYear} Ahmad Shah Rahmani. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-600 text-sm flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 inline animate-pulse" /> using React, Tailwind CSS & Motion
            </p>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-8 bottom-8 p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}