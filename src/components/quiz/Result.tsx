import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, Star, RotateCcw, X, Award, TrendingUp, Target } from 'lucide-react';
import type { QuizResult } from '../Quiz';

interface ResultProps {
  result: QuizResult;
  onRestart: () => void;
  onClose: () => void;
}

const Result = ({ result, onRestart, onClose }: ResultProps) => {
  const { mcqScore, codingScore, totalScore, mcqTotal, codingTotal } = result;
  const maxScore = mcqTotal + codingTotal;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-500', message: 'Outstanding!' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-400', message: 'Excellent!' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-500', message: 'Great job!' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-400', message: 'Good work!' };
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-500', message: 'Keep practicing!' };
    return { grade: 'D', color: 'text-red-500', message: 'Need improvement!' };
  };

  const gradeInfo = getGrade();

  const getStars = () => {
    if (percentage >= 90) return 5;
    if (percentage >= 80) return 4;
    if (percentage >= 70) return 3;
    if (percentage >= 60) return 2;
    return 1;
  };

  const stars = getStars();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: '.result-card',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: window.anime.stagger(200),
        easing: 'easeOutElastic(1, .8)'
      });
      
      window.anime({
        targets: '.score-circle',
        rotate: [0, 360],
        duration: 2000,
        easing: 'easeOutExpo',
        delay: 500
      });
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Simple Header */}
      <div className="text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Complete!</h3>
        <div className="text-3xl font-bold text-orange-500 mb-2">{percentage}%</div>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Grade: <span className={gradeInfo.color}>{gradeInfo.grade}</span>
        </div>
      </div>



      {/* Simple Scores */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
          <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">📝 MCQ Round</h4>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{mcqScore}/{mcqTotal}</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">{Math.round((mcqScore / mcqTotal) * 100)}%</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center">
          <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">💻 Coding Round</h4>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{codingScore}/{codingTotal}</div>
          <div className="text-sm text-green-700 dark:text-green-300">{Math.round((codingScore / codingTotal) * 100)}%</div>
        </div>
      </div>

      {/* Simple Feedback */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
        <h4 className="font-semibold text-orange-800 dark:text-orange-400 mb-3">🎯 Feedback</h4>
        <p className="text-orange-700 dark:text-orange-300 mb-3">{gradeInfo.message}</p>
        <div className="text-sm text-orange-600 dark:text-orange-400">
          {percentage >= 80 ? 'Ready for advanced topics!' : percentage >= 60 ? 'Keep practicing to improve!' : 'Focus on fundamentals first.'}
        </div>
      </div>

      {/* Simple Action Buttons */}
      <div className="flex gap-3 justify-center">
        <Button
          onClick={onRestart}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
        <Button
          onClick={() => window.open('https://forms.gle/HSBNwpgYK78n7yWx5', '_blank')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          🚀 Enroll
        </Button>
        <Button
          variant="outline"
          onClick={onClose}
          className="px-6 py-2 rounded-lg"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Result;