"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle, Lock, Award, TrendingUp } from "lucide-react";

interface Module {
  id: number;
  title: string;
  lessonsCompleted: number;
  totalLessons: number;
  quizPassed: boolean;
  isLocked: boolean;
}

interface ProgressTrackerProps {
  courseTitle: string;
  modules: Module[];
  overallProgress: number;
}

export default function ProgressTracker({ courseTitle, modules, overallProgress }: ProgressTrackerProps) {
  const completedModules = modules.filter(m => m.lessonsCompleted === m.totalLessons && m.quizPassed).length;
  const totalModules = modules.length;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{courseTitle}</h3>
          <p className="text-gray-400">
            {completedModules} of {totalModules} modules completed
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {overallProgress}%
          </div>
          <p className="text-xs text-gray-500">Complete</p>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />
        </div>
      </div>

      {/* Module Progress */}
      <div className="space-y-4">
        {modules.map((module, index) => {
          const progress = (module.lessonsCompleted / module.totalLessons) * 100;
          const isComplete = module.lessonsCompleted === module.totalLessons && module.quizPassed;

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${
                module.isLocked
                  ? 'border-gray-800 bg-gray-900/50 opacity-50'
                  : isComplete
                  ? 'border-green-500/30 bg-green-500/5'
                  : 'border-gray-800 bg-gray-900/80'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  module.isLocked
                    ? 'bg-gray-800'
                    : isComplete
                    ? 'bg-green-500/20'
                    : 'bg-blue-500/20'
                }`}>
                  {module.isLocked ? (
                    <Lock className="w-5 h-5 text-gray-600" />
                  ) : isComplete ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-blue-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{module.title}</h4>
                    <span className="text-sm text-gray-400">
                      {module.lessonsCompleted}/{module.totalLessons} lessons
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className={`h-full ${
                        isComplete ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                    />
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    {module.quizPassed && (
                      <span className="flex items-center gap-1 text-green-400">
                        <Award className="w-3 h-3" />
                        Quiz Passed
                      </span>
                    )}
                    {isComplete && (
                      <span className="flex items-center gap-1 text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        Module Complete
                      </span>
                    )}
                    {module.isLocked && (
                      <span className="text-gray-600">
                        Complete previous module to unlock
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement Section */}
      {overallProgress === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30 rounded-xl text-center"
        >
          <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2">🎉 Course Completed!</h4>
          <p className="text-gray-300 mb-4">
            Congratulations! You've mastered Digital Stoicism.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-lg font-bold transition-all">
            Download Certificate
          </button>
        </motion.div>
      )}

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-gray-900 rounded-lg">
          <TrendingUp className="w-5 h-5 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-400">{completedModules}</div>
          <div className="text-xs text-gray-500">Modules Done</div>
        </div>
        <div className="text-center p-4 bg-gray-900 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-400">
            {modules.reduce((sum, m) => sum + m.lessonsCompleted, 0)}
          </div>
          <div className="text-xs text-gray-500">Lessons Complete</div>
        </div>
        <div className="text-center p-4 bg-gray-900 rounded-lg">
          <Award className="w-5 h-5 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-400">
            {modules.filter(m => m.quizPassed).length}
          </div>
          <div className="text-xs text-gray-500">Quizzes Passed</div>
        </div>
      </div>
    </div>
  );
}
