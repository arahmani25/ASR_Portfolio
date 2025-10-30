import React from "react";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  active?: boolean;
  headless?: boolean;
}

export function RetroWindow({
  title,
  children,
  onClose,
  className = "",
  active = true,
  headless = false,
}: RetroWindowProps) {
  if (headless) {
    return (
      <div className={`window headless ${className}`}>
        <article>{children}</article>
      </div>
    );
  }

  return (
    <div
      className={`window ${active ? "active" : ""} ${className}`}
    >
      <div className="title-bar">
        <h1 className="title">{title}</h1>
      </div>
      <div className="window-pane">{children}</div>
    </div>
  );
}