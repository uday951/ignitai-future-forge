import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, Zap } from 'lucide-react';
import type { MCQ, QuizStep, QuizResult } from '../Quiz';

interface RoundOneMCQProps {
  mcqs: MCQ[];
  setStep: (step: QuizStep) => void;
  setResult: (result: QuizResult) => void;
}

const RoundOneMCQ = ({ mcqs, setStep, setResult }: RoundOneMCQProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(90); // 90 seconds
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      finishRound();
    }
  }, [timeLeft, isFinished]);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < mcqs.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishRound();
    }
  };

  const finishRound = () => {
    setIsFinished(true);
    
    // Calculate score
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === mcqs[index]?.correct) {
        correct++;
      }
    });

    const mcqScore = correct;
    const result: QuizResult = {
      mcqScore,
      codingScore: 0,
      totalScore: mcqScore,
      mcqTotal: mcqs.length,
      codingTotal: 3
    };

    setResult(result);
    setStep('coding');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentMCQ = mcqs[currentQuestion];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: '.mcq-question',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo'
      });
    }
  }, [currentQuestion]);

  return (
    <div className="space-y-4">
      {/* Compact Timer */}
      <div className="flex justify-between items-center bg-orange-50 dark:bg-slate-700 p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <Clock className={`w-5 h-5 ${timeLeft <= 30 ? 'text-red-500' : 'text-blue-500'}`} />
          <span className={`font-bold ${timeLeft <= 30 ? 'text-red-500' : 'text-blue-600 dark:text-blue-400'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {currentQuestion + 1}/{mcqs.length}
        </div>
      </div>

      {/* Simple Progress */}
      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
        <div 
          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / mcqs.length) * 100}%` }}
        />
      </div>

      {/* Compact Question */}
      <div className="mcq-question bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {currentMCQ?.question}
        </h3>

        <div className="space-y-2">
          {currentMCQ?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${
                selectedAnswers[currentQuestion] === option
                  ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/20'
                  : 'border-gray-200 dark:border-slate-600 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === option
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300 dark:border-slate-500'
                }`}>
                  {selectedAnswers[currentQuestion] === option && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-gray-900 dark:text-white">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Simple Navigation */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {selectedAnswers.filter(a => a).length} of {mcqs.length} answered
        </div>
        <Button
          onClick={nextQuestion}
          disabled={!selectedAnswers[currentQuestion]}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          {currentQuestion === mcqs.length - 1 ? 'Finish Round 1' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default RoundOneMCQ;