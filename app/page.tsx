"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Clock, Users, BookOpen, Target } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function Home() {
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Reclaim Your Life
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Break free from digital addiction and rebuild your life with ancient wisdom
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            A comprehensive platform rooted in Stoic and Buddhist philosophy to help you understand your screen time impact and develop a mindful relationship with technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/assess")}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2 group"
            >
              Calculate Your Time
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-lg font-medium transition-all"
            >
              Learn More
            </button>
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
      <section id="learn-more" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            The Digital Addiction Crisis
          </motion.h2>
          
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
      <section className="py-20 px-4 bg-gray-900">
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
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
