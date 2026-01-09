import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = "default", ...props }, ref) => {
    const sizeClass = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3";
    return (
      <button
        ref={ref}
        className={`${sizeClass} rounded-xl font-semibold ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
