"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Clock, Users, BookOpen, Target, Menu, X, Sparkles, GraduationCap, Coffee, Mail, Phone, CheckCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  const stats = [
    { value: "4.5 hours", label: "Average daily social media use", icon: Clock },
    { value: "2.5 billion", label: "People addicted to social media", icon: Users },
    { value: "35%", label: "Of waking hours on screens", icon: Brain },
    { value: "6 years", label: "Average person spends on social media in lifetime", icon: Heart },
  ];

  const quotes = [
    {
      text: "You could leave life right now. Let that determine what you do and say and think.",
      author: "Marcus Aurelius",
      title: "Meditations"
    },
    {
      text: "We're not talking about the time we spend on social media. We're talking about the life we're not living.",
      author: "Dino Ambrosi",
      title: "TEDx Talk"
    },
    {
      text: "The cost of a thing is the amount of life which is required to be exchanged for it.",
      author: "Henry David Thoreau",
      title: "Walden"
    },
    {
      text: "You don't need social media to live a meaningful life. In fact, quitting might be the key to unlocking one.",
      author: "Cal Newport",
      title: "TEDxTysons"
    },
    {
      text: "Clarity about what matters provides clarity about what does not.",
      author: "Cal Newport",
      title: "Digital Minimalism"
    },
  ];

  const effects = [
    {
      title: "Mental Health Impact",
      description: "Studies show increased anxiety, depression, and loneliness correlated with heavy social media use.",
      icon: Brain
    },
    {
      title: "Relationship Decline",
      description: "Face-to-face interactions decrease while superficial online connections increase.",
      icon: Users
    },
    {
      title: "Time Displacement",
      description: "Hours that could be spent on meaningful activities, relationships, and personal growth.",
      icon: Clock
    },
    {
      title: "Purpose & Meaning",
      description: "Endless scrolling replaces pursuit of passions, goals, and life's deeper purpose.",
      icon: Target
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">∞</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Mindful Life
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('transformations')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Stories
              </button>
              <button
                onClick={() => router.push('/blog')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => router.push('/academy')}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                Academy
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Resources
              </button>
              <button
                onClick={() => router.push('/assess')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-900 bg-black"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('transformations')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
              >
                Stories
              </button>
              <button
                onClick={() => router.push('/blog')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => router.push('/academy')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Academy
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
              >
                Resources
              </button>
              <button
                onClick={() => router.push('/assess')}
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Floating Promo Card for Academy */}
      {showPromo && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-40 max-w-sm"
        >
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-500/50 rounded-2xl p-6 shadow-2xl">
            <button
              onClick={() => setShowPromo(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Ubuntu Wisdom Academy</h3>
                <p className="text-sm text-blue-200">Transform Your Life in 30 Days</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-200 mb-4">
              Master Stoicism, Ubuntu & Buddhist wisdom. Break digital addiction. Find your purpose. Join 500+ students.
            </p>
            
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-blue-200">
                <CheckCircle className="w-4 h-4" />
                <span>6 self-paced courses</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <CheckCircle className="w-4 h-4" />
                <span>Weekly live coaching</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <CheckCircle className="w-4 h-4" />
                <span>Private community</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold">
                $10<span className="text-sm text-gray-300">/mo</span>
              </div>
              <button
                onClick={() => router.push('/academy')}
                className="flex-1 px-4 py-3 bg-white text-blue-900 hover:bg-gray-100 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Fixed Support Button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="flex flex-col gap-3">
          <a
            href="https://buymeacoffee.com/nichodemus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-medium shadow-lg transition-all group"
          >
            <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Buy me a coffee</span>
          </a>
          
          <a
            href="mailto:nichodemuswerre@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white rounded-full shadow-lg transition-all group"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual Only */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Social Media Trap Illustration */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central figure - person trapped in phone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Phone frame */}
                    <div className="w-48 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl relative overflow-hidden">
                      {/* Screen glow */}
                      <div className="absolute inset-2 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse" />
                      
                      {/* Social media icons floating */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4">
                        <div className="grid grid-cols-3 gap-3">
                          {['📱', '📷', '🎬', '💬', '❤️', '👍', '🔔', '📧', '🎮'].map((emoji, i) => (
                            <motion.div
                              key={i}
                              animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ 
                                duration: 3,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                              className="text-3xl opacity-70"
                            >
                              {emoji}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Breaking free effect - chains */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -left-12 top-1/2 text-4xl"
                    >
                      ⛓️💥
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute -right-12 top-1/2 text-4xl"
                    >
                      💥⛓️
                    </motion.div>
                  </div>
                </div>
                
                {/* Orbiting social media logos */}
                <div className="absolute inset-0">
                  {['FB', 'IG', 'TW', 'TT', 'YT', 'SC'].map((platform, i) => (
                    <motion.div
                      key={platform}
                      animate={{
                        rotate: 360
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 2
                      }}
                      className="absolute w-full h-full"
                      style={{
                        transformOrigin: 'center center'
                      }}
                    >
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
                        style={{
                          transform: `rotate(-${i * 60}deg)`
                        }}
                      >
                        {platform}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Clean Tagline & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left flex flex-col justify-center h-full space-y-8"
            >
              {/* Main Headline - Bigger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-none">
                  Reclaim Your Life
                </h1>
              </motion.div>
              
              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-tight whitespace-nowrap">
                  Break free from digital addiction with ancient wisdom
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  Combining <span className="text-cyan-400 font-medium">Stoic philosophy</span>, <span className="text-purple-400 font-medium">Japanese Zen mindfulness</span>, and <span className="text-blue-400 font-medium">modern behavioral science</span> to help you reclaim your time and rebuild your life with purpose.
                </p>
              </motion.div>
              
              {/* Trust Indicators with better styling */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap items-center gap-6"
              >
                {[
                  { icon: "🔬", text: "Science-backed" },
                  { icon: "🏛️", text: "Ancient wisdom" },
                  { icon: "🎁", text: "Free forever" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4"
              >
                {/* Primary CTA with pulse effect */}
                <motion.button
                  onClick={() => router.push("/assess")}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-500/20"
                >
                  Calculate Your Time
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                {/* Secondary CTA */}
                <button
                  onClick={() => router.push('/blog')}
                  className="px-10 py-4 bg-transparent hover:bg-gray-900/50 border-2 border-gray-700 hover:border-gray-600 rounded-xl text-lg font-medium transition-all"
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Powerful Question Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <p className="text-cyan-400 font-medium mb-4 text-sm uppercase tracking-wider">
              A Question That Will Change Your Life
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              &ldquo;How many <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">years</span> of your life will you give to social media?&rdquo;
            </h2>
            <p className="text-gray-500 mb-2">
              — Dino Ambrosi, TEDx Talk: "The Battle for Your Time"
            </p>
            <p className="text-gray-400 text-lg mt-6">
              The answer might shock you. Let's look at the data...
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            The Digital Addiction Crisis
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Effects Section */}
      <section id="impact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            How Screens Are Stealing Your Life
          </motion.h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Based on research from psychologists, neuroscientists, and behavioral scientists
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {effects.map((effect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-gray-800 rounded-lg p-8"
              >
                <effect.icon className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{effect.title}</h3>
                <p className="text-gray-400">{effect.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Examples Section */}
      <section id="transformations" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Transformations Are Possible
            </h2>
            <p className="text-xl text-gray-400">
              See what happens when you reclaim just 2 hours per day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-6"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">The Reader</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Sarah, 28</strong> - Reduced screen time from 5h to 2h daily
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Read 40 books in first year</li>
                <li>✓ Started book club with friends</li>
                <li>✓ Learned new perspectives</li>
                <li>✓ Feels more informed and cultured</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-800/50 rounded-lg p-6"
            >
              <div className="text-6xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3">The Athlete</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">James, 35</strong> - Cut social media completely
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Lost 30 pounds in 6 months</li>
                <li>✓ Ran first marathon</li>
                <li>✓ Joined gym community</li>
                <li>✓ Best shape of his life</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/50 rounded-lg p-6"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">The Entrepreneur</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Maria, 32</strong> - Deleted Instagram &amp; TikTok
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Launched side business</li>
                <li>✓ Now earns $3k/month extra</li>
                <li>✓ Learned web development</li>
                <li>✓ Planning to quit day job</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-300 mb-6">
              These aren&apos;t special people. They&apos;re ordinary people who made <span className="text-cyan-400 font-bold">one decision</span>.
            </p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              What will YOUR transformation be?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Wisdom for the Digital Age
          </motion.h2>

          <div className="space-y-12">
            {quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-l-4 border-cyan-500 pl-6 py-4"
              >
                <p className="text-2xl italic text-gray-300 mb-4">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <footer className="text-gray-500">
                  — <cite className="text-cyan-400">{quote.author}</cite>, {quote.title}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* What You Could Achieve Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Imagine What You Could Achieve
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Every hour on screens is an hour not spent building the life you want
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-800 rounded-lg p-6 text-center"
            >
              <BookOpen className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">20-30 Books/Year</h3>
              <p className="text-gray-400 text-sm">With just 20 minutes daily</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800 rounded-lg p-6 text-center"
            >
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Learn a Language</h3>
              <p className="text-gray-400 text-sm">Fluency in 1-2 years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-800 rounded-lg p-6 text-center"
            >
              <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Master a Skill</h3>
              <p className="text-gray-400 text-sm">10,000 hours to expertise</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-800 rounded-lg p-6 text-center"
            >
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Deepen Relationships</h3>
              <p className="text-gray-400 text-sm">Quality time with loved ones</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl text-gray-300 mb-8">
              Want to see <span className="text-cyan-400 font-bold">exactly</span> what you could achieve with YOUR screen time?
            </p>
            <button
              onClick={() => router.push("/assess")}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg text-lg font-medium transition-all inline-flex items-center gap-2"
            >
              Calculate Your Potential
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Free assessment • Takes 2 minutes • Life-changing insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="resources" className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Stoic School for Digital Wellness
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              This isn't just about reducing screen time. It's about rebuilding your life with purpose, wisdom, and intentionality.
            </p>
            <button
              onClick={() => router.push("/assess")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-medium transition-all inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
