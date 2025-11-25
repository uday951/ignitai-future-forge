// QUICK BACKEND SETUP - Add this to your existing Express server

// Add this at the top of your server file (after other imports)
const activeInterviews = new Map();

const questionBanks = {
  frontend: [
    "What interests you most about creating user interfaces and web experiences?",
    "How would you approach learning React and modern JavaScript?",
    "Describe a website or app you admire and what makes it special.",
    "What motivates you to pursue frontend development?",
    "How do you handle challenges when learning new technologies?"
  ],
  backend: [
    "What interests you about server-side development and APIs?",
    "How would you approach learning Node.js and databases?",
    "Describe a backend system or API you find interesting.",
    "What motivates you to pursue backend development?",
    "How do you approach problem-solving in technical projects?"
  ],
  fullstack: [
    "What interests you about full-stack development?",
    "How would you approach learning both frontend and backend technologies?",
    "Describe a complete application you'd like to build.",
    "What motivates you to pursue full-stack development?",
    "How do you manage learning multiple technologies at once?"
  ]
};

const calculateScore = (answers, courseTrack) => {
  let score = 50;
  const keywords = {
    frontend: ['react', 'javascript', 'ui', 'ux', 'design', 'user', 'interface', 'css', 'html'],
    backend: ['api', 'database', 'server', 'node', 'express', 'mongodb', 'sql', 'backend'],
    fullstack: ['fullstack', 'complete', 'both', 'frontend', 'backend', 'full', 'stack', 'end-to-end']
  };
  
  const trackKeywords = keywords[courseTrack] || [];
  
  answers.forEach(answer => {
    const lowerAnswer = answer.toLowerCase();
    if (answer.length > 50) score += 5;
    if (answer.length > 100) score += 5;
    
    const foundKeywords = trackKeywords.filter(keyword => lowerAnswer.includes(keyword));
    score += foundKeywords.length * 3;
    
    const enthusiasmWords = ['excited', 'passionate', 'love', 'enjoy', 'interested', 'motivated'];
    const foundEnthusiasm = enthusiasmWords.filter(word => lowerAnswer.includes(word));
    score += foundEnthusiasm.length * 2;
  });
  
  return Math.min(Math.max(score, 20), 100);
};

const generateFeedback = (score, answers, courseTrack) => {
  const courseNames = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    fullstack: 'Fullstack Development'
  };
  
  let strengths = [];
  let improvements = [];
  let feedback = '';
  
  if (score >= 80) {
    strengths = ['Strong communication skills', 'Clear learning goals', 'Good technical awareness'];
    improvements = ['Continue building projects', 'Join developer communities'];
    feedback = `Excellent! You show strong potential for ${courseNames[courseTrack]}. Your responses demonstrate clear goals and good technical understanding.`;
  } else if (score >= 60) {
    strengths = ['Good motivation', 'Willingness to learn', 'Basic understanding'];
    improvements = ['Build more hands-on projects', 'Practice technical concepts', 'Engage with coding communities'];
    feedback = `Great start! You have good motivation for ${courseNames[courseTrack]}. Focus on hands-on practice to strengthen your foundation.`;
  } else {
    strengths = ['Interest in technology', 'Willingness to start learning'];
    improvements = ['Start with basics', 'Practice regularly', 'Build simple projects', 'Join beginner-friendly communities'];
    feedback = `Good foundation! ${courseNames[courseTrack]} is perfect for building your skills from the ground up. Start with fundamentals and practice consistently.`;
  }
  
  return { strengths, improvements, feedback, recommendedCourse: courseNames[courseTrack] };
};

// ADD THESE 3 ROUTES TO YOUR EXPRESS APP:

// Route 1: Start Interview
app.post('/api/ai-interview/start', (req, res) => {
  try {
    const { courseTrack } = req.body;
    const sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    
    activeInterviews.set(sessionId, {
      courseTrack,
      answers: [],
      startTime: new Date(),
      questions: questionBanks[courseTrack] || questionBanks.fullstack
    });
    
    setTimeout(() => activeInterviews.delete(sessionId), 60 * 60 * 1000);
    
    res.json({
      sessionId,
      questions: questionBanks[courseTrack] || questionBanks.fullstack
    });
  } catch (error) {
    console.error('Error starting interview:', error);
    res.status(500).json({ error: 'Failed to start interview' });
  }
});

// Route 2: Submit Answer
app.post('/api/ai-interview/submit-answer', (req, res) => {
  try {
    const { sessionId, answer, questionIndex } = req.body;
    const session = activeInterviews.get(sessionId);
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    session.answers[questionIndex] = answer;
    
    res.json({
      analysis: { length: answer.length, wordCount: answer.split(' ').length },
      nextQuestion: questionIndex + 1 < session.questions.length ? questionIndex + 1 : null
    });
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({ error: 'Failed to submit answer' });
  }
});

// Route 3: Get Results
app.get('/api/ai-interview/results/:sessionId', (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = activeInterviews.get(sessionId);
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    const score = calculateScore(session.answers, session.courseTrack);
    const feedbackData = generateFeedback(score, session.answers, session.courseTrack);
    
    const results = { score, ...feedbackData };
    activeInterviews.delete(sessionId);
    
    res.json(results);
  } catch (error) {
    console.error('Error getting results:', error);
    res.status(500).json({ error: 'Failed to get results' });
  }
});

// That's it! Your AI Interview feature is now ready to use.