import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setSuccess('');
    setError('');
    if (f) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          if (Array.isArray(json)) {
            setCertificates(json);
          } else {
            setCertificates([json]);
          }
        } catch (err) {
          setCertificates([]);
          setError('Invalid JSON file.');
        }
      };
      reader.readAsText(f);
    } else {
      setCertificates([]);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/upload-certificates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(certificates),
      });
      if (res.ok) {
        setSuccess('Certificates uploaded successfully!');
        setCertificates([]);
        setFile(null);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to upload certificates.');
      }
    } catch (err) {
      setError('Failed to upload certificates.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Admin Certificate Upload</CardTitle>
            <CardDescription className="text-gray-300">
              Upload a JSON file containing certificate data for bulk import.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Input type="file" accept="application/json" onChange={handleFileChange} className="bg-slate-700 border-slate-600 text-white" />
              {certificates.length > 0 && (
                <div className="bg-slate-700/50 p-4 rounded-lg text-gray-200 text-sm max-h-64 overflow-auto">
                  <div className="mb-2 font-semibold">Preview ({certificates.length} certificates):</div>
                  <pre className="whitespace-pre-wrap break-all">{JSON.stringify(certificates, null, 2)}</pre>
                </div>
              )}
              <Button onClick={handleUpload} disabled={uploading || certificates.length === 0} className="w-full flame-gradient hover-glow text-white font-semibold py-3">
                {uploading ? 'Uploading...' : 'Upload Certificates'}
              </Button>
              {success && <div className="text-green-400 text-center">{success}</div>}
              {error && <div className="text-red-400 text-center">{error}</div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdminUpload; 