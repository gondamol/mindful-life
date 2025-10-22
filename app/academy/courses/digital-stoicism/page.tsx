"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  ChevronDown, ChevronRight, Play, Lock, CheckCircle,
  Clock, BookOpen, Award, ArrowRight, Star
} from "lucide-react";

interface Module {
  id: number;
  title: string;
  duration: string;
  isFree: boolean;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'exercise';
  content?: string;
}

export default function DigitalStoicismCourse() {
  const router = useRouter();
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const modules: Module[] = [
    {
      id: 1,
      title: "Introduction: Why Stoicism for Digital Life?",
      duration: "25 min",
      isFree: true,
      lessons: [
        {
          id: 1,
          title: "Welcome to Digital Stoicism",
          duration: "8 min",
          type: "video",
          content: `
# Welcome to Digital Stoicism

**What you'll learn in this course:**

This course bridges 2,000 years of Stoic philosophy with the challenges of modern digital life. You'll discover how Marcus Aurelius, Seneca, and Epictetus would handle smartphones, social media, and the attention economy.

## Why Stoicism?

The Stoics faced their own distractions:
- **Marcus Aurelius** - Roman Emperor managing an empire
- **Seneca** - Wealthy advisor surrounded by luxury
- **Epictetus** - Former slave who found freedom in his mind

They all asked the same question: **"What can I control, and what must I accept?"**

## The Digital Challenge

Today's distractions are designed by engineers to be irresistible:
- Infinite scroll
- Push notifications
- Variable rewards
- Social validation

**But the Stoic principles still work.**

## What You'll Master

### Module 1: Foundations
- The dichotomy of control (what you can/can't control)
- Applying it to digital temptations

### Module 2: Mindful Attention
- Where your attention goes, your life follows
- Stoic exercises for focus

### Module 3-8: Advanced Practices
- Daily routines from Marcus Aurelius
- Negative visualization for gratitude
- Voluntary discomfort exercises
- And much more...

## Your Transformation

By the end of this course, you'll:
✓ Control your attention instead of being controlled  
✓ Use technology intentionally, not compulsively  
✓ Apply Stoic wisdom to modern challenges  
✓ Build unshakeable inner peace  

**Let's begin.**

---

*Ready for the next lesson? Continue to "The Dichotomy of Control"*
          `
        },
        {
          id: 2,
          title: "The Dichotomy of Control Explained",
          duration: "12 min",
          type: "video",
          content: `
# The Dichotomy of Control

> "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control." — Epictetus

## The Foundation of Stoicism

This is THE most important Stoic concept. Master this, and everything else follows.

### Two Categories of Everything

**1. Things You Control (Internal):**
- Your thoughts
- Your judgments
- Your reactions
- Your values
- Your effort
- Your attention

**2. Things You Don't Control (External):**
- Other people's opinions
- Social media algorithms
- Notification timing
- Content that appears
- How many likes you get
- What others post

## Applied to Digital Life

### Scenario 1: Social Media Post

**Don't Control:**
- How many likes it gets
- What comments people leave
- Who shares it
- The algorithm's reach

**Do Control:**
- Whether you post at all
- The quality of content
- How much you check responses
- Your reaction to feedback
- Whether you let it affect your mood

**Stoic Response:** Post if it aligns with your values. Then let go of outcomes.

### Scenario 2: Group Chat Notification

**Don't Control:**
- When others message
- What they say
- Group dynamics
- FOMO if you miss something

**Do Control:**
- Whether notifications are on
- When you check messages
- How long you engage
- Your emotional response
- Setting boundaries

**Stoic Response:** Turn off notifications. Check on YOUR schedule. Respond mindfully.

### Scenario 3: Infinite Scroll

**Don't Control:**
- What content appears
- How engaging it is
- Recommendation algorithms
- The endless nature of the feed

**Do Control:**
- Whether you open the app
- How long you scroll
- When you close it
- Installing blockers
- Deleting the app entirely

**Stoic Response:** The app doesn't control you. YOU control the app.

## The Exercise

For the next 3 days, notice when you feel frustrated, angry, or anxious about digital life.

Ask: **"Is this within my control?"**

- **If yes** → Take action
- **If no** → Let it go (practice now)

## Example Journal:

*"Frustrated that my post only got 12 likes."*  
→ **Not in my control.** Let it go. Focus on creating good content.

*"Angry I wasted 2 hours scrolling."*  
→ **Within my control.** Delete app. Set boundaries.

*"Anxious about missing messages."*  
→ **Partly controllable.** Set check-in times. Accept you can't see everything.

## Remember

> "We suffer more in imagination than in reality." — Seneca

Most digital stress comes from worrying about things outside your control.

**Focus on what you CAN control. Let go of the rest.**

---

*Next lesson: "Practical Exercise - The Control Audit"*
          `
        },
        {
          id: 3,
          title: "Practical Exercise: The Control Audit",
          duration: "5 min",
          type: "exercise",
          content: `
# Exercise: The Control Audit

## Instructions (5 minutes)

Take out a piece of paper. Draw a line down the middle.

### Left Column: "I CONTROL"
List all your digital behaviors you can control.

Examples:
- When I check phone
- Apps installed
- Notification settings
- Screen time limits
- Whether I respond immediately

### Right Column: "I DON'T CONTROL"
List what's outside your control.

Examples:
- Others' posts
- Algorithm content
- How many likes I get
- When others message
- Trending topics

## The Insight

Look at your lists.

**99% of your stress comes from the RIGHT column.**  
**100% of your power lives in the LEFT column.**

## This Week's Challenge

Choose ONE thing from your "I CONTROL" column.

Change it this week.

Examples:
- Delete one distracting app
- Turn off all notifications
- Set phone check times (9am, 2pm, 6pm only)
- Move phone out of bedroom
- Install website blocker

## Share Your Progress

When you complete this exercise, you'll understand why Epictetus said:

> "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control."

---

**🔒 UNLOCK MORE:** Ready to go deeper? Modules 2-8 teach advanced Stoic practices for digital mastery. Enroll now for full access.
          `
        }
      ]
    },
    {
      id: 2,
      title: "Mindful Attention: Where Focus Goes, Life Follows",
      duration: "35 min",
      isFree: true,
      lessons: [
        {
          id: 1,
          title: "The Attention Economy Exposed",
          duration: "15 min",
          type: "video",
          content: `
# The Attention Economy Exposed

> "You have power over your mind—not outside events. Realize this, and you will find strength." — Marcus Aurelius

## Your Attention Is the Product

Social media companies aren't selling apps. **They're selling YOUR attention to advertisers.**

### The Business Model

1. **Free app** (you're not the customer)
2. **Your attention** (you're the product)
3. **Sold to advertisers** (they're the customer)

**Goal:** Keep you scrolling as long as possible.

### The Engineering

Apps are designed by:
- Behavioral psychologists
- UX experts
- AI engineers
- Addiction specialists

**They know more about keeping you hooked than you know about resisting.**

## Marcus Aurelius on Attention

He wrote in his journal:

> "The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts."

**Translation:** What you pay attention to shapes who you become.

### Modern Application

**Scroll mindless content** → Become mindless  
**Read philosophy** → Become philosophical  
**Watch rage bait** → Become angry  
**Consume intentionally** → Become intentional

## The Stoic Solution

### 1. Awareness

Notice where your attention goes.

Track for one day:
- How many times you check phone
- What you look at
- How long you spend
- How you feel after

### 2. Intention

Before opening an app, ask:
- "Why am I doing this?"
- "What do I want from this?"
- "Is this aligned with my values?"

### 3. Boundaries

Your attention is limited. Guard it.

**Seneca's wisdom:**
> "It is not that we have a short time to live, but that we waste a lot of it."

## This Week

Practice ONE of these:

**Option A: Phone Check Inventory**
Every time you reach for your phone, pause. Note why.

**Option B: Intentional Use Only**
Open apps only with specific purpose. Close when done.

**Option C: Attention Budget**
Decide in advance: "I'll spend 20 minutes on social media today." Stick to it.

## Remember

**You are what you pay attention to.**

Choose wisely.

---

*Ready to learn how to build an unbreakable focus habit? Continue to Module 2, Lesson 2.*
          `
        },
        {
          id: 2,
          title: "Building Unbreakable Focus",
          duration: "20 min",
          type: "video"
        }
      ]
    },
    {
      id: 3,
      title: "Module 3: Voluntary Discomfort (Premium)",
      duration: "40 min",
      isFree: false,
      lessons: [
        { id: 1, title: "Why Stoics Practiced Discomfort", duration: "15 min", type: "video" },
        { id: 2, title: "Digital Fasting: Your First Challenge", duration: "15 min", type: "video" },
        { id: 3, title: "Exercise: 24-Hour Phone Detox", duration: "10 min", type: "exercise" }
      ]
    },
    {
      id: 4,
      title: "Module 4: Morning Routine from Marcus Aurelius (Premium)",
      duration: "30 min",
      isFree: false,
      lessons: [
        { id: 1, title: "How an Emperor Started His Day", duration: "12 min", type: "video" },
        { id: 2, title: "Adapting Ancient Rituals for Modern Life", duration: "10 min", type: "reading" },
        { id: 3, title: "Your Stoic Morning Template", duration: "8 min", type: "exercise" }
      ]
    },
    {
      id: 5,
      title: "Module 5: Negative Visualization (Premium)",
      duration: "35 min",
      isFree: false,
      lessons: []
    },
    {
      id: 6,
      title: "Module 6: The View from Above (Premium)",
      duration: "30 min",
      isFree: false,
      lessons: []
    },
    {
      id: 7,
      title: "Module 7: Stoic Journaling Practice (Premium)",
      duration: "25 min",
      isFree: false,
      lessons: []
    },
    {
      id: 8,
      title: "Module 8: Building Your Stoic Life (Premium)",
      duration: "40 min",
      isFree: false,
      lessons: []
    }
  ];

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleLessonClick = (lesson: Lesson, isFree: boolean) => {
    if (!isFree) {
      // Show enrollment modal
      router.push('/academy/enroll');
      return;
    }
    
    if (lesson.content) {
      setSelectedLesson(lesson);
    }
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

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Course Info */}
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 mb-6">
                  <div className="text-5xl mb-4">🏛️</div>
                  <h1 className="text-2xl font-bold mb-2">Digital Stoicism</h1>
                  <p className="text-gray-400 text-sm mb-4">
                    Ancient wisdom for modern distraction
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>4 weeks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>8 modules</span>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                      <Star className="w-4 h-4 fill-green-400" />
                      <span>2 FREE modules to preview!</span>
                    </div>
                  </div>

                  <button
                    onClick={() => router.push('/academy/enroll')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    Enroll for Full Access
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Course Progress */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">Course Modules</h3>
                  <div className="space-y-2">
                    {modules.map((module) => (
                      <div key={module.id}>
                        <button
                          onClick={() => toggleModule(module.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                            expandedModule === module.id
                              ? 'bg-blue-500/10 border border-blue-500/20'
                              : 'hover:bg-gray-800'
                          }`}
                        >
                          <div className="flex items-center gap-3 text-left">
                            {module.isFree ? (
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            ) : (
                              <Lock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            )}
                            <div>
                              <div className="text-sm font-medium">{module.title}</div>
                              <div className="text-xs text-gray-500">{module.duration}</div>
                            </div>
                          </div>
                          {expandedModule === module.id ? (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {expandedModule === module.id && module.lessons.length > 0 && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-11 pr-3 py-2 space-y-1">
                                {module.lessons.map((lesson) => (
                                  <button
                                    key={lesson.id}
                                    onClick={() => handleLessonClick(lesson, module.isFree)}
                                    className="w-full flex items-center gap-2 p-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-all text-left"
                                  >
                                    {lesson.type === 'video' && <Play className="w-4 h-4 flex-shrink-0" />}
                                    {lesson.type === 'reading' && <BookOpen className="w-4 h-4 flex-shrink-0" />}
                                    {lesson.type === 'exercise' && <Award className="w-4 h-4 flex-shrink-0" />}
                                    <span className="flex-1">{lesson.title}</span>
                                    <span className="text-xs text-gray-600">{lesson.duration}</span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="lg:col-span-2">
              {selectedLesson ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {selectedLesson.type === 'video' && <Play className="w-6 h-6 text-blue-400" />}
                    {selectedLesson.type === 'reading' && <BookOpen className="w-6 h-6 text-purple-400" />}
                    {selectedLesson.type === 'exercise' && <Award className="w-6 h-6 text-green-400" />}
                    <div>
                      <h2 className="text-2xl font-bold">{selectedLesson.title}</h2>
                      <p className="text-gray-400 text-sm">{selectedLesson.duration}</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <div 
                      className="text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: selectedLesson.content?.split('\n').map(line => {
                          if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold mb-4 mt-8">${line.slice(2)}</h1>`;
                          if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mb-3 mt-6">${line.slice(3)}</h2>`;
                          if (line.startsWith('### ')) return `<h3 class="text-xl font-bold mb-2 mt-4">${line.slice(4)}</h3>`;
                          if (line.startsWith('> ')) return `<blockquote class="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-400">${line.slice(2)}</blockquote>`;
                          if (line.startsWith('**') && line.endsWith('**')) return `<p class="font-bold my-2">${line.slice(2, -2)}</p>`;
                          if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) return `<p class="italic my-2 text-gray-400">${line.slice(1, -1)}</p>`;
                          if (line.startsWith('- ')) return `<li class="ml-4 my-1">${line.slice(2)}</li>`;
                          if (line.startsWith('✓ ')) return `<li class="ml-4 my-1 flex items-start gap-2"><span class="text-green-400">✓</span>${line.slice(2)}</li>`;
                          if (line.trim() === '---') return '<hr class="my-6 border-gray-800" />';
                          if (line.trim() === '') return '<br />';
                          return `<p class="my-3">${line}</p>`;
                        }).join('') || ''
                      }}
                    />
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
                  <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Select a Lesson to Begin</h3>
                  <p className="text-gray-400 mb-6">
                    Choose a lesson from the sidebar to start learning
                  </p>
                  <p className="text-sm text-green-400">
                    ✨ Module 1 & 2 are FREE to preview!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
