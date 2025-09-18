import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                <span className="text-white font-bold text-xl">₹</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WealthWave
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Take control of your finances with our modern expense tracking platform. 
              Manage your money smartly and build wealth over time.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="mailto:contact@wealthwave.com" icon={<Mail size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/dashboard" text="Dashboard" />
              <FooterLink href="/login" text="Login" />
              <FooterLink href="/register" text="Sign Up" />
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
            <div className="space-y-3">
              <FooterLink href="#" text="Help Center" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Service" />
              <FooterLink href="#" text="Contact Us" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 WealthWave. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <span>by Aryan Gupta</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 rounded-lg transition-all duration-200"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ href, text }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
  >
    {text}
  </a>
);

export default Footer;
