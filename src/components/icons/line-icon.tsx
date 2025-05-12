// src/components/icons/line-icon.tsx
import React from "react";

interface LineIconProps {
  className?: string;
}

export function LineIcon({ className }: LineIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <title>LINE</title>
      {/* バブル形状のパス（Simple Icons 準拠） */}
      <path d="M22 12c0 4.97-4.03 9-9 9c-1.9 0-3.7-.62-5.16-1.67L4.15 21.58c-.34.14-.71-.2-.6-.54l1.26-3.57C3.64 15.38 3 13.7 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
    </svg>
  );
}
