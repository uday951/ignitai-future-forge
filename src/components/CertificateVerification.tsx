
import { useState, useEffect, useRef } from 'react';
import { Search, CheckCircle, XCircle, Award, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CertificateVerification = () => {
  const [inView, setInView] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
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
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification data
      const mockData = {
        valid: true,
        studentName: "Priya Sharma",
        course: "Full Stack Development with AI",
        issueDate: "2024-06-15",
        expiryDate: "2026-06-15",
        grade: "A+",
        skills: ["React", "Node.js", "Python", "MongoDB", "AI/ML"],
        msmeRegistered: true,
        id: certificateId
      };
      
      setVerificationResult(mockData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Certificate <span className="flame-gradient bg-clip-text text-transparent">Verification</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Verify the authenticity of IgnitAI certificates and badges
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Search Section */}
          <Card className={`bg-slate-800/50 border-slate-700 mb-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Search className="mr-3" size={24} />
                Verify Certificate
              </CardTitle>
              <CardDescription className="text-gray-300">
                Enter the certificate ID to verify its authenticity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="certId" className="text-white">Certificate ID</Label>
                <Input 
                  id="certId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white" 
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
            <Card className={`bg-slate-800/50 border-slate-700 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
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
                {verificationResult.valid ? (
                  <div className="space-y-6">
                    {/* Student Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <User className="mr-2 text-blue-400" size={16} />
                          <span className="text-gray-400">Student Name</span>
                        </div>
                        <p className="text-white font-semibold">{verificationResult.studentName}</p>
                      </div>
                      
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Award className="mr-2 text-orange-400" size={16} />
                          <span className="text-gray-400">Course</span>
                        </div>
                        <p className="text-white font-semibold">{verificationResult.course}</p>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Calendar className="mr-2 text-green-400" size={16} />
                          <span className="text-gray-400">Issue Date</span>
                        </div>
                        <p className="text-white font-semibold">{verificationResult.issueDate}</p>
                      </div>
                      
                      <div className="bg-slate-700/50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Calendar className="mr-2 text-purple-400" size={16} />
                          <span className="text-gray-400">Valid Until</span>
                        </div>
                        <p className="text-white font-semibold">{verificationResult.expiryDate}</p>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Award className="mr-2 text-yellow-400" size={16} />
                        <span className="text-gray-400">Grade</span>
                      </div>
                      <p className="text-white font-semibold text-2xl">{verificationResult.grade}</p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Skills Verified</h4>
                      <div className="flex flex-wrap gap-2">
                        {verificationResult.skills.map((skill: string, idx: number) => (
                          <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* MSME Badge */}
                    {verificationResult.msmeRegistered && (
                      <div className="bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 text-emerald-400" size={20} />
                          <span className="text-emerald-400 font-semibold">MSME Registered Institution</span>
                        </div>
                        <p className="text-gray-300 text-sm mt-1">
                          This certificate is issued by an MSME-registered educational institution
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <XCircle className="mx-auto mb-4 text-red-400" size={48} />
                    <p className="text-gray-300">
                      Certificate with ID "{verificationResult.id}" was not found in our database.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Please check the ID and try again, or contact support if you believe this is an error.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Sample Certificate IDs */}
          <div className={`mt-8 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-gray-400 text-sm mb-2">Sample Certificate IDs for testing:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setCertificateId('IGN-2024-001')}
                className="bg-slate-700 hover:bg-slate-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
              >
                IGN-2024-001
              </button>
              <button 
                onClick={() => setCertificateId('IGN-2024-002')}
                className="bg-slate-700 hover:bg-slate-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
              >
                IGN-2024-002
              </button>
              <button 
                onClick={() => setCertificateId('IGN-2024-003')}
                className="bg-slate-700 hover:bg-slate-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
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
