"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  BookOpen, Users, Video, Award, Clock, CheckCircle, 
  Star, ArrowRight, Play, Calendar, MessageCircle,
  Sparkles, Target, Brain, Heart, TrendingUp
} from "lucide-react";

export default function AcademyPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'courses' | 'live' | 'community'>('courses');

  const courses = [
    {
      id: 1,
      title: "Digital Stoicism: Ancient Wisdom for Modern Distraction",
      description: "Learn how Marcus Aurelius would handle smartphones, social media, and the attention economy.",
      modules: 8,
      duration: "4 weeks",
      level: "Beginner",
      emoji: "🏛️",
      skills: ["Stoic philosophy", "Digital minimalism", "Self-discipline"]
    },
    {
      id: 2,
      title: "Ubuntu: We Are Because We Are",
      description: "Explore African philosophy and how community-centered living creates digital wellness.",
      modules: 6,
      duration: "3 weeks",
      level: "Beginner",
      emoji: "🌍",
      skills: ["Ubuntu philosophy", "Community building", "Purposeful living"]
    },
    {
      id: 3,
      title: "Buddhist Mindfulness for the Digital Age",
      description: "Apply 2,500-year-old mindfulness practices to break phone addiction and find peace.",
      modules: 10,
      duration: "5 weeks",
      level: "Intermediate",
      emoji: "🧘",
      skills: ["Mindfulness meditation", "Presence", "Emotional regulation"]
    },
    {
      id: 4,
      title: "Deep Work Mastery: Cal Newport Method",
      description: "Transform your productivity with focused work practices that create exceptional results.",
      modules: 7,
      duration: "4 weeks",
      level: "Intermediate",
      emoji: "⚡",
      skills: ["Deep work", "Focus training", "Productivity systems"]
    },
    {
      id: 5,
      title: "The Purpose-Driven Life: Finding Your 'Why'",
      description: "Discover your life purpose using frameworks from Viktor Frankl, Simon Sinek, and ancient wisdom.",
      modules: 6,
      duration: "3 weeks",
      level: "All levels",
      emoji: "🎯",
      skills: ["Purpose discovery", "Goal setting", "Meaningful living"]
    },
    {
      id: 6,
      title: "Habit Architecture: Build a Life You Don't Need to Escape",
      description: "Design bulletproof habits using behavioral psychology and philosophical principles.",
      modules: 9,
      duration: "6 weeks",
      level: "Advanced",
      emoji: "🏗️",
      skills: ["Habit formation", "Behavior design", "Systems thinking"]
    }
  ];

  const liveCoaching = [
    {
      title: "Weekly Live Sessions",
      description: "Join group coaching calls every week with philosophy practitioners",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "1-on-1 Mentorship",
      description: "Book private sessions with certified coaches for personalized guidance",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Community Circles",
      description: "Connect with fellow learners in small accountability groups",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    "Lifetime access to all courses and future updates",
    "Weekly live coaching sessions with experts",
    "Private community forum with like-minded individuals",
    "Downloadable guides, workbooks, and templates",
    "Certificate of completion for each course",
    "Monthly challenges and accountability check-ins",
    "Access to exclusive resource library (books, articles, tools)",
    "Priority support and personalized feedback"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push('/')}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">∞</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Ubuntu Wisdom Academy
              </span>
            </motion.div>
            <button
              onClick={() => router.push('/')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Transform Your Life in 30 Days</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Ubuntu Wisdom Academy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Where Ancient Philosophy Meets Modern Life
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Master Stoicism, Ubuntu, and Buddhist wisdom to break digital addiction, find purpose, and build a life you don't need to escape from.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/academy/courses/digital-stoicism')}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all"
              >
                <Play className="w-5 h-5" />
                Try Free Course
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/academy/enroll')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all"
              >
                Enroll Now - $10/month
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <button
                onClick={() => {
                  document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg font-semibold text-lg transition-all"
              >
                Explore All Courses
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-400">500+ Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">6 Self-Paced Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">Live Coaching Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You'll Master
            </h2>
            <p className="text-xl text-gray-400">
              A comprehensive curriculum blending three powerful philosophies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Stoic Resilience",
                description: "Control your mind, emotions, and reactions. Build unshakeable inner peace regardless of external chaos.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Ubuntu Connection",
                description: "Discover that 'I am because we are.' Build meaningful relationships and community-centered living.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Buddhist Mindfulness",
                description: "Live in the present moment. Break free from suffering caused by attachment and craving.",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Self-Paced Courses
            </h2>
            <p className="text-xl text-gray-400">
              Learn at your own pace. Lifetime access. New courses added monthly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (course.id === 1) {
                    router.push('/academy/courses/digital-stoicism');
                  }
                }}
                className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group relative ${
                  course.id === 1 ? 'cursor-pointer' : ''
                }`}
              >
                {course.id === 1 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold text-white flex items-center gap-1 animate-pulse">
                    <Star className="w-3 h-3 fill-white" />
                    FREE PREVIEW
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{course.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                    {course.modules} modules
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400">
                    {course.level}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.map((skill, i) => (
                    <span key={i} className="text-xs text-gray-500">
                      • {skill}
                    </span>
                  ))}
                </div>
                
                {course.id === 1 && (
                  <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium flex items-center justify-center gap-2 transition-all">
                    <Play className="w-4 h-4" />
                    Start Free Course
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Coaching */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900/10 to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Live Coaching & Community
            </h2>
            <p className="text-xl text-gray-400">
              You're not alone on this journey. Connect with coaches and fellow learners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {liveCoaching.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Get
            </h2>
            <p className="text-xl text-gray-400">
              For just $10/month, unlock your full potential
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ students already mastering ancient wisdom for modern living
            </p>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
              <div className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  $10
                </span>
                <span className="text-2xl text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Cancel anytime. No commitments.</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/academy/enroll')}
                className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mx-auto transition-all"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <p className="text-sm text-gray-500">
              30-day money-back guarantee. Risk-free enrollment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
