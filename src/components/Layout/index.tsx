import { HTMLAttributes, ReactNode } from "react";
import { trim } from "../../utils/functions/general.ts";

export default function Layout({
  children,
  className = "",
  ...attributes
}: Readonly<{
  children: ReactNode;
  className?: string;
}> &
  HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      id="layout"
      dir="rtl"
      className={trim(`
        grid
        grid-cols-1
        min-w-full
        min-h-screen
        overflow-x-hidden
        ${className}`)}
      {...attributes}
    >
      {children}
    </div>
  );
}
