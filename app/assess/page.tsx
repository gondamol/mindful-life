"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, HelpCircle } from "lucide-react";

export default function AssessPage() {
  const router = useRouter();
  const [age, setAge] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const ageNum = parseInt(age);
    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;

    if (ageNum && ageNum > 0 && ageNum < 100) {
      // Store data in sessionStorage
      sessionStorage.setItem("lifeData", JSON.stringify({
        age: ageNum,
        dailyScreenHours: hoursNum,
        dailyScreenMinutes: minutesNum,
      }));
      
      router.push("/results");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Calculate Your Time
          </h1>
          <p className="text-xl text-gray-400">
            Find out how screens impact your life
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Age Input */}
          <div>
            <label className="block text-lg mb-3">Your Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full px-6 py-4 bg-white text-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="1"
              max="99"
            />
          </div>

          {/* Screen Time Input */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <label className="text-lg">Daily Screen Time</label>
              <div className="group relative">
                <HelpCircle className="w-5 h-5 text-cyan-500 cursor-help" />
                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 z-10">
                  Include time on phones, tablets, computers, TV, and gaming consoles
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Hours"
                  className="w-full px-6 py-4 bg-white text-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  max="24"
                />
                <p className="text-sm text-gray-500 mt-2">Hours</p>
              </div>
              <div>
                <input
                  type="number"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  placeholder="Minutes"
                  className="w-full px-6 py-4 bg-white text-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  max="59"
                />
                <p className="text-sm text-gray-500 mt-2">Minutes</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center gap-2 group"
          >
            Show me my results
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/")}
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
