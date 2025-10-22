import { BookOpen, Video, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  const resources = {
    tedTalks: [
      {
        title: "Quit social media",
        author: "Dr. Cal Newport",
        url: "https://www.youtube.com/watch?v=3E7hkPZ-HTk",
        description: "TEDxTysons"
      },
      {
        title: "The Battle for Your Time",
        author: "Dino Ambrosi",
        url: "https://www.youtube.com/watch?v=4TMPXK9tw5U",
        description: "TEDxLagunaBlancaSchool"
      },
      {
        title: "How to Achieve Your Most Ambitious Goals",
        author: "Stephen Duneier",
        url: "https://www.youtube.com/watch?v=TQMbvJNRpLE",
        description: "TEDxTucson"
      }
    ],
    books: [
      {
        title: "Deep Work",
        author: "Cal Newport",
        description: "Rules for focused success in a distracted world"
      },
      {
        title: "Digital Minimalism",
        author: "Cal Newport",
        description: "Choosing a focused life in a noisy world"
      },
      {
        title: "Meditations",
        author: "Marcus Aurelius",
        description: "Timeless Stoic wisdom for modern life"
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        description: "Tiny changes, remarkable results"
      },
      {
        title: "The Practicing Mind",
        author: "Thomas M. Sterner",
        description: "Developing focus and discipline"
      },
      {
        title: "Essentialism",
        author: "Greg McKeown",
        description: "The disciplined pursuit of less"
      }
    ],
    stoicResources: [
      {
        title: "Daily Stoic",
        url: "https://dailystoic.com/",
        description: "Daily Stoic wisdom and practices"
      },
      {
        title: "Stoicism Subreddit",
        url: "https://www.reddit.com/r/Stoicism/",
        description: "Community discussions on Stoic philosophy"
      },
      {
        title: "Massimo Pigliucci",
        url: "https://howtobeastoic.wordpress.com/",
        description: "How to Be a Stoic blog"
      }
    ],
    tools: [
      {
        title: "Freedom",
        url: "https://freedom.to/",
        description: "Block distracting websites and apps"
      },
      {
        title: "Forest",
        url: "https://www.forestapp.cc/",
        description: "Stay focused, be present"
      },
      {
        title: "RescueTime",
        url: "https://www.rescuetime.com/",
        description: "Automatic time tracking"
      }
    ]
  };

  return (
    <footer className="bg-black border-t border-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Resources Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Resources for Your Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* TED Talks */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-bold">Essential TED Talks</h4>
              </div>
              <ul className="space-y-3">
                {resources.tedTalks.map((talk, idx) => (
                  <li key={idx}>
                    <a
                      href={talk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="flex items-start gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-400">
                            {talk.title}
                          </div>
                          <div className="text-sm">{talk.author}</div>
                          <div className="text-xs text-gray-600">{talk.description}</div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Books */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-yellow-500" />
                <h4 className="text-xl font-bold">Must-Read Books</h4>
              </div>
              <ul className="space-y-3">
                {resources.books.map((book, idx) => (
                  <li key={idx} className="text-gray-400">
                    <div className="font-medium text-white">{book.title}</div>
                    <div className="text-sm">by {book.author}</div>
                    <div className="text-xs text-gray-600">{book.description}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stoic Resources & Tools */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-purple-500" />
                  <h4 className="text-xl font-bold">Stoic Resources</h4>
                </div>
                <ul className="space-y-3">
                  {resources.stoicResources.map((resource, idx) => (
                    <li key={idx}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="flex items-start gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-white group-hover:text-purple-400">
                              {resource.title}
                            </div>
                            <div className="text-xs text-gray-600">{resource.description}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">Digital Wellness Tools</h4>
                <ul className="space-y-3">
                  {resources.tools.map((tool, idx) => (
                    <li key={idx}>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="flex items-start gap-2 text-gray-400 hover:text-green-400 transition-colors">
                          <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-white group-hover:text-green-400">
                              {tool.title}
                            </div>
                            <div className="text-xs text-gray-600">{tool.description}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">📚 Downloadable Workbooks</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/workbooks/module-1-workbook.md"
                      download
                      className="group"
                    >
                      <div className="flex items-start gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <BookOpen className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-400">
                            Module 1: Control Audit Workbook
                          </div>
                          <div className="text-xs text-gray-600">Free • 50+ pages of exercises</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/academy/courses/digital-stoicism"
                      className="group"
                    >
                      <div className="flex items-start gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <BookOpen className="w-4 h-4 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-white group-hover:text-blue-400">
                            More Workbooks in Course
                          </div>
                          <div className="text-xs text-gray-600">Enroll to unlock all 8 modules</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ubuntu Wisdom Academy Promo */}
        <div className="mb-12 p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Life?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join Ubuntu Wisdom Academy and master ancient philosophy for modern living. 
            Break free from digital addiction, find your purpose, and build a meaningful life.
          </p>
          <a
            href="/academy"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold transition-all"
          >
            Explore Academy
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact & Support</h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-400">
                  Have questions or want to support this project?
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:nichodemuswerre@gmail.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <span>📧</span> nichodemuswerre@gmail.com
                  </a>
                  <a
                    href="tel:+254725737867"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <span>📱</span> +254 725 737 867
                  </a>
                  <a
                    href="https://buymeacoffee.com/nichodemus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-medium transition-all mt-2"
                  >
                    ☕ Buy me a coffee
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
                <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a>
                <a href="/academy" className="text-gray-400 hover:text-blue-400 transition-colors">Academy</a>
                <a href="/assess" className="text-gray-400 hover:text-blue-400 transition-colors">Calculate Time</a>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm space-y-2">
            <p className="font-medium text-gray-400">
              &ldquo;You could leave life right now. Let that determine what you do and say and think.&rdquo;
            </p>
            <p className="text-xs">— Marcus Aurelius, Meditations</p>
            <div className="pt-4">
              <p>Built with ❤️ for digital wellness in Kenya and beyond</p>
              <p className="mt-1">
                Inspired by Cal Newport, Dino Ambrosi, Stephen Duneier, and Stoic Philosophy
              </p>
              <p className="mt-2 text-xs text-gray-600">
                © 2025 Mindful Life • Ubuntu Wisdom Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
