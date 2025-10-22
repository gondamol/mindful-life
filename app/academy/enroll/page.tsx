"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  CheckCircle, Shield, CreditCard, Mail, Phone, 
  ArrowRight, AlertCircle, Sparkles, Heart
} from "lucide-react";

export default function EnrollPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | null>(null);

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with actual payment processor
    alert("Enrollment feature coming soon! For early access, contact: nichodemuswerre@gmail.com or +254725737867");
  };

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
              onClick={() => router.push('/academy')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Academy
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Enrollment Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Join Ubuntu Wisdom Academy
                  </span>
                </h1>
                <p className="text-xl text-gray-400">
                  Start your transformation journey today
                </p>
              </div>

              {/* Early Access Notice */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Early Access Launch</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      We're launching soon! Get on the waitlist and be the first to access our courses.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>First 100 students get 50% off for life</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Early access to all new courses</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Exclusive founding member perks</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleEnroll} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+254 XXX XXX XXX"
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Preferred Payment Method</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('mpesa')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === 'mpesa'
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="text-2xl mb-2">📱</div>
                      <div className="font-medium">M-Pesa</div>
                      <div className="text-xs text-gray-400">Pay with mobile money</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="text-2xl mb-2">💳</div>
                      <div className="font-medium">Card</div>
                      <div className="text-xs text-gray-400">Visa, Mastercard</div>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>Secure enrollment • 30-day money-back guarantee</span>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-8 p-6 bg-gray-900 border border-gray-800 rounded-xl">
                <h3 className="font-bold mb-4">Have Questions?</h3>
                <div className="space-y-3 text-sm">
                  <a
                    href="mailto:nichodemuswerre@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    nichodemuswerre@gmail.com
                  </a>
                  <a
                    href="tel:+254725737867"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +254 725 737 867
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Pricing & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="sticky top-24">
                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/50 rounded-2xl p-8 mb-6">
                  <div className="text-center mb-8">
                    <div className="text-sm text-blue-400 font-medium mb-2">Monthly Subscription</div>
                    <div className="text-6xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                        $10
                      </span>
                    </div>
                    <div className="text-gray-400">per month • cancel anytime</div>
                    <div className="mt-4 inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400">
                      <span className="line-through text-gray-500 mr-2">$20</span>
                      50% OFF for founding members
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">What's Included:</h4>
                    {[
                      "6 comprehensive self-paced courses",
                      "Weekly live coaching sessions",
                      "Private community access",
                      "Downloadable resources & workbooks",
                      "Certificate of completion",
                      "Lifetime access to all content",
                      "New courses added monthly",
                      "1-on-1 mentorship opportunities"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">30-Day Money-Back Guarantee</h4>
                      <p className="text-sm text-gray-400">
                        Not satisfied? Get a full refund within 30 days, no questions asked. We're confident you'll love the transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
