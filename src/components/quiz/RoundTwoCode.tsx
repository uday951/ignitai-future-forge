import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Eye, Code, Play, Zap } from 'lucide-react';
import type { CodingTask, QuizStep, QuizResult } from '../Quiz';

interface RoundTwoCodeProps {
  codingTasks: CodingTask[];
  currentResult: QuizResult;
  setStep: (step: QuizStep) => void;
  setResult: (result: QuizResult) => void;
}

const RoundTwoCode = ({ codingTasks, currentResult, setStep, setResult }: RoundTwoCodeProps) => {
  const [currentTask, setCurrentTask] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [isFinished, setIsFinished] = useState(false);
  const [codingScores, setCodingScores] = useState<boolean[]>([]);
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      finishRound();
    }
  }, [timeLeft, isFinished]);

  const checkCode = async (code: string, expectedHTML: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://ignitaibackend.onrender.com'}/api/quiz/check-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userCode: code, expectedHTML })
      });

      if (!response.ok) throw new Error('Failed to check code');

      const result = await response.json();
      return result.correct;
    } catch (error) {
      console.error('Error checking code:', error);
      // Simple fallback check
      return code.toLowerCase().includes(expectedHTML.toLowerCase().replace(/<[^>]*>/g, ''));
    }
  };

  const submitCode = async () => {
    const isCorrect = await checkCode(userCode, codingTasks[currentTask].expectedHTML);
    const newScores = [...codingScores];
    newScores[currentTask] = isCorrect;
    setCodingScores(newScores);

    if (currentTask < codingTasks.length - 1) {
      setCurrentTask(currentTask + 1);
      setUserCode('');
    } else {
      finishRound();
    }
  };

  const finishRound = () => {
    setIsFinished(true);
    
    const codingScore = codingScores.filter(score => score).length;
    const totalScore = currentResult.mcqScore + codingScore;

    const finalResult: QuizResult = {
      ...currentResult,
      codingScore,
      totalScore
    };

    setResult(finalResult);
    setStep('result');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentCodingTask = codingTasks[currentTask];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: '.coding-task',
        scale: [0.95, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, [currentTask]);

  return (
    <div className="space-y-4">
      {/* Compact Timer */}
      <div className="flex justify-between items-center bg-green-50 dark:bg-slate-700 p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <Code className={`w-5 h-5 ${timeLeft <= 60 ? 'text-red-500' : 'text-green-500'}`} />
          <span className={`font-bold ${timeLeft <= 60 ? 'text-red-500' : 'text-green-600 dark:text-green-400'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Task {currentTask + 1}/{codingTasks.length}
        </div>
      </div>

      {/* Simple Progress */}
      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
        <div 
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentTask + 1) / codingTasks.length) * 100}%` }}
        />
      </div>

      {/* Compact Task */}
      <div className="coding-task bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {currentCodingTask?.question}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Code Editor */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Your Code</span>
            </div>
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="Write your HTML/CSS code here..."
              className="w-full h-48 p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-mono text-sm resize-none"
            />
          </div>

          {/* Live Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Preview</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? 'Hide' : 'Show'}
              </Button>
            </div>
            {showPreview && (
              <div className="border border-gray-300 dark:border-slate-600 rounded-lg h-48 bg-white">
                <iframe
                  srcDoc={userCode}
                  className="w-full h-full rounded-lg"
                  title="Code Preview"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Simple Navigation */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {codingScores.filter(s => s !== undefined).length} of {codingTasks.length} completed
        </div>
        <Button
          onClick={submitCode}
          disabled={!userCode.trim()}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          {currentTask === codingTasks.length - 1 ? 'Complete Quiz' : 'Submit & Next'}
        </Button>
      </div>

      {/* Simple Hint */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-400">
          💡 <strong>Tip:</strong> Write clean HTML/CSS code and use the preview to test.
        </p>
      </div>
    </div>
  );
};

export default RoundTwoCode;