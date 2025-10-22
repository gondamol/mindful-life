import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
  subscription_status: 'free' | 'active' | 'cancelled';
  subscription_end_date?: string;
}

export interface CourseProgress {
  id: string;
  user_id: string;
  course_id: string;
  module_id: number;
  lesson_id: number;
  completed: boolean;
  completed_at?: string;
  quiz_score?: number;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  module_id: number;
  score: number;
  total_questions: number;
  passed: boolean;
  attempted_at: string;
}

// Helper Functions
export async function getUserProgress(userId: string, courseId: string) {
  const { data, error } = await supabase
    .from('course_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('course_id', courseId);
  
  return { data, error };
}

export async function markLessonComplete(
  userId: string,
  courseId: string,
  moduleId: number,
  lessonId: number
) {
  const { data, error } = await supabase
    .from('course_progress')
    .upsert({
      user_id: userId,
      course_id: courseId,
      module_id: moduleId,
      lesson_id: lessonId,
      completed: true,
      completed_at: new Date().toISOString()
    });
  
  return { data, error };
}

export async function saveQuizAttempt(
  userId: string,
  moduleId: number,
  score: number,
  totalQuestions: number
) {
  const passed = (score / totalQuestions) >= 0.7; // 70% pass rate
  
  const { data, error } = await supabase
    .from('quiz_attempts')
    .insert({
      user_id: userId,
      module_id: moduleId,
      score,
      total_questions: totalQuestions,
      passed,
      attempted_at: new Date().toISOString()
    });
  
  return { data, error };
}
