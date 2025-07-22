import * as React from "react";

export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
