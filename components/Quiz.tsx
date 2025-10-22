"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from "lucide-react";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  moduleId: number;
  moduleTitle: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, passed: boolean) => void;
}

export default function Quiz({ moduleId, moduleTitle, questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const passThreshold = 0.7; // 70%
  const totalQuestions = questions.length;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Already answered
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setUserAnswers([...userAnswers, answerIndex]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz complete
      const passed = (score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)) / totalQuestions >= passThreshold;
      setQuizComplete(true);
      if (onComplete) {
        onComplete(score, passed);
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setUserAnswers([]);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const finalScore = score;
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    const passed = percentage >= (passThreshold * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-8 text-center"
      >
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
          passed ? 'bg-green-500/20 border-4 border-green-500' : 'bg-red-500/20 border-4 border-red-500'
        }`}>
          {passed ? (
            <Award className="w-12 h-12 text-green-400" />
          ) : (
            <XCircle className="w-12 h-12 text-red-400" />
          )}
        </div>

        <h2 className="text-3xl font-bold mb-4">
          {passed ? '🎉 Quiz Passed!' : 'Keep Practicing'}
        </h2>

        <div className="mb-6">
          <div className="text-5xl font-bold mb-2">
            <span className={passed ? 'text-green-400' : 'text-red-400'}>
              {percentage}%
            </span>
          </div>
          <p className="text-gray-400">
            {finalScore} out of {totalQuestions} correct
          </p>
        </div>

        {passed ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400">
              Excellent work! You've mastered the concepts in this module.
              Continue to the next module to keep learning.
            </p>
          </div>
        ) : (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-400">
              You need {Math.ceil(passThreshold * 100)}% to pass. Review the module content and try again.
            </p>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-medium flex items-center gap-2 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Retry Quiz
          </button>
          {passed && (
            <button
              onClick={() => window.location.href = '/academy/courses/digital-stoicism'}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium flex items-center gap-2 transition-all"
            >
              Continue Course
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{moduleTitle} Quiz</h2>
          <span className="text-gray-400">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showResult = showExplanation;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    !showResult
                      ? 'border-gray-700 hover:border-blue-500 hover:bg-gray-800'
                      : isSelected && isCorrect
                      ? 'border-green-500 bg-green-500/10'
                      : isSelected && !isCorrect
                      ? 'border-red-500 bg-red-500/10'
                      : isCorrect
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-700 opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <>
                        {isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        {isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border mb-6 ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-blue-500/10 border-blue-500/30'
              }`}
            >
              <p className="text-sm">
                <strong>
                  {selectedAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect.'}
                </strong>
                {' '}
                {question.explanation}
              </p>
            </motion.div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <button
              onClick={handleNextQuestion}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
