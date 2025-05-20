import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  children: ReactNode;
  className?: string;
  variant?: "full" | "sm" | "md" | "base"; // variant optional, default "base"
}

export default function PageContainer({
  children,
  className,
  variant = "base",
}: IProps) {
  const variantClass = {
    full: "w-full px-4",
    sm: "max-w-screen-sm mx-auto px-4",
    md: "max-w-screen-md mx-auto px-4",
    base: "max-w-screen-lg mx-auto px-4",
  };

  return (
    <div className={twMerge(variantClass[variant], className)}>{children}</div>
  );
}
