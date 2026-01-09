import * as React from "react";

const Select = ({ children, value, onValueChange }: { children: React.ReactNode; value: string; onValueChange: (value: string) => void }) => {
  return <div>{children}</div>;
};

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }>(
  ({ className = "", children, ...props }, ref) => (
    <button ref={ref} type="button" className={`w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-left ${className}`} {...props}>
      {children}
    </button>
  )
);
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder }: { placeholder?: string }) => <span>{placeholder}</span>;

const SelectContent = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mt-2 rounded-xl border bg-white dark:bg-slate-700 ${className}`}>{children}</div>
);

const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600">{children}</div>
);

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
