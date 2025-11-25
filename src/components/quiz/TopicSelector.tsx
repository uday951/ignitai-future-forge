import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code, FileText, Layers, Zap } from 'lucide-react';
import type { QuizStep, QuizData } from '../Quiz';

interface TopicSelectorProps {
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  setStep: (step: QuizStep) => void;
  setQuizData: (data: QuizData) => void;
}

const TopicSelector = ({ selectedTopics, setSelectedTopics, setStep, setQuizData }: TopicSelectorProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const topics = [
    { id: 'html', name: 'HTML', icon: <FileText className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
    { id: 'css', name: 'CSS', icon: <Code className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'both', name: 'HTML + CSS', icon: <Layers className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' }
  ];

  const handleTopicSelect = (topicId: string) => {
    if (topicId === 'both') {
      setSelectedTopics(['html', 'css']);
    } else {
      setSelectedTopics([topicId]);
    }
  };

  const generateQuiz = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://ignitaibackend.onrender.com'}/api/quiz/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topics: selectedTopics })
      });

      if (!response.ok) throw new Error('Failed to generate quiz');

      const data = await response.json();
      setQuizData(data);
      setStep('mcq');
    } catch (error) {
      console.error('Error generating quiz:', error);
      // Demo fallback
      const demoData = {
        mcqs: [
          {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            correct: "<a>"
          },
          {
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            correct: "Cascading Style Sheets"
          }
        ],
        coding: [
          {
            question: "Create a red button with white text that says 'Click Me'",
            expectedHTML: '<button style="background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Click Me</button>'
          }
        ]
      };
      setQuizData(demoData);
      setStep('mcq');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: '.topic-card',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: window.anime.stagger(200),
        easing: 'easeOutExpo'
      });
    }
  }, []);

  return (
    <div className="space-y-10">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-6 py-3 rounded-full mb-6">
          <Zap className="w-5 h-5 text-orange-500" />
          <span className="text-orange-600 dark:text-orange-400 font-semibold">AI-Powered Assessment</span>
        </div>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 dark:from-white dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4">
          Choose Your Challenge
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Select your expertise area for a personalized AI-generated quiz experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 overflow-hidden">
        {topics.map((topic, index) => (
          <button
            key={topic.id}
            onClick={() => handleTopicSelect(topic.id)}
            className={`topic-card group relative p-4 rounded-2xl border-2 transition-all duration-500 ${
              (topic.id === 'both' && selectedTopics.includes('html') && selectedTopics.includes('css')) ||
              (topic.id !== 'both' && selectedTopics.includes(topic.id))
                ? `border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 shadow-xl shadow-orange-500/25`
                : 'border-gray-200 dark:border-slate-600 hover:border-orange-300 bg-white dark:bg-slate-800/50 hover:shadow-lg'
            }`}
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
              (topic.id === 'both' && selectedTopics.includes('html') && selectedTopics.includes('css')) ||
              (topic.id !== 'both' && selectedTopics.includes(topic.id))
                ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-100'
                : 'opacity-0 group-hover:opacity-50'
            }`}></div>
            
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${topic.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <div className="w-4 h-4">{topic.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {topic.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {topic.id === 'both' ? 'Master both HTML & CSS in one comprehensive test' : `Deep dive into ${topic.name} concepts and best practices`}
              </p>
              
              {/* Selection Indicator */}
              {((topic.id === 'both' && selectedTopics.includes('html') && selectedTopics.includes('css')) ||
                (topic.id !== 'both' && selectedTopics.includes(topic.id))) && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={generateQuiz}
          disabled={selectedTopics.length === 0 || isLoading}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Generating AI Quiz...
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              Launch AI Challenge
            </div>
          )}
        </Button>
      </div>

      <div className="bg-gradient-to-r from-orange-50 via-white to-red-50 dark:from-slate-800/50 dark:via-slate-700/50 dark:to-slate-800/50 p-8 rounded-3xl border border-orange-200 dark:border-orange-500/30 shadow-lg">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            🎯 Challenge Structure
          </h4>
          <p className="text-gray-600 dark:text-gray-400">Two intensive rounds to test your skills</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-orange-100 dark:border-orange-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white">MCQ Round</h5>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                10 AI-generated questions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                90 seconds challenge
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Multiple choice format
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-orange-100 dark:border-orange-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white">Coding Round</h5>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                3 hands-on challenges
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                3 minutes coding time
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Live preview & validation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicSelector;