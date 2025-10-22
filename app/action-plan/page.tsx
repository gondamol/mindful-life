"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Target, Bell, Smartphone } from "lucide-react";

export default function ActionPlanPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("lifeData");
    if (!data) {
      router.push("/");
    } else {
      // Calculate stats for email
      const parsed = JSON.parse(data);
      const age = parsed.age;
      const totalHours = parsed.dailyScreenHours + parsed.dailyScreenMinutes / 60;
      const lifeExpectancy = 65;
      const yearsLeft = lifeExpectancy - age;
      const totalMonths = yearsLeft * 12;
      const screenTimeMonths = Math.round((totalHours / 24) * totalMonths);
      const freeTimeMonths = Math.round(totalMonths * (2.5 / 24)); // Approx free time
      const screenTimePercentage = Math.round((screenTimeMonths / freeTimeMonths) * 100);
      const actualFreeTimeMonths = freeTimeMonths - screenTimeMonths;
      
      setStats({
        age,
        screenTimeMonths,
        screenTimePercentage,
        actualFreeTimeMonths
      });
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subscriptionType: 'action_plan',
          source: 'action-plan',
          metadata: stats
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to subscribe:', data.error);
        // Still show success to user even if subscription fails
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
      // Still show success to user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const strategies = [
    {
      icon: Target,
      title: "1. Set Non-Negotiable Rules",
      description: "No vague commitments. Set clear, specific rules you can actually follow.",
      examples: [
        "No phones in the bedroom, under any circumstances",
        "Make dinner screen-free, whether alone or with others",
        "Turn phone off after 8pm every day",
      ],
      color: "text-blue-500",
    },
    {
      icon: Smartphone,
      title: "2. Delete Most-Used Apps",
      description: "Remove addictive apps from your phone. You can still use them on laptop if needed.",
      examples: [
        "Check which apps you use most",
        "Delete them from your phone",
        "Make them laptop-only if you need them",
      ],
      color: "text-red-500",
    },
    {
      icon: Bell,
      title: "3. Turn Off Notifications",
      description: "Ask yourself: 'Would I want someone to knock on my door to tell me this?'",
      examples: [
        "If the answer is no, turn it off",
        "Keep only critical notifications (calls, emergencies)",
        "Check messages on your schedule, not theirs",
      ],
      color: "text-yellow-500",
    },
    {
      icon: Lightbulb,
      title: "4. Enable Grayscale Mode",
      description: "Make your phone less entertaining by removing colors.",
      examples: [
        "Search 'Grayscale' in phone settings",
        "Or check accessibility settings",
        "It makes screens less addictive",
      ],
      color: "text-purple-500",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl text-center"
        >
          <div className="mb-6">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Check Your Email!</h1>
          <p className="text-xl text-gray-400 mb-8">
            We've sent you a personalized report with strategies to reduce your screen time by 50%.
          </p>
          <p className="text-gray-500 mb-8">
            We'll check in with you in 2 weeks to see how you're doing.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Start Over
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A Plan to Reduce Screen Time
          </h1>
          <p className="text-xl text-gray-400">
            The 4 most effective strategies to win back your time
          </p>
        </motion.div>

        {/* Strategies */}
        <div className="space-y-8 mb-12">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <strategy.icon className={`w-8 h-8 ${strategy.color} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{strategy.title}</h3>
                  <p className="text-gray-400 mb-4">{strategy.description}</p>
                  <ul className="space-y-2">
                    {strategy.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Want a personalized report of your results?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            For free, along with the 4 proven strategies to reduce your screen time by 50%
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-6 py-4 bg-white text-black rounded-lg text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Yes, fix my screen time'}
            </button>
            <p className="text-sm text-gray-400 mt-4">
              This is a free service. We don't sell your data. You can unsubscribe anytime.
            </p>
          </form>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl italic text-gray-400 border-l-4 border-cyan-500 pl-4 py-2">
            "You could leave life right now. Let that determine what you do and say and think."
            <footer className="text-sm text-gray-500 mt-2">— Marcus Aurelius, Meditations</footer>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
}
