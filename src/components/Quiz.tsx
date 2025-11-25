import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Code, FileText, Trophy, X, Sparkles } from 'lucide-react';
import TopicSelector from './quiz/TopicSelector';
import RoundOneMCQ from './quiz/RoundOneMCQ';
import RoundTwoCode from './quiz/RoundTwoCode';
import Result from './quiz/Result';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export type QuizStep = 'topic' | 'mcq' | 'coding' | 'result';

export interface MCQ {
  question: string;
  options: string[];
  correct: string;
}

export interface CodingTask {
  question: string;
  expectedHTML: string;
}

export interface QuizData {
  mcqs: MCQ[];
  coding: CodingTask[];
}

export interface QuizResult {
  mcqScore: number;
  codingScore: number;
  totalScore: number;
  mcqTotal: number;
  codingTotal: number;
}

const Quiz = ({ isOpen, onClose }: QuizProps) => {
  const [step, setStep] = useState<QuizStep>('topic');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.anime) {
      window.anime({
        targets: '.quiz-modal',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  }, [isOpen]);

  const resetQuiz = () => {
    setStep('topic');
    setSelectedTopics([]);
    setQuizData(null);
    setResult(null);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const getStepIcon = () => {
    switch (step) {
      case 'topic': return <Brain className="w-6 h-6" />;
      case 'mcq': return <FileText className="w-6 h-6" />;
      case 'coding': return <Code className="w-6 h-6" />;
      case 'result': return <Trophy className="w-6 h-6" />;
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 'topic': return 'Select Topics';
      case 'mcq': return 'Round 1: MCQ Quiz';
      case 'coding': return 'Round 2: Coding Quiz';
      case 'result': return 'Quiz Results';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2">
      <Card className="quiz-modal w-full max-w-4xl bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-500/30 shadow-2xl max-h-[90vh] overflow-hidden relative">
        <CardContent className="p-4 relative z-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">
                {getStepIcon()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI Quiz</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{getStepTitle()}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Compact Progress */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              {['topic', 'mcq', 'coding', 'result'].map((s, index) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === s ? 'bg-orange-500 text-white' : 
                    ['topic', 'mcq', 'coding', 'result'].indexOf(step) > index ? 'bg-green-500 text-white' : 
                    'bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className={`w-8 h-1 mx-1 rounded ${
                      ['topic', 'mcq', 'coding', 'result'].indexOf(step) > index ? 'bg-green-500' : 'bg-gray-200 dark:bg-slate-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="max-h-[70vh] overflow-y-auto">
            {step === 'topic' && (
              <TopicSelector
                selectedTopics={selectedTopics}
                setSelectedTopics={setSelectedTopics}
                setStep={setStep}
                setQuizData={setQuizData}
              />
            )}

            {step === 'mcq' && quizData && (
              <RoundOneMCQ
                mcqs={quizData.mcqs}
                setStep={setStep}
                setResult={setResult}
              />
            )}

            {step === 'coding' && quizData && result && (
              <RoundTwoCode
                codingTasks={quizData.coding}
                currentResult={result}
                setStep={setStep}
                setResult={setResult}
              />
            )}

            {step === 'result' && result && (
              <Result
                result={result}
                onRestart={resetQuiz}
                onClose={handleClose}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;