import { useState, useEffect, useRef } from 'react';
import { Search, CheckCircle, XCircle, Award, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type CertificateResult = {
  valid: boolean;
  id?: string;
  studentName?: string;
  course?: string;
  issueDate?: string;
  grade?: string;
  skills?: string[];
};

const CertificateVerification = () => {
  const [inView, setInView] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<CertificateResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVerification = async () => {
    if (!certificateId.trim()) return;
    setIsLoading(true);
    setVerificationResult(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/verify-certificate?certificateId=${encodeURIComponent(certificateId)}`);
      const data = await res.json();
      setVerificationResult(data);
    } catch (err) {
      setVerificationResult({ valid: false, id: certificateId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Certificate <span className="flame-gradient bg-clip-text text-transparent">Verification</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Verify the authenticity of Ignivance certificates and badges
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Search Section */}
          <Card className={`bg-white dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 mb-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white text-2xl flex items-center">
                <Search className="mr-3" size={24} />
                Verify Certificate
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Enter the certificate ID to verify its authenticity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="certId" className="text-gray-900 dark:text-white">Certificate ID</Label>
                <Input 
                  id="certId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white" 
                  placeholder="Enter certificate ID (e.g., IGN-2024-001)"
                />
              </div>
              
              <Button 
                onClick={handleVerification}
                disabled={isLoading || !certificateId.trim()}
                className="w-full flame-gradient hover-glow text-white font-semibold py-3"
              >
                {isLoading ? 'Verifying...' : 'Verify Certificate'}
              </Button>
            </CardContent>
          </Card>

          {/* Verification Result */}
          {verificationResult && (
            <Card className={`bg-white dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white text-2xl flex items-center">
                  {verificationResult.valid ? (
                    <>
                      <CheckCircle className="mr-3 text-emerald-400" size={24} />
                      Certificate Verified
                    </>
                  ) : (
                    <>
                      <XCircle className="mr-3 text-red-400" size={24} />
                      Certificate Not Found
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {verificationResult.valid ?
                  <div className="space-y-6">
                    {/* Student Name */}
                    <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <User className="mr-2 text-blue-400" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">Student Name</span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold">{verificationResult.studentName}</p>
                    </div>
                    {/* Course */}
                    <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Award className="mr-2 text-orange-400" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">Course</span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold">{verificationResult.course}</p>
                    </div>
                    {/* Issue Date */}
                    <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="mr-2 text-green-400" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">Issue Date</span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold">{verificationResult.issueDate}</p>
                    </div>
                    {/* Grade */}
                    <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Award className="mr-2 text-yellow-400" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">Grade</span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold text-2xl">{verificationResult.grade}</p>
                    </div>
                    {/* Skills Verified */}
                    <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Skills Verified</h4>
                      <div className="flex flex-wrap gap-2">
                        {verificationResult.skills.map((skill: string, idx: number) => (
                          <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                : (
                  <div className="text-center py-8">
                    <XCircle className="mx-auto mb-4 text-red-400" size={48} />
                    <p className="text-gray-700 dark:text-gray-300">
                      Certificate with ID "{verificationResult.id}" was not found in our database.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Please check the ID and try again, or contact support if you believe this is an error.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Sample Certificate IDs */}
          <div className={`mt-8 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Sample Certificate IDs for testing:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setCertificateId('IGN-2024-001')}
                className="bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm transition-colors"
              >
                IGN-2024-001
              </button>
              <button 
                onClick={() => setCertificateId('IGN-2024-002')}
                className="bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm transition-colors"
              >
                IGN-2024-002
              </button>
              <button 
                onClick={() => setCertificateId('IGN-2024-003')}
                className="bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm transition-colors"
              >
                IGN-2024-003
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateVerification;
