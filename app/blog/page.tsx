"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { ArrowRight, Calendar, Clock, BookOpen, Search, X } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Digital Wellness Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Evidence-based articles on digital wellness, productivity, and reclaiming your attention in the age of distraction.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-blue-600 text-white border-2 border-blue-500"
                  : "bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:border-gray-700"
              }`}
            >
              All Articles ({blogPosts.length})
            </button>
            {categories.map((category) => {
              const count = blogPosts.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white border-2 border-blue-500"
                      : "bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:border-gray-700"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </motion.div>

          {/* Results Count */}
          {(selectedCategory || searchQuery) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
              {(selectedCategory || searchQuery) && filteredPosts.length > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery("");
                  }}
                  className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-2xl text-gray-400 mb-4">No articles found</p>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(`/blog/${post.id}`)}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden cursor-pointer group hover:border-gray-700 transition-all hover:scale-105"
              >
                {/* Emoji Header */}
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 flex items-center justify-center border-b border-gray-800">
                  <span className="text-6xl">{post.image}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
              ))}
            </div>
          )}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take our 2-minute assessment and get your personalized action plan.
            </p>
            <button
              onClick={() => router.push('/assess')}
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
