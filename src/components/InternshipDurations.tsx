import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const domains = [
  { name: "Fullstack", color: "bg-blue-500/20 border-blue-500/30 text-blue-400" },
  { name: "Frontend", color: "bg-orange-500/20 border-orange-500/30 text-orange-400" },
  { name: "Backend", color: "bg-purple-500/20 border-purple-500/30 text-purple-400" },
  // { name: "Data Science", color: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" },
  // { name: "Machine Learning", color: "bg-pink-500/20 border-pink-500/30 text-pink-400" },
];

const durations = [
  { label: "1 Month", value: "1" },
  { label: "2 Months", value: "2" },
  { label: "3 Months", value: "3" },
];

// Mapping for Google Form links per domain/duration
const googleFormLinks: Record<string, string> = {
  // Example: "Fullstack-1": "https://forms.gle/yourformid1",
  // For now, use the same link for all
  // "Fullstack-1": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Fullstack-2": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Fullstack-3": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Frontend-1": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Frontend-2": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Frontend-3": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Backend-1": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Backend-2": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Backend-3": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Data Science-1": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Data Science-2": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Data Science-3": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Machine Learning-1": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Machine Learning-2": "https://forms.gle/bPWKAicSDoBKvVLz7",
  // "Machine Learning-3": "https://forms.gle/bPWKAicSDoBKvVLz7",
};

export default function InternshipDurations() {
  const [selected, setSelected] = useState<{ domain: string; duration: string } | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const formKey = selected ? `${selected.domain}-${selected.duration}` : "";
  const formLink = formKey && googleFormLinks[formKey];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? "animate-slide-up" : "opacity-0"}`}>
            Internship <span className="flame-gradient bg-clip-text text-transparent">Durations</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`}>
            Choose your preferred domain and internship duration. Click a duration to apply.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, idx) => (
            <Card
              key={domain.name}
              className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-glow group ${domain.color} ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-white text-xl">{domain.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {durations.map((duration) => (
                    <Button
                      key={duration.value}
                      className="flame-gradient hover-glow text-white font-semibold px-4 py-2 text-base transition-all duration-300"
                      onClick={() => setSelected({ domain: domain.name, duration: duration.value })}
                    >
                      {duration.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Modal/Popup for Google Form */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in">
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-slate-700 text-center">
              {/* Close X button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-3xl font-extrabold mb-6 text-white tracking-tight">
                {selected.domain} Internship
                <span className="block text-lg font-semibold mt-2 text-orange-400">
                  {durations.find(d => d.value === selected.duration)?.label}
                </span>
              </h3>
              {formLink ? (
                <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-8 w-full"
                >
                  <Button className="w-full flame-gradient hover-glow text-white font-semibold py-3 text-lg rounded-lg">
                    Open Application Form
                  </Button>
                </a>
              ) : (
                <p className="mb-8 text-gray-300">
                  [Google Form for {selected.domain} - {durations.find(d => d.value === selected.duration)?.label} Internship will appear here.]
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 