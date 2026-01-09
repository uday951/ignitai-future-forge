import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';

const ShareStorySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://ignitaibackend.onrender.com'}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          role: formData.role,
          company: formData.company,
          quote: formData.message,
          rating: formData.rating,
          badges: [],
          linkedin: '',
          image: ''
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', role: '', company: '', message: '', rating: 5 });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-green-600 dark:text-green-400 fill-current" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Thank You! 🎉</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Your story has been shared successfully and will appear in testimonials!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="share-story" className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">✨ Share Your Success Story</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Help others by sharing your learning journey</p>
          </div>

          <div className="bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                placeholder="Your Name"
              />
              
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full p-3 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                placeholder="Your Role (e.g., Student, Developer)"
              />
              
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full p-3 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                placeholder="Company/Institution (Optional)"
              />

              <div>
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</p>
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="p-1"
                    >
                      <Star 
                        className={`w-6 h-6 ${star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-400 dark:text-gray-500'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-3 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                placeholder="Share your experience..."
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 shadow-xl text-sm"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Share My Story
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">✨ Share Your Success Story</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Help others by sharing your learning journey with Ignivance</p>
          </div>

          <div className="bg-white dark:bg-premium-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Role</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full p-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="e.g., Student, Developer, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company/Institution</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full p-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Where do you work/study? (Optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="p-1"
                      >
                        <Star 
                          className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Story</label>
                  <textarea
                    required
                    rows={8}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Share your experience with our courses, what you learned, how it helped you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 shadow-xl text-lg"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Share My Story
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareStorySection;