# AI Interview Backend Integration

## Quick Setup Instructions

### 1. Add Routes to Your Express Server

In your existing Express server file, add these routes:

```javascript
// Import the AI interview functions
const { startInterview, submitAnswer, getResults } = require('./ai-interview-routes.js');

// Add these routes to your app
app.post('/api/ai-interview/start', startInterview);
app.post('/api/ai-interview/submit-answer', submitAnswer);
app.get('/api/ai-interview/results/:sessionId', getResults);
```

### 2. Copy the Routes File

Copy the `ai-interview-routes.js` file to your backend directory and require it in your main server file.

### 3. Test the Integration

The frontend is already configured to use your existing API URL from `VITE_API_URL` environment variable.

## How It Works

### Frontend Flow:
1. User clicks "Free AI Interview" button
2. Modal opens with course selection
3. 5 questions are asked (text or voice input)
4. Answers are sent to backend for analysis
5. Results displayed with course recommendations

### Backend Flow:
1. `/start` - Creates session, returns questions
2. `/submit-answer` - Stores answer, returns analysis
3. `/results` - Calculates score, returns recommendations, cleans up session

### Key Features:
- ✅ **No Database Required** - Uses in-memory storage
- ✅ **Auto Cleanup** - Sessions expire after 1 hour
- ✅ **Simple Scoring** - Keyword-based algorithm
- ✅ **Voice Support** - Web Speech API integration
- ✅ **Mobile Optimized** - Responsive design

## Customization Options

### Add More Questions:
Edit the `questionBanks` object in `ai-interview-routes.js`

### Improve Scoring:
Modify the `calculateScore` function to add more sophisticated analysis

### Add AI Integration:
Replace the simple scoring with actual AI API calls (Hugging Face, OpenAI, etc.)

## Testing

1. Start your backend server
2. Open the frontend
3. Click "Free AI Interview" button
4. Complete the 5-question interview
5. View personalized results

The feature is now live and ready to use! 🚀