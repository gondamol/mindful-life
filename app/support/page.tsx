"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Coffee, Heart, CreditCard, DollarSign, Globe } from "lucide-react";

export default function SupportPage() {
  const router = useRouter();

  const paymentMethods = [
    {
      name: "M-Pesa (Kenya)",
      icon: "📱",
      description: "Send to: +254 725 737 867",
      details: "Paybill: Coming soon | Till: Coming soon",
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "PayPal",
      icon: "💳",
      description: "International payments",
      link: "https://paypal.me/nichodemuswerre",
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Buy Me a Coffee",
      icon: "☕",
      description: "One-time or monthly support",
      link: "https://buymeacoffee.com/nichodemus",
      color: "from-yellow-600 to-orange-600"
    },
    {
      name: "Bank Transfer",
      icon: "🏦",
      description: "Kenya Commercial Bank (KCB)",
      details: "Account details: Contact nichodemuswerre@gmail.com",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Western Union",
      icon: "🌍",
      description: "International wire transfer",
      details: "Name: Nicodemus Werre | Location: Kenya",
      color: "from-red-600 to-rose-600"
    }
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
                Mindful Life
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

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Support This Project
            </h1>
            
            <p className="text-xl text-gray-300 mb-4">
              Help keep Mindful Life free and accessible to everyone
            </p>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your support helps cover hosting costs, development time, and keeps this platform free for those who need it most. Every contribution, no matter how small, makes a difference.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Lives Touched</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Free & Open</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Always Available</div>
            </motion.div>
          </div>

          {/* Payment Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Payment Method</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center text-3xl flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{method.name}</h3>
                      <p className="text-sm text-gray-400 mb-3">{method.description}</p>
                      {method.details && (
                        <p className="text-xs text-gray-500">{method.details}</p>
                      )}
                    </div>
                  </div>
                  
                  {method.link && (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-6 py-3 bg-gradient-to-r ${method.color} hover:opacity-90 rounded-lg font-bold text-center block transition-all`}
                    >
                      Pay with {method.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-8 text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Thank You for Your Support!</h3>
            <p className="text-gray-300 mb-6">
              Every contribution helps us continue building tools that transform lives and promote digital wellness.
            </p>
            
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Questions? Reach out:</p>
              <a
                href="mailto:nichodemuswerre@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                📧 nichodemuswerre@gmail.com
              </a>
              <br />
              <a
                href="tel:+254725737867"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                📱 +254 725 737 867
              </a>
            </div>
          </div>

          {/* What Your Support Covers */}
          <div className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">What Your Support Covers</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Hosting & domain costs",
                "Development & maintenance",
                "New features & courses",
                "Free access for everyone",
                "Community support",
                "Content creation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
