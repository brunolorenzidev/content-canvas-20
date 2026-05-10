import type React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function ShinyButton({ children, onClick, className = "", href, target, rel }: ShinyButtonProps) {
  if (href) {
    return (
      <a className={`shiny-cta ${className}`} href={href} target={target} rel={rel}>
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button className={`shiny-cta ${className}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
