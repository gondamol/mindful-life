"use client";

import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === params.id);
    setPost(foundPost || null);
  }, [params.id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <button
            onClick={() => router.push('/blog')}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

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
              onClick={() => router.push('/blog')}
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </button>
          </div>
        </div>
      </nav>

      {/* Article Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Category Badge */}
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-400 mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-blue-400 transition-colors ml-auto">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-gray-300 prose-ul:my-6
              prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/##\s/g, '<h2>').replace(/###\s/g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">⏰</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See How Much Time You're Really Losing
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Take our 2-minute assessment and get your personalized action plan to reclaim your life.
            </p>
            <button
              onClick={() => router.push('/assess')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-medium transition-all inline-flex items-center gap-2"
            >
              Calculate Your Time
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => router.push(`/blog/${relatedPost.id}`)}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden cursor-pointer group hover:border-gray-700 transition-all"
                >
                  <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 flex items-center justify-center border-b border-gray-800">
                    <span className="text-5xl">{relatedPost.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
