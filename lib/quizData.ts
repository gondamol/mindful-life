import { QuizQuestion } from "@/components/Quiz";

// Quiz for Module 3: Voluntary Discomfort
export const module3Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: "Why did ancient Stoics practice voluntary discomfort?",
    options: [
      "They enjoyed suffering",
      "To prepare for real hardships and build resilience",
      "It was a religious requirement",
      "To impress other philosophers"
    ],
    correctAnswer: 1,
    explanation: "Stoics practiced voluntary discomfort to prepare for inevitable hardships and build mental resilience. Seneca wrote: 'Set aside days to practice poverty.' This wasn't about suffering, but about building strength."
  },
  {
    id: 2,
    question: "What is the main benefit of a 24-hour digital detox?",
    options: [
      "Saving battery life",
      "Proving you can survive without technology",
      "Saving money on data",
      "Becoming a better person"
    ],
    correctAnswer: 1,
    explanation: "The primary benefit is proving to yourself that you're not controlled by technology. It builds confidence and reveals that most 'urgent' digital matters aren't actually urgent."
  },
  {
    id: 3,
    question: "According to the module, what happens around hour 13-20 of a digital fast?",
    options: [
      "Severe withdrawal symptoms",
      "Mental clarity and insights emerge",
      "Complete boredom",
      "Physical illness"
    ],
    correctAnswer: 1,
    explanation: "Around hour 13-20, mental clarity typically emerges. Your thoughts become clearer, present moment awareness increases, and insights surface. This is when you remember who you are beyond your digital persona."
  },
  {
    id: 4,
    question: "What does 'comfort addiction' refer to?",
    options: [
      "Being too comfortable in life",
      "Always needing soft furniture",
      "Using digital devices to escape any form of discomfort",
      "Eating too much comfort food"
    ],
    correctAnswer: 2,
    explanation: "Comfort addiction means using technology (phones, social media, entertainment) to immediately escape any form of discomfort - boredom, anxiety, silence, or difficult emotions. This prevents building resilience."
  },
  {
    id: 5,
    question: "What is the correct mindset toward discomfort in Stoicism?",
    options: [
      "Avoid it at all costs",
      "Embrace it as a teacher and tool for growth",
      "Complain about it constantly",
      "Ignore it and pretend it doesn't exist"
    ],
    correctAnswer: 1,
    explanation: "Stoics view discomfort as a teacher and tool for growth. Epictetus said: 'Difficulties are things that show a person what they are made of.' By choosing discomfort, you build strength for when it's not a choice."
  }
];

// Quiz for Module 4: Marcus Aurelius Morning Routine
export const module4Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: "What was Marcus Aurelius's primary reason for his morning routine?",
    options: [
      "To show off his discipline",
      "To control the day before it controlled him",
      "Because he enjoyed waking early",
      "To avoid his responsibilities"
    ],
    correctAnswer: 1,
    explanation: "Marcus's morning routine was about taking control of his day before external demands controlled him. As emperor, he could have done anything - but chose to start with philosophy, reflection, and preparation."
  },
  {
    id: 2,
    question: "According to the module, what should you do BEFORE checking your phone in the morning?",
    options: [
      "Check email",
      "Brush teeth only",
      "Complete your morning routine (reading, journaling, exercise)",
      "Make breakfast"
    ],
    correctAnswer: 2,
    explanation: "The phone should only be checked AFTER completing your morning routine. Marcus Aurelius wrote: 'The happiness of your life depends upon the quality of your thoughts.' Scrolling first thing pollutes your thoughts."
  },
  {
    id: 3,
    question: "What is 'Memento Mori' and why is it important in the morning?",
    options: [
      "A Latin breakfast recipe",
      "A type of meditation music",
      "'Remember death' - reminds you life is short and to focus on what matters",
      "A Roman greeting"
    ],
    correctAnswer: 2,
    explanation: "Memento Mori means 'Remember death.' Starting your day with this reminder helps you focus on what truly matters. Marcus wrote: 'You could leave life right now. Let that determine what you do and say and think.'"
  },
  {
    id: 4,
    question: "What is the minimum viable morning routine suggested in the module?",
    options: [
      "2 hours of meditation",
      "5 minutes: don't check phone, death meditation, write intentions, cold water, breathe, move",
      "1 hour of exercise",
      "30 minutes of reading"
    ],
    correctAnswer: 1,
    explanation: "The minimum viable routine is just 5 minutes: don't check phone, do a 30-second death meditation, write 3 intentions, splash cold water on face, take 3 deep breaths, and move your body for 2 minutes. Simple but powerful."
  },
  {
    id: 5,
    question: "Why did Marcus Aurelius practice voluntary hardship despite being emperor?",
    options: [
      "He was frugal and wanted to save money",
      "To prepare for potential loss and build character",
      "He didn't like luxury",
      "To impress the Roman Senate"
    ],
    correctAnswer: 1,
    explanation: "Despite unlimited wealth and power, Marcus practiced hardship (cold baths, simple food, rough clothing) to prepare for potential loss and build character. He knew comfort makes you weak, and wanted to remain mentally strong regardless of circumstances."
  }
];

// Export all quizzes
export const quizzes = {
  module3: module3Quiz,
  module4: module4Quiz,
};
