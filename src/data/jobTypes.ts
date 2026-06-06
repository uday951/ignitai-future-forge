export interface JobOpportunity {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  jobType: 'Full-Time' | 'Internship' | 'Remote' | 'Part-Time';
  category: 'jobs' | 'internships' | 'off-campus-drives' | 'government-jobs';
  eligibility: string;
  education: string;
  skills: string[];
  salary: string;
  selectionProcess: string[];
  importantDates: { [key: string]: string };
  howToApply: string;
  applyLink: string;
  sourceLink: string;
  aboutCompany: string;
  uniqueExplanation: string; // Min 300 words
  prepTips: string[];
  interviewTips: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  datePosted: string;
  validThrough: string;
}
